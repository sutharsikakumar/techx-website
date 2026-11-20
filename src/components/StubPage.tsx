import Link from 'next/link';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './StubPage.module.css';

/** Shared layout for pages that aren't built yet. */
export function StubPage({ heading, note }: { heading: string; note: string }) {
  return (
    <>
      <main>
        <section className={styles.banner}>
          <Header />
          <div className={`container ${styles.bannerInner}`}>
            <h1 className={`heading-xl ${styles.heading}`}>{heading}</h1>
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
