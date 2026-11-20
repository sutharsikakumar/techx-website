import type { CSSProperties } from 'react';
import { built } from '@/content';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import styles from './Built.module.css';

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
      </div>
    </section>
  );
}
