import {
  Alert,
  AlertColor,
  AlertTitle,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';

import useQUIZTokens from '@/app/_hooks/useQUIZTokens';
import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';

interface SurveyProps {
  surveyId?: number;
  title: string;
  image: string;
  questions: QuestionProps[];
  anwsersList?: number[];
}

interface QuestionProps {
  id: number;
  text: string;
  image: string;
  lifetimeSeconds: number;
  options: any[];
}

export const SurveyCard: FC<SurveyProps> = ({ surveyId, title, image, questions, anwsersList }) => {
  const { account } = useWeb3React();
  const quizTokens: any = useQUIZTokens();
  const [toast, setToast] = useState({
    open: false,
    title: '',
    description: '',
    status: '',
  });

  const queryClient = useQueryClient();

  const refetchBalance = () => {
    queryClient.invalidateQueries({ queryKey: ['tokensBalance'] });
  };

  const handleClose = () => {
    setToast({
      ...toast,
      open: false,
    });
  };

  const mintTokens = async () => {
    if (quizTokens !== undefined) {
      quizTokens.methods
        .submit(surveyId, anwsersList)
        .send({
          from: account,
        })
        .on('transactionHash', (txHash: any) => {
          setToast({
            open: true,
            title: 'Transaction sended it',
            description: txHash,
            status: 'info',
          });
          refetchBalance();
        })
        .on('receipt', (receipt: any) => {
          setToast({
            open: true,
            title: 'Transaction received it',
            description: '',
            status: 'success',
          });
          refetchBalance();
        })
        .on('error', (error: any) => {
          alert(`Transacción fallida ${error?.message}`);
          setToast({
            open: true,
            title: 'Transaction falied it',
            description: '',
            status: 'error',
          });
        });
    }
  };

  const handleSubmit = () => {
    mintTokens();
  };

  return (
    <>
      <Card>
        <CardMedia component="img" alt="Survey image" height="350" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Overview of {title}
          </Typography>{' '}
          <Typography variant="body2" color="text.secondary">
            Number of questions: {questions?.length}
          </Typography>
          {anwsersList !== undefined ? (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {questions?.map((question, index) => (
                <ListItem key={question.id + question.text} alignItems="flex-start">
                  <ListItemText
                    primary={`${index + 1} - ${question.text}`}
                    secondary={
                      anwsersList !== undefined && anwsersList.length > 0
                        ? question.options.find((option) => option.id === anwsersList[index])?.text
                        : ''
                    }
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            ' '
          )}
        </CardContent>
        <CardActions>
          {anwsersList !== undefined ? (
            <Button size="small" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button size="small">
              {' '}
              <Link href="/survey">Start</Link>{' '}
            </Button>
          )}
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={toast.open}
        onClose={handleClose}
        key={'top' + 'center'}
      >
        <Alert
          onClose={handleClose}
          color={toast?.status as AlertColor}
          variant="filled"
          sx={{ width: '100%' }}
        >
          <AlertTitle>{toast.title}</AlertTitle>
          {toast.description}
        </Alert>
      </Snackbar>
    </>
  );
};
