'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { heroStory } from '@/content';
import { CursorAura } from './CursorAura';
import { Header } from './Header';
import { HeroCanvas } from './HeroCanvas';
import styles from './Hero.module.css';

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
/** 0 → 1 as p goes from a to b. */
const seg = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const easeIn = (t: number) => t * t * t;

/**
 * Scroll-driven intro. The section is several screens tall and its stage stays pinned
 * while you scroll through it:
 *
 *   0.00–0.42  the logo zooms toward you and dissolves; the block field dims
 *   0.42–0.70  "We back the minds shaping the future." reveals word by word
 *   0.72–0.80  "Via ad Excellentiam" fades in beneath it
 *   0.80–0.88  a highlight sweeps across the motto
 *   0.88–1.00  holds, then the page scrolls on as normal
 *
 * Progress is written to CSS custom properties, so scrolling never re-renders React.
 * Under prefers-reduced-motion the intro is replaced by a single static screen.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const words = heroStory.statement.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const set = (name: string, v: number | string) => el.style.setProperty(name, String(v));

    const update = () => {
      raf = 0;
      if (reduced.matches) {
        el.dataset.static = '';
        return;
      }
      delete el.dataset.static;
      const total = el.offsetHeight - window.innerHeight;
      const p = total > 0 ? clamp01(-el.getBoundingClientRect().top / total) : 0;

      const zoom = seg(p, 0.04, 0.42);
      set('--logo-scale', (1 + 14 * easeIn(zoom)).toFixed(4));
      set('--logo-op', (1 - seg(p, 0.3, 0.42)).toFixed(3));
      set('--field-scale', (1 + 0.15 * easeInOut(zoom)).toFixed(4));
      set('--scrim', (0.72 * easeInOut(seg(p, 0.05, 0.42))).toFixed(3));
      set('--hint', (1 - seg(p, 0, 0.04)).toFixed(3));

      set('--s', seg(p, 0.42, 0.7).toFixed(4));

      const m = easeInOut(seg(p, 0.72, 0.8));
      set('--motto-op', m.toFixed(3));
      set('--motto-y', `${((1 - m) * 22).toFixed(1)}px`);
      set('--motto-blur', `${((1 - m) * 8).toFixed(1)}px`);
      set('--motto-hl', easeInOut(seg(p, 0.8, 0.88)).toFixed(4));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    reduced.addEventListener('change', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reduced.removeEventListener('change', onScroll);
    };
  }, []);

  return (
    <section id="top" ref={ref} className={styles.hero} data-hero>
      <div className={styles.stage}>
        <div className={styles.field} aria-hidden="true">
          <HeroCanvas />
        </div>
        <div className={styles.scrim} aria-hidden="true" />
        <CursorAura />

        <div className={styles.inner}>
          <h1 className={styles.title}>
            <img
              src="/images/brand/logo.svg"
              alt="TechX"
              width={1020}
              height={270}
              fetchPriority="high"
            />
          </h1>
        </div>

        <div className={styles.story} data-hero-story>
          <p
            className={styles.statement}
            data-hero-text
            style={{ '--n': words.length } as CSSProperties}
          >
            {words.map((w, i) => (
              <span key={i} style={{ '--i': i } as CSSProperties}>
                {w}{' '}
              </span>
            ))}
          </p>
          <p className={styles.motto} data-hero-text lang="la">
            <em>{heroStory.motto}</em>
          </p>
        </div>

        <div className={styles.hint} aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>

        <Header />
      </div>
    </section>
  );
}
