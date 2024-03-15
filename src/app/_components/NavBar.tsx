'use client';

import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

import { WalletData } from '@/app/_components/WalletData';

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Survey with Tokens
          </Typography>
          <WalletData />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
