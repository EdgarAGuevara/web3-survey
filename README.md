# web3-survey
WEB3 Challenge of Edgar A Guevara.

## Challenge Brief
A survey company wants to make a new quiz form that rewards users with tokens for participating
in the survey.

They create surveys, loading them into JSON format and they want you to develop a responsiveweb application using React and TypeScript for people to answer and submit the results, getting tokens in the process.

## Requirements:

* Vite (preferred) or Next.js for the front end infrastructure, taking into account for the architecture of the project hierarchy and organization of directories, routing, conventions and good practices of clean code, good design patterns for the app itself but also for the react components.
* For the app state, React Query (preferred), Contexts or Mobx State Tree.
* Material UI with React Hook Form for components (plus).
* Add a descriptive “readme” file, it should also include links to any resources and
documentation used to solve the challenge.

## The web should behave as follows:

* Connect Metamask wallet.
* Ensure user is connected to Goerli and if not show a button to switch networks
automatically.
* Show balance of $QUIZ token (address below).
* Once the page is loaded, present the title of the daily trivia with its picture and a button that allows you to begin answering.
* Once the survey starts, display the current question, which will be available for the amount of seconds in the lifetimeSeconds property.
* Answered or not it should move onto the next question.
* Once all the questions are finished, show an overview with all the answers.
* Show a button to submit the questions to the validator contract.
* Refresh the balance of $QUIZ

## Evaluation

The challenge is simple, so we will hold the solution to the highest quality standard, considering:

* Aesthetic, clean code (use linter).
* Senseful folder structure (hexagonal architecture).
* Scalable solution.
* Include in Readme file explanation on env vars required for running the project.
* Include also:
    * Some pictures or video showing the project working.
    * Deploy the application to vercel, netlify or any free hosting service for quick testing.

## Hints & links
* [Survey Contract Repo for reference](https://github.com/rather-labs/blockchain-challenge-utils)

* [Survey Sample](https://github.com/rather-labs/blockchain-challenge-utils/blob/main/survey-sample.json)

* [Smart Contract of $QUIZ token](https://goerli.etherscan.io/address/0x437ef217203452317c3c955cf282b1ee5f6aaf72)

* [Material UI](https://mui.com/)