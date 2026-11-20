'use client';

import { useEffect, useState } from 'react';
import { useDitherCanvas } from '@/hooks/useDitherCanvas';
import { buildBlockMask, createHeroDraw, type DrawFn } from '@/lib/dither';
import styles from './Hero.module.css';

const BLOCKFIELD_SRC = '/images/techx-blockfield.png';

/** Effect A: black ripples flowing left to right across the blue blocks. */
export function HeroCanvas() {
  const [draw, setDraw] = useState<DrawFn | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      if (cancelled) return;
      const mask = buildBlockMask(img);
      setDraw(() => createHeroDraw(mask, 0.2));
    };
    img.src = BLOCKFIELD_SRC;
    return () => {
      cancelled = true;
    };
  }, []);

  const ref = useDitherCanvas(draw, { cell: 2, ready: draw !== null });
  return <canvas ref={ref} aria-hidden="true" className={styles.canvas} />;
}
