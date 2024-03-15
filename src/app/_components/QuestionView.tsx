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
import { FC, useState } from 'react';

import useSurveys, { Option, Question, Survey } from '@/app/_hooks/useSurveys';

interface QuestionViewProps {}

const QuestionView: FC<QuestionViewProps> = () => {
  const { questions }: Survey = useSurveys();

  const [anwser, setAnwser] = useState('');
  const [optionSelected, setOptionSelected] = useState('');

  const handleAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(optionSelected);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionSelected((event.target as HTMLInputElement).value);
  };

  return (
    <Container maxWidth="md" fixed>
      <Box sx={{ mt: 5 }}>
        {questions.map((question: Question) => (
          <Accordion key={question.text}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              {question.text}
            </AccordionSummary>

            <AccordionDetails>
              <Card>
                <CardMedia sx={{ height: 200 }} image={question.image} title={question.text} />
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
                          value={optionSelected}
                          onChange={handleOptionChange}
                        >
                          {question.options.map((option: Option) => (
                            <FormControlLabel
                              key={option.text}
                              value={option.text}
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
                  <div>{question.lifetimeSeconds}</div>
                </CardContent>
              </Card>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default QuestionView;
