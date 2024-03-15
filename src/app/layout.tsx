import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/app/theme';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { NavBar } from '@/app/_components/NavBar';
import { Container } from '@mui/system';
import Web3Provider from '@/app/_providers/web3-proviver';

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
        <Web3Provider>
          <AppRouterCacheProvider>
            {' '}
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <NavBar />
              <Container maxWidth="xl" fixed>
                {children}
              </Container>{' '}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
