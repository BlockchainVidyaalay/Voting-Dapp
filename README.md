# Voting-Dapp

Blockchain can be used in developing many real life application that can solve the issue of trustability. Voting system is one of them. We all know a fair Voting System
is an important part on a Democratic Country. Hence in this project we have tried to implement a simple voting solution using Blockchain technology.

## Pre-requestis
1. Npm and node should be installed
2. truffle 
3. Metamask extension in the browser

## Quick Start

### Steps to compile the contract
1. Clone the repo
2. cd Voting-dapp/contract-folder
3. Install dependencies: `npm install`
4. Run truffle in a terminal: `truffle develop`
5. Compile the code: `compile`
6. Migrate the code: `migrate --reset`

### Steps to run the forntend application
1. Copy and paste the json file generated after migrating the contract in the src directory.
2. Install dependencies: `npm install`
3. Make sure truffle is running in a terminal. If not then run truffle with the command: `truffle develop`
4. Open metamask and create accounts for voters and candidates
5. Run the react app: `npm start`

## Deploy smart contract on testnet:
Refer to this video for deploying smart contract on testnet: https://youtu.be/L1L050u7j2M

## Note:
You can open and paste the code in Remix and test all the functions. 

---

## Few Tips to solve error

1. Since the tech stack used in the project like truffle, ganache and web3 library keeps on updating so if you are facing issues while running then first make sure the following packages are updated

        * web3-js in react
        * truffle compiler in smart-contract

2. If there is very large change in version of web3-js file then you need to update the functions of web3.js calls depending on the latest version. For this prefer the web3 official documentation 

3. If you are facing metamask issues then try to uninstall the metamask extension and again install it. Import the accounts again. Can also remove the account once and try to import again 

4. Metamask and truffle in local give issues so be patient and try running the transaction again and again. 

5. Use remix always to verify the smart contract. If smart contract is running fine in remix then the error is in react side. React dependency might differ from machine to machine

## Pro tip
Start using chat-GPT for learning blockchain. It will help you greatly in solving your every issue. 
