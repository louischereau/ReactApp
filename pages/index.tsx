import type { NextPage } from 'next';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Unity, { UnityContext } from "react-unity-webgl";

import { useMemo, useState } from 'react';
import * as anchor from '@project-serum/anchor'
import {
  useWallet
} from '@solana/wallet-adapter-react';
import {
    CandyMachineAccount,
    getCandyMachineState,
    mintOneToken,
  } from '../components/candy-machine';
import { Button } from '@mui/material';

/* This function returns the layout of the hompage, including two buttons to connect and disconnect the wallet*/
const Home: NextPage = () => {   
  
  // call to useWallet function to get the info about connected wallet, like the public key
  const wallet = useWallet(); 
  
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
   
    
    //function declaration -> the setCandyMachine function determines the candyMachine variable
    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
     
    // takes the wallet variable initialised above and creates an anchorWallet i.e. a Wallet usable by Anchor client
    
    // set the host to Devnet
    const rpcHost = 'https://api.devnet.solana.com'
     
    // establish a new connection to the solana devnet
     const connection = new anchor.web3.Connection(rpcHost
      ? rpcHost
      : anchor.web3.clusterApiUrl('devnet')); 

  const Mint = async() => {
     
     
    // turnes the public key string below into a public key object (required for the next functions)
    const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
      try {
        const candyMachineId = new anchor.web3.PublicKey(
          "8aYkMCQRGWdHos3SiDBN5KX8pWZU5uUqVjdVZ4GxvFkY"
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
  
  
  const unityContext = new UnityContext({
    loaderUrl: "unitybuild/AnotherTestApp.loader.js",
    dataUrl: "unitybuild/AnotherTestApp.data",
    frameworkUrl: "unitybuild/AnotherTestApp.framework.js",
    codeUrl: "unitybuild/AnotherTestApp.wasm",
  });
/*
  useEffect(function(){
    unityContext.on("Mint", function(){
      console.log("Test")
    });
  })
*/

function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}
  unityContext.on("Mint", async () => {
    await Mint()});
  
  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }


  return (
    <div className={styles.title}>
    <Head>
      <title>NFT Games</title>
    </Head>
     <main className={styles.main}>  
       <div className={styles.walletButtons}>    
         <WalletMultiButton />
         <WalletDisconnectButton />
       </div>
       <Unity
          unityContext={unityContext}
          style={{
            height: "100%",
            width: 950,
            border: "2px solid black",
            background: "grey",
      }}/>
    </main>
 </div>
  );


};

export default Home;

/*
 <div className={styles.title}>
           <Head>
             <title>NFT Games</title>
           </Head>
            <main className={styles.main}>  
              <div className={styles.walletButtons}>    
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <div className={styles.buttons}>
                <MintButton/>
              </div>
       </main>
        </div>


*/