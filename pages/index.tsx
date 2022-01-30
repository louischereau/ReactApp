import type { NextPage } from 'next';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, {  } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

/* This function returns the layout of the hompage, including two buttons to connect and disconnect the wallet*/
const Home: NextPage = () => {   
    return (
        <div className={styles.container}>
           <Head>
             <title>NFT Games</title>
           </Head>
            <main className={styles.main}>  
              <div className={styles.walletButtons}>    
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
            </main>
        </div>
    );
};

export default Home;