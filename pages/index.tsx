import type { NextPage } from 'next';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, {  } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MintButton from '../components/Mint';

/* This function returns the layout of the hompage, including two buttons to connect and disconnect the wallet*/
const Home: NextPage = () => {   
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
            </main>
        </div>
    );
};

export default Home;