'use client';

import { useEffect, useMemo, useState } from 'react';
import { useDitherCanvas } from '@/hooks/useDitherCanvas';
import { buildBlockMask, createHeroDraw, type BlockMask, type Pointer } from '@/lib/dither';
import styles from './Hero.module.css';

const BLOCKFIELD_SRC = '/images/brand/techx-blockfield.png';

// Cursor state read by the draw function every frame, so moving the mouse never re-renders.
// There is only one hero on the page, so a single shared object is enough.
const pointer: Pointer = { x: 0, y: 0, target: 0, strength: 0 };

/** Effect A: black ripples flowing left to right across the blue blocks. */
export function HeroCanvas() {
  const [mask, setMask] = useState<BlockMask | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      if (cancelled) return;
      setMask(buildBlockMask(img));
    };
    img.src = BLOCKFIELD_SRC;
    return () => {
      cancelled = true;
    };
  }, []);

  const draw = useMemo(() => (mask ? createHeroDraw(mask, 0.2, pointer) : null), [mask]);
  const ref = useDitherCanvas(draw, { cell: 2, ready: draw !== null });

  // Track the cursor over the whole hero (the canvas itself sits under the content).
  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.closest('section');
    if (!canvas || !host) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const p = pointer;
    const onMove = (e: PointerEvent) => {
      // The canvas may be scaled by the intro zoom, so map screen px back to canvas px.
      const r = canvas.getBoundingClientRect();
      const k = canvas.clientWidth / (r.width || 1);
      p.x = (e.clientX - r.left) * k;
      p.y = (e.clientY - r.top) * k;
      p.target = 1;
    };
    const onLeave = () => {
      p.target = 0;
    };
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    return () => {
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, [ref]);

  return <canvas ref={ref} aria-hidden="true" className={styles.canvas} />;
}
