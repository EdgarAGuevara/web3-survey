import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { NavBar } from '@/app/_components/NavBar';
import { Container } from '@mui/system';

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
        <AppRouterCacheProvider>
          {/* <MainHeader title={companyName}></MainHeader> */}
          <NavBar />

          <Container maxWidth="xl" fixed>
            {children}

            {/* <Footer title={companyName}></Footer> */}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
