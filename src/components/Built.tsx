import type { CSSProperties } from 'react';
import { built, type RichText } from '@/content';
import styles from './Built.module.css';

function Rich({ parts }: { parts: RichText }) {
  return parts.map((p, i) => (typeof p === 'string' ? p : <strong key={i}>{p.bold}</strong>));
}

export function Built() {
  return (
    <section id="built" className={styles.built} aria-labelledby="built-heading">
      <div className={`container ${styles.stack}`}>
        <h2 id="built-heading" className="heading-xl">
          {built.heading}
        </h2>
        <div className={styles.row}>
          <ul className={styles.tiles} style={{ '--n': built.startups.length } as CSSProperties}>
            {built.startups.map((s) => {
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
                <li key={s.name}>
                  {s.href ? (
                    <a
                      className={`${styles.startup} ${styles.link}`}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.name} (opens in a new tab)`}
                    >
                      <span aria-hidden="true" className={styles.visit}>
                        ↗
                      </span>
                      {image}
                    </a>
                  ) : (
                    <div className={styles.startup}>{image}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className={styles.text}>
            {built.paragraphs.map((p, i) => (
              <p key={i}>
                <Rich parts={p} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
