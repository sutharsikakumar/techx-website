'use client';

import Image from 'next/image';
import type { Member } from '@/content/members';
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
          <Image
            src={m.photo}
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 559px) 33vw, (max-width: 799px) 25vw, (max-width: 1099px) 20vw, 180px"
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
