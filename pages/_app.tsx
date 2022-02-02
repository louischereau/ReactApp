import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import React, { FC, useMemo } from 'react';
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
import Home from '../components/Mint';
import Unity, { UnityContext } from "react-unity-webgl";
import Mint from '../components/Mint';

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');




const App: FC<AppProps> = ({ Component, pageProps }) => {

    const unityContext = new UnityContext({
      loaderUrl: "./unity_build/dummy.loader.js",
      dataUrl: "./unity_build/dummy.data",
      frameworkUrl: "./unity_build/dummy.framework.js",
      codeUrl: "./untiy_build/dummy.wasm",
    });
  
    unityContext.on("Mint", async () => {Mint()});
  

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
                  <Home/>
                  <Unity unityContext={unityContext}/>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
};

export default App;