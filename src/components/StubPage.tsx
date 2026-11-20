import Link from 'next/link';
import { Footer } from './Footer';
import { Header } from './Header';
import { SectionTitle } from './SectionTitle';
import styles from './StubPage.module.css';

/** Shared layout for pages that aren't built yet. */
export function StubPage({ heading, note }: { heading: string; note: string }) {
  return (
    <>
      <main>
        <section className={styles.banner}>
          <Header />
          <div className={`container ${styles.bannerInner}`}>
            <SectionTitle as="h1" text={heading} className={styles.heading} />
          </div>
        </section>
        <section className={styles.body}>
          <div className="container">
            <p className="lede">{note}</p>
            <Link className={styles.back} href="/">
              <span aria-hidden="true">←</span> Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
