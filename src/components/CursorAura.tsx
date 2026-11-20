'use client';

import { useEffect, useRef } from 'react';
import styles from './CursorAura.module.css';

/**
 * A soft CosmiX glow that trails the cursor, living inside its parent (the landing-page
 * hero) so it never appears anywhere else. Only on devices with a real pointer, and
 * never under reduced motion.
 */
export function CursorAura() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    const host = node?.parentElement;
    if (!node || !host) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduced.matches) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    let seen = false;

    const tick = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      node.style.transform = `translate3d(${x - 260}px, ${y - 260}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!seen) {
        seen = true;
        x = tx;
        y = ty;
        raf = requestAnimationFrame(tick);
      }
      node.style.opacity = '1';
    };
    const onLeave = () => {
      node.style.opacity = '0';
    };

    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <div ref={el} aria-hidden="true" className={styles.aura} />;
}
