'use client';

import { Container, Box, Button, Grid, Paper } from '@mui/material';
import { FC } from 'react';
import { useWeb3React } from '@web3-react/core';
import useQUIZTokens from '@/app/_hooks/useQUIZTokens';
import useSurveys, { Survey } from '@/app/_hooks/useSurveys';
import { SurveyCard } from '@/app/_components/SurveyCard';
import BalanceData from '@/app/_components/BalanceData';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const { account } = useWeb3React();
  const quizTokens: any = useQUIZTokens();
  const { title, questions, image }: Survey = useSurveys();

  const getTokensBalance = async () => {
    if (quizTokens) {
      const tokensTotal = await quizTokens.methods.balanceOf(account).call();
      const supplyTotal = await quizTokens.methods.totalSupply().call();
    }
  };

  return (
    <Box sx={{ height: '100vh', m: 4, flexGrow: 1 }}>
      <Grid container spacing={12}>
        <Grid item xs={8}>
          <SurveyCard title={title} image={image} questions={questions}></SurveyCard>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <BalanceData />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
