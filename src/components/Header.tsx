import Link from 'next/link';
import { links, nav, navCta } from '@/content';
import styles from './Header.module.css';

/** Transparent header that sits over the hero and scrolls away with it. */
export function Header() {
  return (
    <header className={styles.header}>
      <nav aria-label="Main" className={styles.nav}>
        <Link href="/#top" aria-label="TechX home" className={styles.logo}>
          <img
            src="/images/brand/techx-logo-white.png"
            alt="TechX"
            width={1020}
            height={270}
            fetchPriority="high"
          />
        </Link>
        <ul className={styles.links}>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className={styles.cta}
              href={links.rushForm}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${navCta.label} (opens in a new tab)`}
            >
              {navCta.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
