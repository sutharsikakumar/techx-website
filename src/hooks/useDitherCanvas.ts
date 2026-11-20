'use client';

import { useEffect, useRef } from 'react';
import type { DrawFn } from '@/lib/dither';

export type DitherOptions = {
  /** Size of one dither cell in CSS pixels. */
  cell: number;
  /** Target frame rate. Default 30. */
  fps?: number;
  /** Starting time in seconds. */
  timeOffset?: number;
  /** Time multiplier. Default 1. */
  speed?: number;
  /** Set false while async inputs (e.g. an image mask) are loading. */
  ready?: boolean;
};

/**
 * Runs a cell-resolution dither animation on a canvas.
 *
 * - Sizes the canvas to its element × devicePixelRatio (capped at 2).
 * - Draws one pixel per cell into an offscreen canvas, then scales it up with
 *   image smoothing off, so every cell is a crisp square.
 * - Runs at ~`fps`, pauses while off-screen or while the tab is hidden.
 * - Under `prefers-reduced-motion: reduce`, draws a single static frame.
 * - Cleans up observers and animation frames on unmount.
 *
 * `draw` may change between renders; the latest one is always used.
 */
export function useDitherCanvas(draw: DrawFn | null, opts: DitherOptions) {
  const { cell, fps = 30, timeOffset = 0, speed = 1, ready = true } = opts;
  const ref = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef(draw);

  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !ready) return;
    const ctx = canvas.getContext('2d');
    const off = document.createElement('canvas');
    const offCtx = off.getContext('2d');
    if (!ctx || !offCtx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const frameMs = 1000 / fps;
    let img: ImageData | null = null;
    let t = timeOffset;
    let last = 0;
    let raf = 0;
    let onScreen = false;

    const render = () => {
      const fn = drawRef.current;
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      if (!fn || !W || !H) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = Math.round(W * dpr);
      const ch = Math.round(H * dpr);
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
      }
      const cols = Math.ceil(W / cell);
      const rows = Math.ceil(H / cell);
      if (!img || img.width !== cols || img.height !== rows) {
        off.width = cols;
        off.height = rows;
        img = offCtx.createImageData(cols, rows);
      }
      img.data.fill(0);
      fn(img.data, cols, rows, t, { width: W, height: H, cell });
      offCtx.putImageData(img, 0, 0);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cw, ch);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(off, 0, 0, cols * cell * dpr, rows * cell * dpr);
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (last && now - last < frameMs - 1) return;
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 1 / fps;
      last = now;
      render();
      t += dt * speed;
    };

    const sync = () => {
      const run = onScreen && !document.hidden && !reduced.matches;
      if (run && !raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      } else if (!run && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    // Always draw one frame up front, so reduced-motion users still see the texture.
    render();

    const io = new IntersectionObserver(
      (entries) => {
        onScreen = entries.some((e) => e.isIntersecting);
        sync();
      },
      { rootMargin: '100px' },
    );
    io.observe(canvas);

    // Redraw on resize (keeps the static frame correct under reduced motion).
    const ro = new ResizeObserver(() => {
      if (!raf) render();
    });
    ro.observe(canvas);

    document.addEventListener('visibilitychange', sync);
    reduced.addEventListener('change', sync);

    return () => {
      cancelAnimationFrame(raf);
      raf = 0;
      io.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduced.removeEventListener('change', sync);
    };
  }, [cell, fps, timeOffset, speed, ready]);

  return ref;
}
