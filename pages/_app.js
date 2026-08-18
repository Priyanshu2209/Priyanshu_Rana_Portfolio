import '../styles/globals.css';
import { Fraunces, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${fraunces.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}