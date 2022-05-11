import web3 = require('@solana/web3.js')
import Dotenv from 'Dotenv'
Dotenv.config()

async function main(){
    const firstKeypair = await web3.Keypair.generate()
    const secondKeypair = await web3.Keypair.generate()

    console.log('First Keypair: ', firstKeypair.publicKey)
    console.log( 'Second Keypair: ', secondKeypair.publicKey)
}

main().then(() => {
    console.log("Finished Successfully")
}).catch((error)=> {
    console.error(error)
})
