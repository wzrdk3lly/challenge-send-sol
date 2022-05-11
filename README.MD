## Challenge
Overview: This is a script to send SOL, the Solana token, from one account(wallet) to another. 

- This is a great way to understand the web3.js library for Solana. 
- This is also a great way to understand how to send transactions via a javascript client


## Instructions to run the project
1. `git clone https://github.com/wzrdk3lly/challenge-send-sol.git` the project code 
2. run `npm install` to install all the dependencies
3. run `npm start` to send the transaction/instruction to the Solana devnet rpc nodes
4. View the console log's returned signature and use Solana explorer to see additional details of the transaction that just took place.


## Skills learned
- How to send Sol between wallets via typescript code.
- Converting lamports to sol
- How to manipulate lamports
- Debugging rent exemption/transaction errors
- Sending transactions that only return data ("get" style type of request) 
- Interacting with devnet instead of localhost

## Potential Improvements 
- Send the program without receiving "bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)" console message.
