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
 *   0.88–0.91  a short beat, then the page scrolls on as normal
 *
 * Progress is written to CSS custom properties, so scrolling never re-renders React.
 * It eases toward the scroll position (GLIDE_MS) so mouse-wheel steps glide.
 * Under prefers-reduced-motion the intro is replaced by a single static screen.
 */

/**
 * The timeline above was laid out for 220vh of pinned scroll (a 320vh section). The
 * section is now 300vh (200vh pinned), which trims the dead hold after the highlight
 * from ~26vh to ~6vh. Scaling progress by 200/220 keeps every step at exactly the same
 * scroll distance as before, so nothing else speeds up.
 */
const TIMELINE_SCALE = 200 / 220;

/** Time constant for easing the shown progress toward the scroll position (ms). */
const GLIDE_MS = 90;
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const words = heroStory.statement.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;
    let last = 0;
    // Eased progress actually shown on screen; glides toward the scroll position.
    let shown = -1;

    const set = (name: string, v: number | string) => el.style.setProperty(name, String(v));

    /** Scroll progress through the intro, on the original 220vh timeline. */
    const target = () => {
      const total = el.offsetHeight - window.innerHeight;
      const raw = total > 0 ? clamp01(-el.getBoundingClientRect().top / total) : 0;
      return raw * TIMELINE_SCALE;
    };

    const apply = (p: number) => {
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

    // Each frame, move `shown` part of the way toward the scroll position (frame-rate
    // independent), so mouse-wheel steps glide instead of jumping. Stops when settled.
    const tick = (now: number) => {
      raf = 0;
      if (reduced.matches) {
        el.dataset.static = '';
        return;
      }
      delete el.dataset.static;
      const goal = target();
      const dt = last ? Math.min(100, now - last) : 16;
      last = now;
      if (shown < 0) shown = goal; // first frame: no glide on load
      else shown += (goal - shown) * (1 - Math.exp(-dt / GLIDE_MS));
      if (Math.abs(goal - shown) < 0.0005) shown = goal;
      apply(shown);
      if (shown !== goal) raf = requestAnimationFrame(tick);
      else last = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    // Resizing changes the scroll geometry: jump straight to the new position.
    const onResize = () => {
      shown = -1;
      onScroll();
    };
    tick(performance.now());
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    reduced.addEventListener('change', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
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
