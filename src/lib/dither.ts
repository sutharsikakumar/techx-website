/**
 * Dither fields, ported from the design file's canvas code.
 *
 * Each draw function writes RGBA pixels into a cell-resolution buffer:
 * one pixel per `cell` × `cell` square on screen. `useDitherCanvas`
 * clears the buffer before every frame and scales the result up.
 */

/** Bayer 4×4 ordered-dither matrix. */
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5] as const;

const bayer = (gx: number, gy: number): number => (BAYER[((gy & 3) << 2) | (gx & 3)]! + 0.5) / 16;

export type FrameInfo = {
  /** CSS-pixel size of the canvas element. */
  width: number;
  height: number;
  /** Size of one dither cell in CSS pixels. */
  cell: number;
};

export type DrawFn = (
  buf: Uint8ClampedArray,
  cols: number,
  rows: number,
  t: number,
  info: FrameInfo,
) => void;

/* ------------------------------------------------------------------ */
/* Palette (RGB)                                                       */
/* ------------------------------------------------------------------ */

type RGB = readonly [number, number, number];

/** Bacteria #437592. */
const BACTERIA: RGB = [67, 117, 146];
/** #386C95, sampled from the hero block field. */
const STEEL: RGB = [56, 108, 149];
/** #284E6C, the darker stripe rows from the hero block field. */
const STEEL_DARK: RGB = [40, 78, 108];

const put = (buf: Uint8ClampedArray, i: number, [r, g, b]: RGB): void => {
  buf[i] = r;
  buf[i + 1] = g;
  buf[i + 2] = b;
  buf[i + 3] = 255;
};

/* ------------------------------------------------------------------ */
/* Effect A: hero block-field ripples                                  */
/* ------------------------------------------------------------------ */

export type BlockMask = { w: number; h: number; on: Uint8Array };

/** Marks which pixels of the block-field image are on a blue block (RGB sum > 90). */
export function buildBlockMask(img: HTMLImageElement): BlockMask {
  const c = document.createElement('canvas');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const x = c.getContext('2d', { willReadFrequently: true });
  if (!x) throw new Error('2D canvas unavailable');
  x.drawImage(img, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height).data;
  const on = new Uint8Array(c.width * c.height);
  for (let i = 0, j = 0; i < on.length; i++, j += 4) {
    on[i] = d[j]! + d[j + 1]! + d[j + 2]! > 90 ? 1 : 0;
  }
  return { w: c.width, h: c.height, on };
}

/**
 * Black cells drawn only over the blue blocks, where a left-to-right
 * flowing field plus the Bayer threshold falls below `amount`.
 */
/** Cursor state for the hero spotlight, in CSS px relative to the canvas. */
export type Pointer = { x: number; y: number; target: number; strength: number };

export function createHeroDraw(mask: BlockMask, amount = 0.2, pointer?: Pointer): DrawFn {
  let key = '';
  let cells = new Uint32Array(0);

  // Screen cells that sit on a block, using the same mapping as the CSS background
  // (`background-size: auto 130%`, centered horizontally, top-aligned).
  const cellsFor = (cols: number, rows: number, { width: W, height: H, cell }: FrameInfo) => {
    const k = `${cols}x${rows}:${W}x${H}:${cell}`;
    if (k === key) return cells;
    const sc = (1.3 * H) / mask.h;
    const ox = (W - mask.w * sc) / 2;
    const list: number[] = [];
    for (let gy = 0; gy < rows; gy++) {
      const v = ((gy * cell + cell / 2) / sc) | 0;
      if (v < 0 || v >= mask.h) continue;
      for (let gx = 0; gx < cols; gx++) {
        const u = ((gx * cell + cell / 2 - ox) / sc) | 0;
        if (u < 0 || u >= mask.w) continue;
        if (mask.on[v * mask.w + u]) list.push(gy * cols + gx);
      }
    }
    key = k;
    cells = Uint32Array.from(list);
    return cells;
  };

  // Per-column / per-row terms, recomputed once per frame (see below).
  let colSinA = new Float64Array(0);
  let colCosA = new Float64Array(0);
  let colSinC = new Float64Array(0);
  let colCosC = new Float64Array(0);
  let colBase = new Float64Array(0);
  let rowSinB = new Float64Array(0);
  let rowCosB = new Float64Array(0);
  let rowSinD = new Float64Array(0);
  let rowCosD = new Float64Array(0);

  return (buf, cols, rows, t, info) => {
    const { width: W, cell } = info;
    const list = cellsFor(cols, rows, info);
    const band = (((t * 0.07) % 1.6) - 0.3) * W;
    const bw = W * 0.28;
    // Ease the spotlight in and out, so it fades rather than snapping.
    if (pointer) pointer.strength += (pointer.target - pointer.strength) * 0.18;
    const spot = pointer && pointer.strength > 0.01 ? pointer : null;
    const SPOT_R = 190;

    // The field is
    //   v = 0.5 + 0.22·sin(A(x) + B(y)) + 0.12·sin(C(x) + D(y)) − 0.2·exp(−db(x)²) + 0.12·(x/W − 0.5)
    // Every term depends on x only or y only, and sin(a + b) = sin a·cos b + cos a·sin b,
    // so the trig runs once per column and once per row instead of once per cell.
    // Same values (to ~1e-15), so the dither pattern is unchanged; just far cheaper.
    if (colBase.length !== cols) {
      colSinA = new Float64Array(cols);
      colCosA = new Float64Array(cols);
      colSinC = new Float64Array(cols);
      colCosC = new Float64Array(cols);
      colBase = new Float64Array(cols);
    }
    if (rowSinB.length !== rows) {
      rowSinB = new Float64Array(rows);
      rowCosB = new Float64Array(rows);
      rowSinD = new Float64Array(rows);
      rowCosD = new Float64Array(rows);
    }
    for (let gx = 0; gx < cols; gx++) {
      const x = gx * cell;
      const a = x * 0.0055 - t * 1.1; // long soft waves travelling rightwards
      const c = x * 0.012 - t * 1.6;
      colSinA[gx] = Math.sin(a);
      colCosA[gx] = Math.cos(a);
      colSinC[gx] = Math.sin(c);
      colCosC[gx] = Math.cos(c);
      // a broad soft band that sweeps across, plus a slight left-to-right gradient
      const db = (x - band) / bw;
      colBase[gx] = 0.5 - 0.2 * Math.exp(-db * db) + 0.12 * (x / W - 0.5);
    }
    for (let gy = 0; gy < rows; gy++) {
      const y = gy * cell;
      const wob = 0.9 * Math.sin(y * 0.008 + t * 0.35);
      const d = y * 0.004;
      rowSinB[gy] = Math.sin(wob);
      rowCosB[gy] = Math.cos(wob);
      rowSinD[gy] = Math.sin(d);
      rowCosD[gy] = Math.cos(d);
    }

    for (let n = 0; n < list.length; n++) {
      const idx = list[n]!;
      const gx = idx % cols;
      const gy = (idx / cols) | 0;
      const x = gx * cell;
      const y = gy * cell;
      let v =
        colBase[gx]! +
        0.22 * (colSinA[gx]! * rowCosB[gy]! + colCosA[gx]! * rowSinB[gy]!) +
        0.12 * (colSinC[gx]! * rowCosD[gy]! + colCosC[gx]! * rowSinD[gy]!);
      // Cursor spotlight: push the value up near the pointer so the black cells clear
      // away and the blue blocks light up underneath.
      if (spot) {
        const d = Math.hypot(x - spot.x, y - spot.y);
        if (d < SPOT_R) {
          const f = 1 - d / SPOT_R;
          v += spot.strength * f * f * 1.8;
        }
      }
      if (v + (bayer(gx, gy) - 0.5) < amount) {
        const i = idx * 4;
        buf[i + 3] = 255; // RGB already 0: solid black
      }
    }
  };
}

/* ------------------------------------------------------------------ */
/* Effect B: card smoke  /  Effect D: footer rolling waves             */
/* ------------------------------------------------------------------ */

/**
 * @param k   instance index. Offsets each canvas in space (k × 400px) and time
 *            (k × 7.3s) so neighbouring cards don't move in sync.
 * @param fx  'smoke' for the cards, 'wave' for the footer wordmark.
 */
export function createSmokeDraw(k: number, fx: 'smoke' | 'wave' = 'smoke'): DrawFn {
  return (buf, cols, rows, tt, { cell }) => {
    const t = tt + k * 7.3;
    let i = 0;
    for (let y = 0; y < rows; y++) {
      const py = y * cell;
      for (let x = 0; x < cols; x++, i += 4) {
        const px = x * cell + k * 400;
        let v: number;
        if (fx === 'wave') {
          // rolling waves that travel through the wordmark, at ~0.35× speed
          const tw = t * 0.35;
          const ph =
            px * 0.016 -
            tw * 1.3 +
            1.8 * Math.sin(py * 0.022 + tw * 0.5) +
            0.8 * Math.sin(px * 0.007 + py * 0.011 - tw * 0.4);
          // Kept dense: never below ~35% fill, so the letters read as solid shapes.
          v = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(ph));
        } else {
          // soft, billowing smoke: warped low-frequency puffs plus finer wisps, rising slowly
          const sy = py + t * 14;
          const q1 = Math.sin(px * 0.011 + t * 0.35 + 1.6 * Math.sin(sy * 0.013 - t * 0.27));
          const q2 = Math.cos(sy * 0.012 - t * 0.31 + 1.6 * Math.sin(px * 0.009 + t * 0.22));
          let s = 0.5 + 0.5 * Math.sin(px * 0.01 + q1 * 2.4) * Math.cos(sy * 0.011 + q2 * 2.4);
          s +=
            0.22 *
            Math.sin(px * 0.027 + q2 * 3.1 - t * 0.5) *
            Math.sin(sy * 0.023 + q1 * 3.1 + t * 0.4);
          s += 0.1 * Math.sin(px * 0.061 + sy * 0.047 + q1 * 4 + t * 0.9);
          v = s - 0.55;
          v = v < 0 ? 0 : v * 0.85;
        }
        if (v <= bayer(x, y)) continue; // off: stays transparent
        if (fx === 'wave') {
          // Two tones, no striped rows, for a smoother fill at fine cell sizes.
          put(buf, i, v > 0.7 ? BACTERIA : STEEL);
        } else if (v > 0.32 || (x * 7 + y * 13 + k) % 5 === 0) put(buf, i, BACTERIA);
        else put(buf, i, y & 1 ? STEEL_DARK : STEEL);
      }
    }
  };
}
