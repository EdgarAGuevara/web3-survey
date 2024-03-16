'use client';

import { Box, Card, CardContent, Typography, Button, LinearProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import useQUIZTokens from '@/app/_hooks/useQUIZTokens';
import { useWeb3React } from '@web3-react/core';
import { useQuery } from '@tanstack/react-query';

interface BalanceDataProps {}

const BalanceData: FC<BalanceDataProps> = () => {
  const { account } = useWeb3React();
  const quizTokens: any = useQUIZTokens();

  const getTokensBalance = async () => {
    const tokensTotal = await quizTokens.methods.balanceOf(account).call();
    const supplyTotal = await quizTokens.methods.totalSupply().call();
    return { tokensTotal, supplyTotal };
  };

  const { data, error, isPending, refetch } = useQuery({
    queryKey: ['tokensBalance'],
    queryFn: getTokensBalance,
    enabled: quizTokens !== undefined,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card>
        <CardContent>
          {isPending ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="div">
                Balance of $QUIZ Tokens
              </Typography>{' '}
              <Typography variant="body2" color="text.secondary">
                <>{error ? 'Error with contract try again' : data?.tokensTotal}</>
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Total supply $QUIZ Tokens
              </Typography>{' '}
              <Typography variant="body2" color="text.secondary">
                <> {error ? 'Error with contract try again' : data?.supplyTotal}</>
              </Typography>
              <Button sx={{ mt: 1 }} variant="contained" onClick={() => refetch()}>
                Get Balance
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BalanceData;
