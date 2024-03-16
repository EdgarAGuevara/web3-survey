'use client';

import { ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Web3Provider from '@/app/_providers/web3-proviver';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import theme from '@/app/theme';

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Web3Provider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Web3Provider>
      </QueryClientProvider>
    </>
  );
}
