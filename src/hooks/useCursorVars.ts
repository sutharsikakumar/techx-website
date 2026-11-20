'use client';

import { useCallback } from 'react';
import type { PointerEvent } from 'react';

/**
 * Pointer-move handler that writes the cursor position, relative to the element,
 * into the `--mx` / `--my` CSS custom properties. No React state, so no re-renders.
 */
export function useCursorVars() {
  return useCallback((e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, []);
}
