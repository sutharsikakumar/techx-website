import type { CSSProperties } from 'react';
import styles from './HoverDither.module.css';

export type DitherLayer = {
  /** Size of each square pixel (px). */
  px: number;
  /** Spacing of the pixel grid (px). */
  cell: number;
  /** Grid offset (px): x = off, y = 2 × off. */
  off: number;
  /** Radius of the cursor spotlight (px). */
  radius: number;
  color: string;
  opacity: number;
};

/** Effect C layers for the pillar cards: Surf core, two sparser Bacteria rings. */
export const CARD_LAYERS: DitherLayer[] = [
  { px: 3, cell: 15, off: 5, radius: 125, color: 'var(--bacteria)', opacity: 0.5 },
  { px: 2, cell: 9, off: 2, radius: 80, color: 'var(--bacteria)', opacity: 0.6 },
  { px: 1, cell: 5, off: 0, radius: 40, color: 'var(--surf)', opacity: 0.55 },
];

/** Effect C layers for the footer wordmark (denser, as in the design file). */
export const WORDMARK_LAYERS: DitherLayer[] = [
  { px: 2, cell: 7, off: 2, radius: 220, color: 'var(--bacteria)', opacity: 0.9 },
  { px: 2, cell: 4, off: 0, radius: 120, color: 'var(--surf)', opacity: 1 },
];

/** Put this class on the element whose :hover reveals the layers and that receives the --mx/--my vars. */
export const hoverHost = styles.host;

/**
 * Effect C: stacked layers of square pixels drawn with conic-gradient tiles,
 * each masked to a radial spotlight at the cursor (--mx, --my).
 * Pure CSS; the parent updates --mx/--my on pointer move.
 */
export function HoverDither({
  layers,
  variant = 'card',
}: {
  layers: DitherLayer[];
  variant?: 'card' | 'wordmark' | 'tile';
}) {
  return (
    <>
      {layers.map((l, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`${styles.layer} ${variant === 'card' ? '' : styles[variant]}`}
          style={
            {
              '--px': `${l.px}px`,
              '--cell': `${l.cell}px`,
              '--off-x': `${l.off}px`,
              '--off-y': `${l.off * 2}px`,
              '--r': `${l.radius}px`,
              '--col': l.color,
              '--op': l.opacity,
            } as CSSProperties
          }
        />
      ))}
    </>
  );
}
