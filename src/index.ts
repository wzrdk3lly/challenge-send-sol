import web3 = require('@solana/web3.js')
import Dotenv from 'Dotenv'
Dotenv.config()

async function main(){

    // Create a connection to the solana devnet network
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'));

    // Create 2 keypairs
    const firstKeypair = await web3.Keypair.generate();
    const secondKeypair = await web3.Keypair.generate();
    const airdropSignature = await connection.requestAirdrop(firstKeypair.publicKey, web3.LAMPORTS_PER_SOL * 1);

    // send the confirm transaction on solana network
    await connection.confirmTransaction(airdropSignature);

    //Printing both public keys to console
    console.log('First Keypair: ', firstKeypair.publicKey);
    console.log( 'Second Keypair: ', secondKeypair.publicKey);
    
    // Request balance of the first keypair
    let firstBalance = await connection.getBalance(firstKeypair.publicKey);
    let secondBalance = await connection.getBalance(secondKeypair.publicKey)
    
    //Display what should be the new balance is after airdrop
    console.log("The first account has: %d SOL", firstBalance/1000000000)
    console.log("The second account has: %d SOL", secondBalance/1000000000)



}

async function transferSol(connection: web3.Connection, payer: web3.Keypair, receiver: web3.PublicKey, amount: number){
    const transaction = new web3.Transaction()

    transaction.add(web3.SystemProgram.transfer({
        fromPubkey: payer.publicKey,
        toPubkey: receiver,
        lamports: amount,
    }));

    await web3.sendAndConfirmTransaction(connection, transaction,[payer])
}




main().then(() => {
    console.log("Finished Successfully")
}).catch((error)=> {
    console.error(error)
})
