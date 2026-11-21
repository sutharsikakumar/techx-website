import type { CSSProperties } from 'react';
import { built, type Company } from '@/content';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import styles from './Built.module.css';

// Backer logos are sized to roughly equal area (as on the Work wall), but kept small.
const BACKER_AREA = 1400;
const BACKER_MAX_W = 110;
const BACKER_MAX_H = 30;

function backerSize({ width, height }: Company) {
  const aspect = width / height;
  let w = Math.min(BACKER_MAX_W, Math.sqrt(BACKER_AREA * aspect));
  let h = w / aspect;
  if (h > BACKER_MAX_H) {
    h = BACKER_MAX_H;
    w = h * aspect;
  }
  return { width: Math.round(w), height: Math.round(h) };
}

export function Built() {
  return (
    <section id="built" className={styles.built} aria-labelledby="built-heading">
      <div className={`container ${styles.stack}`}>
        <div className={styles.head}>
          <SectionTitle id="built-heading" text={built.heading} className={styles.heading} />
          <p className={`lede ${styles.body}`}>{built.body}</p>
        </div>
        <Reveal className={styles.row}>
          <ul className={styles.tiles} style={{ '--n': built.startups.length } as CSSProperties}>
            {built.startups.map((s, i) => {
              const image = (
                <img
                  src={s.image}
                  alt={`${s.name} logo`}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              );
              return (
                <li key={s.name} data-stagger style={{ '--i': i } as CSSProperties}>
                  {s.href ? (
                    <a
                      className={`${styles.startup} ${styles.link}`}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.name} (opens in a new tab)`}
                    >
                      {image}
                    </a>
                  ) : (
                    <div className={styles.startup}>{image}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
        <div className={styles.backers}>
          <p className={styles.backersLabel}>{built.backersLabel}</p>
          <ul className={styles.backerList}>
            {built.backers.map((b) => {
              const img = (
                <img
                  src={b.logo}
                  alt={b.href ? '' : b.name}
                  className={b.width === b.height ? styles.badge : undefined}
                  {...backerSize(b)}
                  loading="lazy"
                  decoding="async"
                />
              );
              return (
                <li key={b.name}>
                  {b.href ? (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${b.name} (opens in a new tab)`}
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </li>
              );
            })}
            <li className={styles.backersMore}>{built.backersMore}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
