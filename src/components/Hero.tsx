import { hero, links } from '@/content';
import { Header } from './Header';
import { HeroCanvas } from './HeroCanvas';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <HeroCanvas />
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <img
            src="/images/techx-logo-white.png"
            alt="TechX"
            width={1020}
            height={270}
            fetchPriority="high"
          />
        </h1>
        <a
          className={styles.rush}
          href={links.rushForm}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${hero.cta} (opens in a new tab)`}
        >
          {hero.cta} <span aria-hidden="true">→</span>
        </a>
      </div>
      <Header />
    </section>
  );
}
