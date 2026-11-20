'use client';

import { useMemo } from 'react';
import { useCursorVars } from '@/hooks/useCursorVars';
import { useDitherCanvas } from '@/hooks/useDitherCanvas';
import { createSmokeDraw } from '@/lib/dither';
import { HoverDither, WORDMARK_LAYERS, hoverHost } from './HoverDither';
import styles from './Footer.module.css';

/**
 * Effect D: a Storm outline of the logo, with slow rolling-wave dither inside the
 * filled letterforms. Hovering adds a denser Effect C patch under the cursor.
 */
export function Wordmark() {
  // Index 3 continues on from the three pillar cards, as in the design file.
  const draw = useMemo(() => createSmokeDraw(3, 'wave'), []);
  const canvasRef = useDitherCanvas(draw, { cell: 1.5 });
  const onPointerMove = useCursorVars();

  return (
    <div
      aria-hidden="true"
      className={`${styles.wordmark} ${hoverHost}`}
      onPointerMove={onPointerMove}
    >
      <div className={styles.outline} />
      <canvas ref={canvasRef} className={styles.fill} />
      <HoverDither layers={WORDMARK_LAYERS} variant="wordmark" />
    </div>
  );
}
