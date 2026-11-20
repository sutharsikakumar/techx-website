'use client';

import type { Member } from '@/content/members';
import { memberPhotoSrcSet, memberPhotoUrl } from '@/lib/memberPhoto';
import styles from './CohortGrid.module.css';

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

function Tile({ m }: { m: Member }) {
  return (
    <>
      <span className={styles.tile}>
        {m.photo ? (
          // Small WebP copies made by scripts/optimize-member-photos.mjs; the
          // browser picks 256px or 512px wide depending on tile size and screen density.
          <img
            src={memberPhotoUrl(m.photo, 256)}
            srcSet={memberPhotoSrcSet(m.photo)}
            sizes="(max-width: 559px) 33vw, (max-width: 799px) 25vw, (max-width: 1099px) 20vw, 180px"
            alt=""
            width={256}
            height={320}
            loading="lazy"
            decoding="async"
            className={styles.photo}
          />
        ) : (
          <PersonIcon />
        )}
      </span>
      <span className={styles.name}>{m.name}</span>
    </>
  );
}

/**
 * A member's LinkedIn profile, or, until one is filled in ('#'), a LinkedIn people
 * search for their name at UNC so every tile still leads somewhere useful.
 */
function linkedinUrl(m: Member) {
  if (m.linkedin && m.linkedin !== '#') return m.linkedin;
  const q = encodeURIComponent(`${m.name} UNC`);
  return `https://www.linkedin.com/search/results/people/?keywords=${q}`;
}

export function CohortGrid({ members, label }: { members: Member[]; label: string }) {
  return (
    <ul className={styles.grid}>
      {members.map((m, i) => (
        <li key={`${m.name}-${i}`}>
          <a
            className={styles.link}
            href={linkedinUrl(m)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${m.name}, Cohort ${label}, on LinkedIn (opens in a new tab)`}
          >
            <Tile m={m} />
          </a>
        </li>
      ))}
    </ul>
  );
}
