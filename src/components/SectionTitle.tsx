'use client';

import { useInView } from '@/hooks/useInView';
import styles from './SectionTitle.module.css';

/**
 * A section title that fades in when it scrolls into view.
 * Reduced-motion users see it immediately.
 */
export function SectionTitle({
  id,
  text,
  as: Tag = 'h2',
  className = '',
  titleClassName = 'heading-xl',
}: {
  id?: string;
  text: string;
  as?: 'h1' | 'h2';
  /** Class for the wrapper, used by sections to size it in their flex rows. */
  className?: string;
  /** Class for the heading itself; defaults to the shared section-title style. */
  titleClassName?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.6);

  return (
    <div ref={ref} className={`${styles.wrap} ${inView ? styles.in : ''} ${className}`} data-reveal>
      <Tag id={id} className={titleClassName}>
        {text}
      </Tag>
    </div>
  );
}
