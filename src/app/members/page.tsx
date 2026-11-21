import type { Metadata } from 'next';
import { CohortGrid } from '@/components/CohortGrid';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SectionTitle } from '@/components/SectionTitle';
import { cohorts } from '@/content/members';
import { toRoman } from '@/lib/toRoman';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Members | TechX' };

export default function MembersPage() {
  const sorted = [...cohorts].sort((a, b) => b.number - a.number);

  return (
    <>
      <main>
        <section className={styles.banner}>
          <Header current="/members/" />
          <div className={`container ${styles.bannerInner}`}>
            <SectionTitle
              as="h1"
              text="Members"

              titleClassName={styles.title}
            />
          </div>
        </section>

        <div className={`${styles.directory} navy-glow`}>
          <div className="container">
            {sorted.map((c) => {
              const label = toRoman(c.number);
              const id = `cohort-${c.number}`;
              return (
                <section key={c.number} className={styles.cohort} aria-labelledby={id}>
                  <h2 id={id} className={styles.cohortTitle}>
                    Cohort {label}
                  </h2>
                  <CohortGrid members={c.members} label={label} />
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
