'use client';

import Image from 'next/image';
import type { PointerEvent } from 'react';
import type { Member } from '@/content/members';
import { HoverDither, hoverHost } from './HoverDither';
import type { DitherLayer } from './HoverDither';
import styles from './CohortGrid.module.css';

/** Effect C layers for member tiles. */
const TILE_LAYERS: DitherLayer[] = [
  { px: 3, cell: 15, off: 5, radius: 125, color: 'var(--bacteria)', opacity: 0.55 },
  { px: 2, cell: 9, off: 2, radius: 80, color: 'var(--bacteria)', opacity: 0.65 },
  { px: 1, cell: 5, off: 0, radius: 40, color: 'var(--surf)', opacity: 0.6 },
];

/** One delegated handler for the whole grid: writes --mx/--my on the hovered tile. */
function onPointerMove(e: PointerEvent<HTMLUListElement>) {
  const tile = (e.target as HTMLElement).closest<HTMLElement>('[data-tile]');
  if (!tile) return;
  const r = tile.getBoundingClientRect();
  tile.style.setProperty('--mx', `${e.clientX - r.left}px`);
  tile.style.setProperty('--my', `${e.clientY - r.top}px`);
}

function PersonIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </svg>
  );
}

export function CohortGrid({ members, label }: { members: Member[]; label: string }) {
  return (
    <ul className={styles.grid} onPointerMove={onPointerMove}>
      {members.map((m, i) => (
        <li key={`${m.name}-${i}`}>
          <a
            className={styles.link}
            href={m.linkedin}
            target="_blank"
            rel="noopener"
            aria-label={`${m.name}, Cohort ${label}, on LinkedIn (opens in a new tab)`}
          >
            <span data-tile className={`${styles.tile} ${hoverHost}`}>
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 559px) 50vw, (max-width: 899px) 33vw, 248px"
                  className={styles.photo}
                />
              ) : (
                <PersonIcon />
              )}
              <HoverDither layers={TILE_LAYERS} variant="tile" />
            </span>
            <span className={styles.name}>{m.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
