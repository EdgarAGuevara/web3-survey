'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';

import BalanceData from '@/app/_components/BalanceData';
import { SurveyCard } from '@/app/_components/SurveyCard';
import { Option } from '@/app/_util/SurveysInterface';
import { useQuery } from '@tanstack/react-query';
import surveysSource from '../../../survey-sample.json';

import CountdownTimer from '@/app/_components/CountdownTimer';

interface QuestionViewProps {}

const QuestionView: FC<QuestionViewProps> = () => {
  const { data, error } = useQuery({
    queryKey: ['surveys'],
    queryFn: () => surveysSource,
  });

  if (data === undefined) return 'An error has occurred: ' + error?.message;

  const [anwsersList, setAnwsersList] = useState<number[]>([]);
  const [optionSelected, setOptionSelected] = useState<Option>();
  const [questionSelected, setQuestionSelected] = useState(data?.questions[0]);
  const [positionSelected, setPositionSelected] = useState(0);
  const [completedSurvey, setCompletedSurvey] = useState(false);

  const handleAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valueSelected = optionSelected !== undefined ? optionSelected?.id : 0;

    setAnwsersList([...anwsersList, valueSelected]);
    setOptionSelected(undefined);

    nextQuestion();
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number((event.target as HTMLInputElement).value);
    setOptionSelected(data?.questions.find((question) => question.id === id));
  };

  const nextQuestion = () => {
    const nextPos = positionSelected + 1;
    if (nextPos >= data?.questions.length) {
      setCompletedSurvey(true);
    }
    setPositionSelected(nextPos);
    setQuestionSelected(data?.questions[nextPos]);
  };

  return (
    <Box sx={{ height: '100vh', m: 4, flexGrow: 1 }}>
      <Grid container spacing={12}>
        <Grid item xs={6}>
          {completedSurvey ? (
            <SurveyCard
              surveyId={data.id}
              title={data.title}
              image={data.image}
              questions={data.questions}
              anwsersList={anwsersList}
            ></SurveyCard>
          ) : (
            <Accordion key={questionSelected.id + questionSelected.text} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                {questionSelected.text}
              </AccordionSummary>

              <AccordionDetails>
                <Card>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={questionSelected.image}
                    title={questionSelected.text}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Options
                    </Typography>
                    <Box>
                      <form onSubmit={handleAnswer}>
                        <FormControl sx={{ m: 3 }} variant="standard">
                          <RadioGroup
                            aria-labelledby="Options-radio"
                            name="Options"
                            value={optionSelected?.id}
                            onChange={handleOptionChange}
                          >
                            {questionSelected.options.map((option: Option) => (
                              <FormControlLabel
                                key={option.id}
                                value={option.id}
                                control={<Radio />}
                                label={option.text}
                              />
                            ))}
                          </RadioGroup>
                          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                            Send Anwser
                          </Button>
                        </FormControl>
                      </form>
                    </Box>
                    <CountdownTimer
                      initialCount={questionSelected.lifetimeSeconds}
                      notify={nextQuestion}
                    />
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>
          )}
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <BalanceData />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionView;
