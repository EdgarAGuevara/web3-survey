This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies

- [REACT](https://react.dev/)
- [NEXT](https://nextjs.org/)
- [REACT QUERY](https://tanstack.com/query/latest)
- [Material UI](https://mui.com/material-ui/getting-started/installation/)

# web3-survey

WEB3 Challenge of Edgar A Guevara.

## Challenge Brief

A survey company wants to make a new quiz form that rewards users with tokens for participating
in the survey.

They create surveys, loading them into JSON format and they want you to develop a responsiveweb application using React and TypeScript for people to answer and submit the results, getting tokens in the process.

## Requirements:

- Vite (preferred) or Next.js for the front end infrastructure, taking into account for the architecture of the project hierarchy and organization of directories, routing, conventions and good practices of clean code, good design patterns for the app itself but also for the react components.
- For the app state, React Query (preferred), Contexts or Mobx State Tree.
- Material UI with React Hook Form for components (plus).
- Add a descriptive “readme” file, it should also include links to any resources and
  documentation used to solve the challenge.

## The web should behave as follows:

- Connect Metamask wallet.
- Ensure user is connected to Goerli and if not show a button to switch networks
  automatically.
- Show balance of $QUIZ token (address below).
- Once the page is loaded, present the title of the daily trivia with its picture and a button that allows you to begin answering.
- Once the survey starts, display the current question, which will be available for the amount of seconds in the lifetimeSeconds property.
- Answered or not it should move onto the next question.
- Once all the questions are finished, show an overview with all the answers.
- Show a button to submit the questions to the validator contract.
- Refresh the balance of $QUIZ

## Evaluation

The challenge is simple, so we will hold the solution to the highest quality standard, considering:

- Aesthetic, clean code (use linter).
- Senseful folder structure (hexagonal architecture).
- Scalable solution.
- Include in Readme file explanation on env vars required for running the project.
- Include also:
  - Some pictures or video showing the project working.
  - Deploy the application to vercel, netlify or any free hosting service for quick testing.

## Hints & links

- [Survey Contract Repo for reference](https://github.com/rather-labs/blockchain-challenge-utils)

- [Survey Sample](https://github.com/rather-labs/blockchain-challenge-utils/blob/main/survey-sample.json)

- [Smart Contract of $QUIZ token](https://goerli.etherscan.io/address/0x437ef217203452317c3c955cf282b1ee5f6aaf72)

- [Material UI](https://mui.com/)
