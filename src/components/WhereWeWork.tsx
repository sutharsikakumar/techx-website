import { whereWeWork, type Company } from '@/content';
import styles from './WhereWeWork.module.css';

// Logos come in very different shapes (square marks vs long wordmarks). Sizing each to
// roughly the same area, within a max box, makes them look equally weighted.
const LOGO_AREA = 3600;
const LOGO_MAX_W = 158;
const LOGO_MAX_H = 52;

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

export function WhereWeWork() {
  return (
    <section id="where-we-work" className={styles.section} aria-labelledby="work-heading">
      <div className={`container ${styles.stack}`}>
        <h2 id="work-heading" className="heading-xl">
          {whereWeWork.heading}
        </h2>
        <ul className={styles.wall}>
          {whereWeWork.companies.map((c) => (
            <li key={c.name} className={styles.cell}>
              <img src={c.logo} alt={c.name} {...logoSize(c)} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
