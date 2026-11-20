'use client';

import { mission } from '@/content';
import { useInView } from '@/hooks/useInView';
import { SectionTitle } from './SectionTitle';
import styles from './Mission.module.css';

export function Mission() {
  const [ref, inView] = useInView<HTMLElement>(0.25);
  return (
    <section
      id="mission"
      ref={ref}
      className={`${styles.mission} ${inView ? 'in' : ''}`}
      aria-labelledby="mission-heading"
    >
      <div className={`container ${styles.row}`}>
        <SectionTitle id="mission-heading" text={mission.heading} className={styles.heading} />
        <p className={`lede reveal reveal-delay ${styles.body}`}>{mission.body}</p>
      </div>
    </section>
  );
}
