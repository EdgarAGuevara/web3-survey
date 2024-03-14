'use client';

import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '@/app/_config/web3';

export default function Web3Provider({ children }: { children: React.ReactNode }) {
  return <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>;
}
