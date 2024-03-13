import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { FC } from 'react';
import Link from 'next/link';

interface SurveyProps {
  title: string;
  image: string;
  questions: QuestionProps[];
}

interface QuestionProps {
  text: string;
  image: string;
  lifetimeSeconds: number;
  options: any[];
}

export const Survey: FC<SurveyProps> = ({ title, image, questions }) => {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia component="img" alt="Survey image" height="350" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>{' '}
        <Typography variant="body2" color="text.secondary">
          Number of questions: {questions.length}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          {' '}
          <Link href="/survey">Start</Link>{' '}
        </Button>
      </CardActions>
    </Card>
  );
};
