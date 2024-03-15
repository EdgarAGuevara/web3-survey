'use client';

import { AppBar, Button, Toolbar, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

import { WalletData } from '@/app/_components/WalletData';

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" color="inherit" underline="none" variant="h5" sx={{ flexGrow: 1 }}>
            {' '}
            Survey with Tokens
          </Link>
          <WalletData />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
