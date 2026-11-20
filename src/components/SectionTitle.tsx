'use client';

import type { CSSProperties } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './SectionTitle.module.css';

const GLYPHS = '01<>/\\{}[]_+=*#%&';

/** Glyphs each character rolls through before landing; later characters roll longer. */
const BASE_REEL = 6;
const MAX_REEL = 24;

/**
 * Deterministic "random" glyphs, so the server and client render the same reel
 * (Math.random here would cause a hydration mismatch).
 */
function reelFor(charIndex: number, length: number) {
  const out: string[] = [];
  let seed = Math.imul(charIndex + 1, 0x9e3779b1);
  for (let k = 0; k < length; k++) {
    seed = Math.imul(seed ^ (seed >>> 13), 0x5bd1e995);
    out.push(GLYPHS[(seed >>> 0) % GLYPHS.length]!);
  }
  return out;
}

/**
 * A section title. When it scrolls into view, every character slot scrolls vertically
 * through code glyphs in place, like a slot reel, and the real letters land one by
 * one, left to right. Screen readers always get the real text; reduced-motion users
 * see the plain title.
 */
export function SectionTitle({
  id,
  text,
  as: Tag = 'h2',
  className = '',
}: {
  id?: string;
  text: string;
  as?: 'h1' | 'h2';
  /** Class for the wrapper, used by sections to size it in their flex rows. */
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.6);

  let i = 0;
  const words = text.split(' ').map((word, w) => (
    <span key={w} className={styles.word}>
      {[...word].map((ch) => {
        const idx = i++;
        const reel = reelFor(idx, Math.min(BASE_REEL + idx, MAX_REEL));
        return (
          <span key={idx} className={styles.slot}>
            <span
              className={styles.strip}
              style={{ '--i': idx, '--n': reel.length } as CSSProperties}
            >
              <span className={styles.reel}>
                {reel.map((g, k) => (
                  <span key={k}>{g}</span>
                ))}
              </span>
              {ch}
            </span>
          </span>
        );
      })}
    </span>
  ));

  return (
    <div ref={ref} className={`${styles.wrap} ${inView ? styles.in : ''} ${className}`} data-reveal>
      <Tag id={id} className="heading-xl" aria-label={text}>
        <span aria-hidden="true">
          {words.flatMap((el, w) => (w === 0 ? [el] : [' ', el]))}
        </span>
      </Tag>
    </div>
  );
}
