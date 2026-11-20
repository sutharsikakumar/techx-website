import Link from 'next/link';
import { nav } from '@/content';
import styles from './Header.module.css';

/** Transparent header that sits over the hero and scrolls away with it. */
export function Header() {
  return (
    <header className={styles.header}>
      <nav aria-label="Main" className={styles.nav}>
        <Link href="/#top" aria-label="TechX home" className={styles.logo}>
          <img
            src="/images/techx-logo-white.png"
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
        </ul>
      </nav>
    </header>
  );
}
