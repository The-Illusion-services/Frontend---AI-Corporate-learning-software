import React, { useEffect, useState } from "react";
import Solflare from "@solflare-wallet/sdk";
import { Buffer } from "buffer";
import {
  Connection,
  PublicKey,
  SystemProgram,
  sendAndConfirmTransaction,
  Transaction,
} from "@solana/web3.js";

import Solana from "../assets/Payment/Solana.png";

if (!window.Buffer) {
  window.Buffer = Buffer;
}
const PaymentCheckout = () => {
  const [walletAdd, setWalletAdd] = useState("");

  const wallet = new Solflare();

  wallet.on("connect", () => {
    console.log("connected", wallet.publicKey.toString());
    setWalletAdd(() => {
      const address = wallet.publicKey.toString();
      const prefix = address.toString().slice(0, 6);
      const suffix = address.slice(-4);
      const formattedAddress = `${prefix}...${suffix}`;
      if (formattedAddress) {
        return formattedAddress;
      } else {
        return "connect wallet";
      }
    });
  });
  wallet.on("disconnect", () => {
    console.log("disconnected");
  });

  const connectWallet = async () => {
    await wallet.connect();
  };

  const connection = new Connection("https://api.devnet.solana.com");

  // Define recipient and amount to send
  const recipientPublicKey = new PublicKey(
    "713u5qyj7cevD1fotof9TjXtv4yfHHri4Bo9NXZqdopU"
  );
  const lamportsToSend = 1000000; // 1 SOL = 1,000,000,000 lamports

  // Function to send transaction
  const sendTransaction = async () => {
    try {
      // Make sure wallet is connected
      if (!wallet || !wallet.publicKey) {
        console.error("Wallet is not connected");
        return;
      }

      // Get the latest blockhash
      const { blockhash } = await connection.getLatestBlockhash();

      // Create a new transaction
      const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: wallet.publicKey,
      }).add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: recipientPublicKey,
          lamports: lamportsToSend,
        })
      );

      // Request signature from wallet
      const signedTransaction = await wallet.signTransaction(transaction);

      // Send and confirm the transaction in one step
      const signature = await sendAndConfirmTransaction(
        connection,
        signedTransaction,
        { commitment: "confirmed" } // Optional: specify the commitment level
      );

      console.log("Transaction successful with signature:", signature);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const pay = async () => {
    await sendTransaction();
  };

  // Call the sendTransaction function after wallet connects

  return (
    <main className="h-screen ml-2  py-4">
      <div className="flex px-1">
        <h2 className="text-white">Course Payment</h2>
        <button
          onClick={connectWallet}
          className="ml-auto text-white bg-PrimaryPurple px-4 rounded-sm cursor-pointer"
        >
          {wallet ? walletAdd : "Connect wallet"}
        </button>
      </div>

      <div className="w-[40%] mt-4  flex flex-row justify-between text-white text-xs px-1 ">
        <span>From</span>
        <span>Balance</span>
      </div>
      <div className="flex flex-row items-center w-[40%] justify-between px-4 rounded-md bg-inputBackground">
        <img src={Solana} className="h-6 w-14 " />
        <input className="h-12 bg-inputBackground border-inputBorderColor  rounded-md focus:outline-none text-end text-white" />
      </div>

      <div className=" mt-4 w-[40%] flex flex-row justify-between text-white text-xs px-1 ">
        <span>Confirm wallet</span>
      </div>
      <div className="flex items-center w-[40%]  px-4 rounded-md bg-inputBackground">
        <input
          className=" h-12 w-full bg-inputBackground border-inputBorderColor  rounded-md focus:outline-none  text-white "
          placeholder="wallet address"
        />
      </div>

      <button
        className="h-12 text-center  w-[40%] mt-4 bg-PrimaryPurple text-white rounded-sm "
        onClick={pay}
      >
        {" "}
        Pay now
      </button>
    </main>
  );
};

export default PaymentCheckout;
