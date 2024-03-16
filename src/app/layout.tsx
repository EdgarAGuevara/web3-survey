import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { NavBar } from '@/app/_components/NavBar';
import Providers from '@/app/_util/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Surveys and Rewards',
  description: 'Complete Surveys and get $QUIZ TOKENS.',
  creator: 'Edgar A Guevara',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
