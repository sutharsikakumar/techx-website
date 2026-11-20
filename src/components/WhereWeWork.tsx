import { whereWeWork, type Company } from '@/content';
import type { CSSProperties } from 'react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import styles from './WhereWeWork.module.css';

// Logos come in very different shapes (square marks vs long wordmarks). Sizing each to
// roughly the same area, within a max box, makes them look equally weighted.
const LOGO_AREA = 2500;
const LOGO_MAX_W = 120;
const LOGO_MAX_H = 38;

function logoSize({ width, height, scale = 1 }: Company) {
  const aspect = width / height;
  const maxW = LOGO_MAX_W * scale;
  const maxH = LOGO_MAX_H * scale;
  let w = Math.min(maxW, Math.sqrt(LOGO_AREA * scale * scale * aspect));
  let h = w / aspect;
  if (h > maxH) {
    h = maxH;
    w = h * aspect;
  }
  return { width: Math.round(w), height: Math.round(h) };
}

function logo(c: Company) {
  // alt is empty when the link's aria-label already names the company
  return (
    <img src={c.logo} alt={c.href ? '' : c.name} {...logoSize(c)} loading="lazy" decoding="async" />
  );
}

export function WhereWeWork() {
  return (
    <section id="where-we-work" className={styles.section} aria-labelledby="work-heading">
      <div className={`container ${styles.stack}`}>
        <div className={styles.head}>
          <SectionTitle id="work-heading" text={whereWeWork.heading} className={styles.heading} />
          <p className={`lede ${styles.body}`}>{whereWeWork.body}</p>
        </div>
        <Reveal threshold={0.1}>
          <ul className={styles.wall}>
            {whereWeWork.companies.map((c, i) => (
              <li
                key={c.name}
                className={styles.cell}
                data-stagger
                style={{ '--i': i } as CSSProperties}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.name} (opens in a new tab)`}
                  >
                    {logo(c)}
                  </a>
                ) : (
                  <span>{logo(c)}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
