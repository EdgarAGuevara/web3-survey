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
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { SurveyCard } from '@/app/_components/SurveyCard';
import useSurveys, { Option, Survey } from '@/app/_hooks/useSurveys';

interface QuestionViewProps {}

const QuestionView: FC<QuestionViewProps> = () => {
  const { questions, title, image, id }: Survey = useSurveys();

  const [anwsersList, setAnwsersList] = useState<number[]>([]);
  const [optionSelected, setOptionSelected] = useState<Option>();
  const [questionSelected, setQuestionSelected] = useState(questions[0]);
  const [positionSelected, setPositionSelected] = useState(0);
  const [completedSurvey, setCompletedSurvey] = useState(false);

  const handleAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valueSelected = optionSelected !== undefined ? optionSelected?.id : 0;

    setAnwsersList([...anwsersList, valueSelected]);

    nextQuestion();
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number((event.target as HTMLInputElement).value);
    setOptionSelected(questions.find((question) => question.id === id));
  };

  const nextQuestion = () => {
    const nextPos = positionSelected + 1;
    if (nextPos >= questions.length) {
      setCompletedSurvey(true);
    }
    setPositionSelected(nextPos);
    setQuestionSelected(questions[nextPos]);
  };

  return (
    <Container maxWidth="md" fixed>
      <Box sx={{ mt: 5 }}>
        {completedSurvey ? (
          <SurveyCard
            surveyId={id}
            title={title}
            image={image}
            questions={questions}
            anwsersList={anwsersList}
          ></SurveyCard>
        ) : (
          <Accordion key={questionSelected.text} defaultExpanded>
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
                  <Typography variant="body2" color="text.secondary">
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
                  </Typography>
                  <div>{questionSelected.lifetimeSeconds}</div>
                </CardContent>
              </Card>
            </AccordionDetails>
          </Accordion>
        )}
      </Box>
    </Container>
  );
};

export default QuestionView;
