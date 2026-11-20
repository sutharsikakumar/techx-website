'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './SectionTitle.module.css';

const GLYPHS = '01<>/\\{}[]_+=*#%&';

/**
 * A section title. When it scrolls into view the
 * title "decodes": random code characters resolve into the real letters, left to right.
 * Screen readers always get the real text; reduced-motion users get no scramble.
 */
export function SectionTitle({
  id,
  text,
  as: Tag = 'h2',
  className = '',
}: {
  id?: string;
  text: string;
  as?: 'h1' | 'h2';
  /** Class for the wrapper, used by sections to size it in their flex rows. */
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.6);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const chars = [...text];
    const duration = 650 + chars.length * 28;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = (now - start) / duration;
      if (t >= 1) {
        setDisplay(text);
        return;
      }
      setDisplay(
        chars
          .map((c, i) => {
            if (c === ' ') return c;
            const resolvesAt = (i / chars.length) * 0.7 + 0.2;
            return t >= resolvesAt ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]!;
          })
          .join(''),
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text]);

  return (
    <div ref={ref} className={`${styles.wrap} ${inView ? styles.in : ''} ${className}`} data-reveal>
      <Tag id={id} className="heading-xl" aria-label={text}>
        <span aria-hidden="true">{display}</span>
      </Tag>
    </div>
  );
}
