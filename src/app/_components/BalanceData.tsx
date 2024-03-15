'use client';

import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import useQUIZTokens from '@/app/_hooks/useQUIZTokens';
import useSurveys, { Survey } from '@/app/_hooks/useSurveys';
import { useWeb3React } from '@web3-react/core';

interface BalanceDataProps {
  updateBlance: boolean;
  setUpdateBlance: any;
}

const BalanceData: FC<BalanceDataProps> = (updateBlance, setUpdateBlance) => {
  const { account } = useWeb3React();
  const quizTokens: any = useQUIZTokens();

  const [totalTokens, setTotalTokens] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [errorTestnet, setErrorTestnet] = useState(false);

  const getTokensBalance = async () => {
    if (quizTokens) {
      quizTokens.methods
        .balanceOf(account)
        .call({ from: account })
        .then(function (result: any) {
          setTotalTokens(result);
        })
        .catch(function (error: any) {
          console.log('Error on testnet', error);
          setErrorTestnet(true);
        });

      quizTokens.methods
        .totalSupply()
        .call({ from: account })
        .then(function (result: any) {
          setTotalSupply(result);
        })
        .catch(function (error: any) {
          console.log('Error on testnet', error);
          setErrorTestnet(true);
        });
    }
  };

  useEffect(() => {
    getTokensBalance();
  }, [quizTokens]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Balance of $QUIZ Tokens
          </Typography>{' '}
          <Typography variant="body2" color="text.secondary">
            <>{errorTestnet ? 'Error with contract try again' : totalTokens}</>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Total supply $QUIZ Tokens
          </Typography>{' '}
          <Typography variant="body2" color="text.secondary">
            <> {errorTestnet ? 'Error with contract try again' : totalSupply}</>
          </Typography>
          <Button sx={{ mt: 1 }} variant="contained" onClick={getTokensBalance}>
            Get Balance
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BalanceData;
