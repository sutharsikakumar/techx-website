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
            src="/images/brand/techx-logo-white.png"
            alt="TechX"
            width={1020}
            height={270}
            fetchPriority="high"
          />
        </h1>
      </div>
      <Header />
    </section>
  );
}
