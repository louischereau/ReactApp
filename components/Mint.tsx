/* Here a component "Home" is defined which includes a function "Minting", which when called initates a mint.
The component is integrated in the _app.tsx to ensure it is executed and thus the minting function is called
once the user lands on the website (currenclty does so continuosly i.e. infinitely) */
import styles from '../styles/Home.module.css';
import { useMemo, useState } from 'react';
import React from 'react';
import * as anchor from '@project-serum/anchor'
import {
  useWallet
} from '@solana/wallet-adapter-react';
import {
    CandyMachineAccount,
    getCandyMachineState,
    mintOneToken,
  } from './candy-machine';
import Home from '../pages';
import { Button } from '@mui/material';



const MintButton = () => {
    // call to useWallet function to get the info about connected wallet, like the public key
    const wallet = useWallet(); 

    // set the host to Devnet
    const rpcHost = 'https://api.devnet.solana.com' 

    // establish a new connection to the solana devnet
    const connection = new anchor.web3.Connection(rpcHost
      ? rpcHost
      : anchor.web3.clusterApiUrl('devnet'));
    
    //function declaration -> the setCandyMachine function determines the candyMachine variable
    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
     
    // takes the wallet variable initialised above and creates an anchorWallet i.e. a Wallet usable by Anchor client
     const anchorWallet = useMemo(() => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        console.log("Wallet Not Connected")
        return;
      }
      return {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as typeof anchor.Wallet;
    }, [wallet]);


  const Mint = async() => {

    // turnes the public key string below into a public key object (required for the next functions)
    const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
      try {
        const candyMachineId = new anchor.web3.PublicKey(
          "Ax9fYaiAjVFm7Xk2H9q5M9jqJ4XpKYxr3qaHN6URTwLa"
        ); 
        return candyMachineId; // returns the candyMachineID
      } catch (e) {
        console.log('Failed to construct CandyMachineId', e);
        return undefined;
      }
    };
    // calls the above function to construct the public key object
    const candyMachineId = getCandyMachineId()

   
      
      // gets the state of the candy machine on the blockchain and stores this with setCandyMachine 
      // in the candyMachine variable declared above
      if(anchorWallet && candyMachineId){
        const cndy = await getCandyMachineState(
         anchorWallet,
         candyMachineId,
         connection,
        );
        setCandyMachine(cndy);
      } 
    
    // if the wallet is connected and both the candyMachine and wallet PubKey are not NULL, then mint
    // using the candy machine stored in the candyMachine variable and the wallet Public key of the user
    if (wallet.connected && candyMachine?.program && wallet.publicKey){
          await mintOneToken(candyMachine, wallet.publicKey)
          console.log("minted")
        }
  
  }
  // here the minting function defined above is called
  //Minting()
  
  return(
    <Button 
      onClick={async() => {await Mint()}}>
      Mint
      </Button>
    )
   
} 
export default MintButton