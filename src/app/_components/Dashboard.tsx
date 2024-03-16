'use client';

import { Container, Box, Button, Grid, Paper, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { useWeb3React } from '@web3-react/core';
import useQUIZTokens from '@/app/_hooks/useQUIZTokens';
import { SurveyCard } from '@/app/_components/SurveyCard';
import BalanceData from '@/app/_components/BalanceData';
import surveysSource from '../../../survey-sample.json';
import { useQuery } from '@tanstack/react-query';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const { account } = useWeb3React();
  const quizTokens: any = useQUIZTokens();
  const { data, isPending, error } = useQuery({
    queryKey: ['surveys'],
    queryFn: () => surveysSource,
  });

  return (
    <Box sx={{ height: '100vh', m: 4, flexGrow: 1 }}>
      <Grid container spacing={12}>
        <Grid item xs={8}>
          {!data ? (
            <CircularProgress />
          ) : (
            <SurveyCard
              title={data.title}
              image={data.image}
              questions={data.questions}
            ></SurveyCard>
          )}
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
