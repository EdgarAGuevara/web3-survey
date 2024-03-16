# Web3 Survey

Web3 Challenge by Edgar A Guevara.

## Introduction

This project is a responsive web application developed using React and TypeScript for people to participate in surveys and earn tokens in the process. It connects to the Ethereum blockchain using Web3 technology and interacts with smart contracts to reward users with tokens for completing surveys.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using npm:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Technologies Used

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [React Query](https://react-query.tanstack.com/)
- [Material UI](https://mui.com/)
- [web3.js](https://web3js.readthedocs.io/)
- [web3-react](https://github.com/Uniswap/web3-react)
- [web3-react-connector](https://github.com/Uniswap/web3-react/blob/v6/docs/connectors/README.md)

## Challenge Brief

A survey company wants to create a new quiz form that rewards users with tokens for participating in the survey. This project fulfills the requirements outlined in the challenge brief.

## Features

- Connect Metamask wallet.
- Ensure the user is connected to the Goerli network.
- Show the balance of the $QUIZ token.
- Present the daily trivia with its picture and allow users to begin answering.
- Display each question with a timer.
- Move to the next question once answered or expired.
- Show an overview of all answers.
- Submit the questions to the validator contract.
- Refresh the balance of $QUIZ token.

## Evaluation Criteria

The project will be evaluated based on the following criteria:

- Aesthetic, clean code (use linter).
- Sensible folder structure (hexagonal architecture).
- Scalable solution.
- Well-documented Readme file including explanations on environment variables required for running the project.
- Include pictures or videos showing the project working.
- Deploy the application to Vercel, Netlify, or any other free hosting service for quick testing.

## Additional Resources

- [Survey Contract Repository](https://github.com/rather-labs/blockchain-challenge-utils)
- [Survey Sample](https://github.com/rather-labs/blockchain-challenge-utils/blob/main/survey-sample.json)
- [Smart Contract of $QUIZ token](https://goerli.etherscan.io/address/0x437ef217203452317c3c955cf282b1ee5f6aaf72)
- [Material UI Documentation](https://mui.com/)

---

## Additional Content

![Dashboard](additional_content/Dashboard_loading.png 'Optional title')

![Dashboard](additional_content/Dashboard.png 'Optional title')

![Dashboard](additional_content/Question_1.png 'Optional title')

![Dashboard](additional_content/Question_2.png 'Optional title')

![Dashboard](additional_content/Overview.png 'Optional title')

![Dashboard](additional_content/Send_tx.png 'Optional title')

---

## Note from the Author

I'm writing this note to address a couple of issues that have been affecting the functionality of the app, despite its overall functionality.

The two errors encountered are as follows:

1. **MetaMask - RPC Error: header not found**

   This error occurs with the message: `{code: -32000, message: 'header not found'}`. Despite extensive research, a definitive solution has not been found. Many users have reported similar experiences, with solutions ranging from switching providers (e.g., from Infura to Alchemy) to no avail. The intermittent nature of the error is particularly puzzling, this leading me to speculation that it may be related to changes in Ethereum's consensus mechanism.

2. **Uncaught (in promise) ResponseError: Returned error: header not found**

   This error is accompanied by a stack trace pointing to `web3_request_manager.js`. Like the previous error, it has proven challenging to resolve definitively. Efforts to mitigate the issue, such as changing providers, have not yielded consistent results.

Despite diligent investigation, the root cause of these errors remains elusive. It is possible that changes in Ethereum's network, such as the transition to the Proof of Stake (PoS) consensus mechanism, may have contributed to instability on the Goerli testnet. However, further analysis is needed to confirm this hypothesis.

Rest assured, I am actively working to address these issues and ensure the smooth operation of the app. Thank you for your patience and understanding as I continue to investigate and resolve these challenges.

- [Error Metamask](https://github.com/MetaMask/metamask-extension/issues/7234)
- [Error Metamask 2](https://stackoverflow.com/questions/64980778/metamask-rpc-error-permissions-request-already-pending-in-angular-10)
