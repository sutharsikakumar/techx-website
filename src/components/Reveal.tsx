'use client';

import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

/**
 * Wrapper that adds the `in` class once it scrolls into view. Children marked with
 * `data-stagger` (see globals.css) then animate in one after another.
 */
export function Reveal({
  children,
  className = '',
  threshold = 0.15,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(threshold);
  return (
    <div ref={ref} className={`${className} ${inView ? 'in' : ''}`}>
      {children}
    </div>
  );
}
