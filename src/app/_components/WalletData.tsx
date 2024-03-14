'use client';

import { Button, Typography, Chip, Badge, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useCallback, useEffect, useState, FC } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { connector } from '@/app/_config/web3';
import useTruncatedAddress from '@/app/_hooks/useTruncatedAddress';

interface WalletDataProps {}

export const WalletData: FC<WalletDataProps> = () => {
  const [balance, setBalance] = useState(Number(0));
  const { active, activate, deactivate, account, error, library } = useWeb3React();

  const truncatedAddress = useTruncatedAddress(account);

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    console.log('connecting');
    activate(connector);
    localStorage.setItem('previouslyConnected', 'true');
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem('previouslyConnected');
  };

  const getBalance = useCallback(async () => {
    const toSet: string = await library.eth.getBalance(account);

    const formated: string = (Number(toSet) / 1e18).toFixed(2);

    setBalance(Number(formated));
  }, [library?.eth, account]);

  useEffect(() => {
    console.log(active);
    if (active) getBalance();
  }, [active, getBalance]);

  useEffect(() => {
    console.log('useeffecting');
    if (localStorage.getItem('previouslyConnected') === 'true') connect();
  }, [connect]);

  return (
    <Box>
      {active ? (
        <Badge
          badgeContent={`~${balance}Ξ`}
          color="secondary"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Chip color="success" label={truncatedAddress} onDelete={disconnect} />
        </Badge>
      ) : (
        <Button variant="contained" color="success" onClick={connect}>
          {isUnsupportedChain ? 'Red no soportada' : 'Conectar wallet'}
        </Button>
      )}
    </Box>
  );
};
