import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import React, { FC, useMemo, useState } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider} from '@solana/wallet-adapter-react';
import { clusterApiUrl } from "@solana/web3.js";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { AppProps } from 'next/app';
import * as anchor from '@project-serum/anchor'

import Unity, { UnityContext } from "react-unity-webgl";
import Home from '.';



require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');




const App: FC<AppProps> = ({ Component, pageProps }) => {

     /* 
    //function declaration -> the setCandyMachine function determines the candyMachine variable
    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
     
    // takes the wallet variable initialised above and creates an anchorWallet i.e. a Wallet usable by Anchor client
    
    // set the host to Devnet
    const rpcHost = 'https://api.devnet.solana.com'
     
    // establish a new connection to the solana devnet
     const connection = new anchor.web3.Connection(rpcHost
      ? rpcHost
      : anchor.web3.clusterApiUrl('devnet')); 
*/
  
  

  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  // custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
      () => [
          new PhantomWalletAdapter(),
          new SlopeWalletAdapter(),
          new SolflareWalletAdapter(),
          new TorusWalletAdapter(),
          new LedgerWalletAdapter(),
          new SolletWalletAdapter({ network }),
          new SolletExtensionWalletAdapter({ network }),
      ],
      [network]
  );
  
  // The WalletProvider & WalletModalProvider components ensure that the moment you reach the website, asked to connect wallet
  // if remove them, then login would only occur via the buttons 
  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                  <Component {...pageProps} />
                  <div>
    
                  </div>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
};

export default App;