import type { Metadata } from 'next';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Footer } from '@/sections/Footer';
import Header from '@/sections/Header';
import PageTransition from '@/ui/PageTransition';

export const metadata: Metadata = {
  title: 'Foxworth Global',
  description: 'Leading creative company',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <PageTransition>
          <Header />
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
