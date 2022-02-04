import { useMemo, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
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
// import React, { Component, useMemo, useState } from "react";
// import { renderToHTML } from "next/dist/server/render";

const readNFT = () => {
  return (
    <div>
      <h2>Reading NFTs from wallet</h2>
    </div>
  );
};

export default readNFT;
