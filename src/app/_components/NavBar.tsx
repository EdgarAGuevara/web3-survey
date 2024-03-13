import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { Box } from '@mui/system';

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Survey with Tokens
          </Typography>
          <Button color="inherit">Conectar Wallet</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
