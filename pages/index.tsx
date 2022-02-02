import type { NextPage } from 'next';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MintButton from '../components/Mint';
import Unity, { UnityContext } from "react-unity-webgl";

import Mint from '../components/Mint';

/* This function returns the layout of the hompage, including two buttons to connect and disconnect the wallet*/
const Home: NextPage = () => {   
    
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
  
  unityContext.on("Mint", () => {console.log("TEST")});
  
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
       <div className={styles.buttons}>
         <MintButton/>
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