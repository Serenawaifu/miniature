import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import SakuraBackground from '@/components/SakuraBackground';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'SakuraAnime',
  description: 'Anime, Manga, Manhwa & Marketplace Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-pink-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen relative">
        <SakuraBackground />
        <Providers>
          <Header />
          <main className="relative z-10 max-w-7xl mx-auto px-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
