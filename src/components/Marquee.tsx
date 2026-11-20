'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import styles from './Community.module.css';

/** How long auto-scroll stays paused after the visitor last touched the strip (ms). */
const RESUME_AFTER_MS = 2000;

/**
 * A photo strip that drifts left on its own and can be moved by hand.
 *
 * Children must be one `<ul>` track holding the item list twice in a row; when the
 * strip passes the end of the first copy it wraps back, so the loop is seamless.
 *
 * Hand control: click-and-drag with a mouse, swipe on touch, horizontal trackpad
 * scroll or Shift + wheel, or arrow keys when focused. Auto-scroll pauses while the
 * visitor is doing that and resumes about 2 seconds after they stop.
 */
export function Marquee({
  children,
  speed,
  label,
}: {
  children: ReactNode;
  /** Auto-scroll speed in CSS px per second. */
  speed: number;
  label: string;
}) {
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = viewport.current;
    const track = el?.firstElementChild;
    if (!el || !track || track.children.length < 2) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const half = track.children.length / 2;
    let pos = el.scrollLeft; // float copy of scrollLeft, so slow speeds don't round away
    let pausedUntil = 0;
    let dragging = false;
    let onScreen = false;
    let raf = 0;
    let last = 0;

    // Width of one full copy of the list, including the gap after it.
    const loopWidth = () =>
      (track.children[half] as HTMLElement).offsetLeft -
      (track.children[0] as HTMLElement).offsetLeft;

    const wrap = () => {
      const w = loopWidth();
      if (w <= 0) return;
      if (pos >= w) pos -= w;
      else if (pos < 0) pos += w;
      el.scrollLeft = pos;
    };

    const hold = () => {
      pausedUntil = performance.now() + RESUME_AFTER_MS;
    };

    const onScroll = () => {
      // Our own writes land within a pixel of `pos`; anything else was the visitor.
      if (Math.abs(el.scrollLeft - pos) > 1.5) {
        pos = el.scrollLeft;
        hold();
        wrap();
      }
    };

    // Mouse drag. Touch already scrolls natively, so only handle mice and pens here.
    let dragX = 0;
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch' || e.button !== 0) return;
      dragging = true;
      dragX = e.clientX;
      el.setPointerCapture(e.pointerId);
      el.classList.add(styles.dragging!);
      hold();
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      pos -= e.clientX - dragX;
      dragX = e.clientX;
      wrap();
      hold();
    };
    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      el.classList.remove(styles.dragging!);
      hold();
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
      last = now;
      if (reduced.matches || dragging || now < pausedUntil) return;
      pos += speed * dt;
      wrap();
    };

    const sync = () => {
      const run = onScreen && !document.hidden;
      if (run && !raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      } else if (!run && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const io = new IntersectionObserver((entries) => {
      onScreen = entries.some((e) => e.isIntersecting);
      sync();
    });
    io.observe(el);

    el.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('wheel', hold, { passive: true });
    el.addEventListener('touchstart', hold, { passive: true });
    el.addEventListener('keydown', hold);
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', endDrag);
    el.addEventListener('pointercancel', endDrag);
    document.addEventListener('visibilitychange', sync);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('wheel', hold);
      el.removeEventListener('touchstart', hold);
      el.removeEventListener('keydown', hold);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', endDrag);
      el.removeEventListener('pointercancel', endDrag);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [speed]);

  return (
    // Focusable so keyboard users can scroll it with the arrow keys.
    <div ref={viewport} className={styles.viewport} tabIndex={0} role="region" aria-label={label}>
      {children}
    </div>
  );
}
