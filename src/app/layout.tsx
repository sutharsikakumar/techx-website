import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';
import { site } from '@/content';
import { ScrollProgress } from '@/components/ScrollProgress';
import './globals.css';

// Self-hosted from /public/fonts. next/font adds size-adjusted fallback metrics,
// so swapping in Satoshi doesn't shift the layout.
const satoshi = localFont({
  src: [
    { path: '../../public/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-satoshi',
  fallback: ['-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: { title: site.title, description: site.description, type: 'website' },
};

export const viewport: Viewport = {
  themeColor: '#0B1215',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>
        {/* Without JS the scroll-reveal never fires, so show everything. */}
        <noscript>
          <style>
            {
              '.reveal,[data-reveal],[data-stagger],[data-hero-text],[data-hero-text] span{opacity:1!important;transform:none!important;filter:none!important}[data-hero]{height:auto!important}[data-hero-story]{position:relative!important;inset:auto!important}'
            }
          </style>
        </noscript>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
