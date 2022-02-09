import type { NextPage } from 'next';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
/*import styled from 'styled-components';*/
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
import Message from '../components/Message';
import {MessageProp} from '../components/Message';
import {getParsedNftAccountsByOwner} from "@nfteyez/sol-rayz"
import { height } from '@mui/system';
import { assert } from 'console';
import axios from "axios";



var unityContext = new UnityContext({
  loaderUrl: "unitybuild/AnotherTestApp.loader.js",
  dataUrl: "unitybuild/AnotherTestApp.data",
  frameworkUrl: "unitybuild/AnotherTestApp.framework.js",
  codeUrl: "unitybuild/AnotherTestApp.wasm",
  });

   // set the host to Devnet
   const rpcHost = 'https://api.devnet.solana.com'
     
   // establish a new connection to the solana devnet
    const connection = new anchor.web3.Connection(rpcHost
     ? rpcHost
     : anchor.web3.clusterApiUrl('devnet')); 


/* This function returns the layout of the hompage, including two buttons to connect and disconnect the wallet*/
const readNFT: NextPage = () => {   
  
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
          send("minted Spaceman")
        }
  
  }

  /* -------------------------------- Reading NFT Data from Wallet in variable -------------------------------- */

  // Create relevant NFT data interface used
  interface relevantNFT {
    name: string;
    uri: string;
    mint: string;
  }

  // Initialise values
  const [image, setImage] = useState();
  const [userGameNFTArray, setUserGameNFTArray] = useState<relevantNFT[]>([]);
  let name = "";
  let name2 = "";
  let nameArray = new Array;
  let data;

  /* ---------------  Read NFT Data if Wallet is connected --------------- */
  if(wallet.connected && wallet.publicKey){

    // create an array where to insert relevant NFTs (with right creator ID)
    let tempGameNFTArray = new Array;
    const creator_id = 'AVabPm3PB7JxaNND5UKJRXQh4XRY4Mwjkg2nGAEG3TGn';
    
    data = async() => { 
      const queryResult = await getParsedNftAccountsByOwner({
        publicAddress: wallet.publicKey,
        connection: connection,
      });

      // Check if Wallet contains any NFTs
      if(queryResult == null){
        return null;
      }

      // Iterating through Wallet
      let queryLength = queryResult.length;
      for(let i = 0; i < queryLength; i++){
        console.log(i);

        // Skip irrelevant NFTs
        /* if (queryResult[i].data.creators[i].address != creator_id){
          continue;
        } */

        // Collecting relevant NFT instance
        let gameNFT: relevantNFT = {"name": queryResult[i].data.name, 
        "uri": queryResult[i].data.uri, "mint": queryResult[i].mint};
        tempGameNFTArray[i] = gameNFT;
 
        console.log("Name of found relevant NFT:");
        console.log(tempGameNFTArray[i].name);
        
        // This part just shows the image:
          /* async function getImage() {
          try {
            let response = await fetch(nft_data[0].data.uri);
            let responseJson = await response.json();
            return responseJson.image; // image is a category
          } catch(error) {
            console.error(error);
          }
        }
        //setImage(await getImage()); */

        send(queryResult[i].data.name.toString())
      }
      // Transfer information to userGameNFTArray
      setUserGameNFTArray(tempGameNFTArray);
      return queryResult;
    }
  
    console.log("We are outside of Asynch Function");
  
    // Populate Name Array to print names of relevant NFTs
    for(let i = 0; i < userGameNFTArray.length; i++){
      console.log(userGameNFTArray[i]);
      nameArray[i] = JSON.stringify(userGameNFTArray[i].name);
    }
  } 
  /* ---- End of If Wallet Connected ---- */
  else {
    data = null;
    console.log("Wallet not connected!");
  }

  /* ------------------------------ MARKUS ------------------------------ */
  // Creating the Unity Context Instance
  // https://github.com/jeffreylanters/react-unity-webgl/discussions/242
  /*const [unityContext, setUnity] = useState<UnityContext>()
  useEffect(() => {
    var new_untiy_context = new UnityContext({
      loaderUrl: "unitybuild/AnotherTestApp.loader.js",
      dataUrl: "unitybuild/AnotherTestApp.data",
      frameworkUrl: "unitybuild/AnotherTestApp.framework.js",
      codeUrl: "unitybuild/AnotherTestApp.wasm",
      });
    setUnity(new_untiy_context);
  },[]);
  */
/*
  const getBalance = async() => {
    if(wallet.publicKey){
      const candy = new anchor.web3.PublicKey(
        "8aYkMCQRGWdHos3SiDBN5KX8pWZU5uUqVjdVZ4GxvFkY"
      var balance = await connection.getTokenAccountsByOwner(wallet.publicKey, Mint: candy)
      send(balance.value.amount.toString())
    }
  }*/

  // Full screen handler
  function handleOnClickFullscreen() {
    if(unityContext)
      unityContext.setFullscreen(true);
  }

  var msg = "no wallet detected";
  if (wallet.connected && wallet.publicKey != null){
    msg = wallet.publicKey?.toBase58()
  }

  //send message
  function send(message: string | boolean ){
    console.log("function called")
    console.log("message is:", message)
    message = "Message is: " + message;
    unityContext!.send("datareadcontroller", "GetNFTData", message)
}

  // Event Listener for Mint Event
  if(unityContext){
    unityContext.on("Mint", async () => {
      const result = await Mint()

    });
  }

   /* ------------------------------ MARKUS ------------------------------ */

  return (
    <div>
      <Head>
        <title>NFT Games</title>
      </Head>
            <h1 className={styles.title}>NFT Games</h1> 
     <main className={styles.main}>  
        <div>
        <img 
      src={image}/>
        Array: {nameArray}
        </div>
       <div className={styles.walletButtons}>  
         <WalletMultiButton />
         <WalletDisconnectButton />
         <button onClick={() => {send(msg)}}> send msg</button>
         <button onClick={handleOnClickFullscreen}> fullscreen </button>
         <button onClick={data}> NFTData </button>
       </div>
       
       <Unity
          unityContext={unityContext!}
          style={{
            height: "10%",
            width: 950,
            border: "2px solid black",
            background: "grey",
      }}/>
    </main>
 </div>
  );

};

export default readNFT;