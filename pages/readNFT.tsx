import { useMemo, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { fetchWalletForNFTs, getTransactionData } from "../components/wallet";
// import {
//   WalletDisconnectButton,
//   WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";
// import styles from "../styles/Home.module.css";
import {
  AccountInfo,
  Connection,
  ParsedConfirmedTransaction,
  PublicKey,
} from "@solana/web3.js";
import { resourceLimits } from "worker_threads";
// import React, { Component, useMemo, useState } from "react";
// import { renderToHTML } from "next/dist/server/render";

const readNFT = () => {
  const wallet = useWallet();
  var result;

  //   const result;
  if (wallet.connected) {
    const address = wallet.publicKey;
    console.log(`Reading from wallet: ${address}`);

    const readResults = async () => {
      result = await fetchWalletForNFTs(String(address));
      console.log(
        `Requested Julia's wallet address ${address}${JSON.stringify(result)}`
      );
      const myresult = JSON.stringify(result);
      //   console.log(myresult.key);
      return result;
    };

    result = readResults();
    console.log(JSON.stringify(result));
    console.log(result.key);
    // var p = Promise.resolve(result);
    return (
      <div>
        <h2>Reading NFTs from wallet</h2>
        {/* {myresult} */}
        hello
      </div>
    );
  } else {
    console.log(`No wallet connected.`);
    return (
      <div>
        <h2>Reading NFTs from wallet</h2>
      </div>
    );
  }
};

export default readNFT;
