import type { CSSProperties } from 'react';
import { community } from '@/content';
import styles from './Community.module.css';
import { Marquee } from './Marquee';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

// Placeholder tiles from the design, shown until real photos are added in content.ts.
const PLACEHOLDER_WIDTHS = [420, 300, 360, 480, 320, 400, 300, 440];
const PLACEHOLDER_TINTS = [
  'var(--obsidian)',
  'var(--glacial)',
  'var(--storm)',
  'var(--ash)',
  'var(--bacteria)',
  'var(--steel)',
  'var(--obsidian)',
  'var(--glacial)',
];
const PLACEHOLDER_INKS = [
  'var(--storm)',
  'var(--storm)',
  'var(--glacial)',
  'var(--storm)',
  'var(--glacial)',
  'var(--storm)',
  'var(--storm)',
  'var(--storm)',
];

const TILE_HEIGHT = 210;

function Tiles({ copy }: { copy: boolean }) {
  // The second copy only exists to make the loop seamless, so hide it from screen readers.
  const hidden = copy || undefined;
  if (community.photos.length === 0) {
    return PLACEHOLDER_WIDTHS.map((w, i) => (
      <li
        key={i}
        aria-hidden="true"
        className={styles.placeholder}
        style={{ '--w': w, background: PLACEHOLDER_TINTS[i] } as CSSProperties}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={PLACEHOLDER_INKS[i]}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <circle cx="9" cy="10" r="1.8" />
          <path d="M21 16l-5-5-9 9" />
        </svg>
      </li>
    ));
  }
  return community.photos.map((p) => (
    <li key={p.src} aria-hidden={hidden} className={styles.photo}>
      <img
        src={p.src}
        alt={copy ? '' : p.alt}
        width={Math.round((p.width / p.height) * TILE_HEIGHT)}
        height={TILE_HEIGHT}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </li>
  ));
}

// Auto-scroll speed, in px per second, whatever the number of photos.
const SCROLL_PX_PER_SEC = 55;

/** Full-bleed photo strip that scrolls on its own (CSS marquee). */
export function Community() {
  return (
    <section id="community" className={styles.community} aria-labelledby="community-heading">
      <div className={styles.head}>
        <SectionTitle id="community-heading" text={community.heading} className={styles.heading} />
        <p className={`lede ${styles.body}`}>{community.body}</p>
      </div>
      <Reveal className={styles.strip} threshold={0.1}>
        <Marquee speed={SCROLL_PX_PER_SEC} label="Community photos. Drag or swipe to move.">
          <ul className={styles.marquee}>
            <Tiles copy={false} />
            <Tiles copy />
          </ul>
        </Marquee>
      </Reveal>
    </section>
  );
}
