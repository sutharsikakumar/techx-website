'use client';

import { pillars } from '@/content';
import { useInView } from '@/hooks/useInView';
import { PillarCard } from './PillarCard';
import styles from './Pillars.module.css';

export function Pillars() {
  const [ref, inView] = useInView<HTMLElement>(0.2);
  return (
    <section
      ref={ref}
      className={`${styles.pillars} ${inView ? styles.in : ''}`}
      aria-label="What TechX offers"
    >
      <div className={`container ${styles.grid}`}>
        {pillars.map((p, k) => (
          <PillarCard key={p.title} index={k} title={p.title} body={p.body} />
        ))}
      </div>
    </section>
  );
}
