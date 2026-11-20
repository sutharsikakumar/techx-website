'use client';

import { useMemo } from 'react';
import { useCursorVars } from '@/hooks/useCursorVars';
import { useDitherCanvas } from '@/hooks/useDitherCanvas';
import { createSmokeDraw } from '@/lib/dither';
import { CARD_LAYERS, HoverDither, hoverHost } from './HoverDither';
import styles from './Pillars.module.css';

// Random start so the smoke looks different on every visit. Shared by all cards;
// createSmokeDraw offsets each card further in time and space.
const SESSION_T0 = Math.random() * 100;

/** One pillar: Effect B smoke inside, Effect C hover dither following the cursor. */
export function PillarCard({ index, title, body }: { index: number; title: string; body: string }) {
  const draw = useMemo(() => createSmokeDraw(index, 'smoke'), [index]);
  const canvasRef = useDitherCanvas(draw, { cell: 2, timeOffset: SESSION_T0 });
  const onPointerMove = useCursorVars();

  return (
    <article className={`${styles.card} ${hoverHost}`} onPointerMove={onPointerMove} data-reveal>
      <canvas ref={canvasRef} aria-hidden="true" className={styles.fx} />
      <HoverDither layers={CARD_LAYERS} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </article>
  );
}
