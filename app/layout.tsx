import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Momix APK - Free HD Streaming App (Official 2026)',
    template: '%s | Momix APK'
  },
  description: 'Download Momix APK latest version. Watch movies, web series, and live TV for free. No ads, no subscription, 100% safe and verified.',
  keywords: ['Momix APK', 'Momix Download', 'Free Movies App', 'Live TV APK', 'Momix Official'],
  authors: [{ name: 'Momix Team' }],
  openGraph: {
    title: 'Momix APK - Free HD Streaming App',
    description: 'Watch movies, web series & live TV for free. No ads. No subscription.',
    url: 'https://momix.apk',
    siteName: 'Momix APK',
    images: [
      {
        url: 'https://picsum.photos/seed/momix/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momix APK - Free HD Streaming App',
    description: 'Watch movies, web series & live TV for free. No ads. No subscription.',
    images: ['https://picsum.photos/seed/momix/1200/630'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
