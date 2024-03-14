import { Container, Box } from '@mui/material';
import { Survey } from '@/app/_components/SurveyCard';

export default function Home() {
  return (
    <Container maxWidth="sm" fixed>
      <Box sx={{ height: '100vh', mt: 2 }}>
        <Survey
          title={'Sample Survey'}
          image={
            'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
          }
          questions={[
            {
              text: 'Question1',
              image:
                'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
              lifetimeSeconds: 10,
              options: [
                {
                  text: 'Opt1',
                },
                {
                  text: 'Opt2',
                },
                {
                  text: 'Opt',
                },
              ],
            },
          ]}
        ></Survey>
      </Box>
    </Container>
  );
}
