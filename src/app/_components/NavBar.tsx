import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { FC } from 'react';
import Link from 'next/link';

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography variant="h6" sx={{ flexGrow: 1, mr: 2 }}>
          <Link href="/survey">Survey</Link>
        </Typography>
        <Button color="inherit">Conectar Wallet</Button>
      </Toolbar>
    </AppBar>
  );
};
