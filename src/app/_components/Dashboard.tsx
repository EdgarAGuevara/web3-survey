'use client';

import { Container, Box, Button } from '@mui/material';
import { SurveyCard } from '@/app/_components/SurveyCard';
import { FC } from 'react';
import useQUIZTokens from '@/app/_hooks/useQUIZTokens';
import useSurveys, { Survey } from '@/app/_hooks/useSurveys';
import { useWeb3React } from '@web3-react/core';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const { account } = useWeb3React();
  const quizTokens: any = useQUIZTokens();
  const { title, questions, image }: Survey = useSurveys();

  const getTokensBalance = async () => {
    if (quizTokens) {
      console.log(account);
      const tokensTotal = await quizTokens.methods.balanceOf(account).call();
      const supplyTotal = await quizTokens.methods.totalSupply().call();
      console.log(tokensTotal, supplyTotal);
    }
  };

  return (
    <Container maxWidth="sm" fixed>
      <Box sx={{ height: '100vh', mt: 2 }}>
        <Button variant="contained" onClick={getTokensBalance}>
          GetBalance
        </Button>
        <SurveyCard title={title} image={image} questions={questions}></SurveyCard>
      </Box>
    </Container>
  );
};

export default Dashboard;
