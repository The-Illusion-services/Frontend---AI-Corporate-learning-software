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
import SolanaIcon from "../assets/Payment/SolanaIcon.svg";
import Arrow from "../assets/Payment/arrow.svg";
import Illusion from "../assets/Payment/illusiona.svg";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import Line from "../assets/Payment/line.svg";
import Profile from "../assets/lessons/profile.svg";


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

   const [activeTab, setActiveTab] = useState("payment");
    // Course Details
    const [activeSection, setActiveSection] = useState(null);
    // Function to toggle accordion sections in the course details
    const toggleSection = (index) => {
        setActiveSection(index === activeSection ? null : index);
    };

  // Call the sendTransaction function after wallet connects

  return (
    <section className="lg:ml-[16%] bg-mobileBackground">
        <div className="flex justify-between bg-black text-white p-3">
            <div className=" text-white flex items-center justify-center text-1xl border-inputBorderColor lg:ml-[3%]">
              <h2 className="hidden lg:block p-1">Payment</h2>
              <img
                src={Profile}
                alt="login illustration"
                className="object-contain w-10 h-10 rounded-full lg:hidden"
              />
            </div>

            <div className="hidden relative lg:block">
              <div className="absolute bottom-4 left-3 flex text-2xl text-textGray">
                <CiSearch />
              </div>

              <input
                type="search"
                className="border-inputborderGreen text-textGray rounded-lg px-3 py-4 mt-1 text-sm w-[600px] bg-inputBackground focus:outline-PrimaryPurple focus:ring focus:border-PrimaryPurple"
                placeholder="       ...Search"
              />
            </div>

            <div className="flex items-center justify-between mr-[10%]">
              <div className=" rounded-full text-PrimaryPurple w-10 h-10 flex items-center justify-center text-3xl bg-[#1b1c1e] border-inputBorderColor">
                <FaBell />
              </div>

              <div className=" rounded-full text-PrimaryPurple w-10 h-10 flex items-center justify-center text-3xl bg-[#1b1c1e] border-inputBorderColor lg:hidden">
                <IoPersonCircleSharp />
              </div>
              <img
                src={Profile}
                alt="login illustration"
                className="object-contain w-10 h-10 rounded-full hidden lg:block"
              />
            </div>
          </div>

        <div className="bg-mobileBackground text-white min-h-screen py-10 lg:flex">

          <main className="mx-5 py-4 lg:w-[60%]">
            <div className="bg-[#1B1C1E] rounded-lg p-2">
                  {/* Tab Headers */}
                  <div className="xl:w-[60%] ">
                    <ul className="flex border-b border-inputBorderColor items-center justify-around bg-black rounded-lg py-1 px-4">
                  <li
                      className={`cursor-pointer pb-3 ${
                        activeTab === "profile"
                          ? "bg-inputBackground rounded-lg text-white font-semibold p-1"
                          : "text-textGray font-semibold "
                      }`}
                      onClick={() => setActiveTab("profile")}
                    >
                      Profile
                    </li>
                    <li
                      className={`cursor-pointer pb-3 ${
                        activeTab === "notification"
                          ? "bg-inputBackground rounded-lg text-white font-semibold p-1"
                          : "text-textGray"
                      }`}
                      onClick={() => setActiveTab("notification")}
                    >
                      Notification
                    </li>
                    <li
                      className={`cursor-pointer pb-3 ${
                        activeTab === "payment"
                          ? "bg-inputBackground rounded-lg text-white font-semibold p-1"
                          : "text-textGray"
                      }`}
                      onClick={() => setActiveTab("payment")}
                    >
                      Payment
                    </li>
                    <li
                      className={`cursor-pointer pb-3 ${
                        activeTab === "privacy"
                          ? "bg-inputBackground rounded-lg text-white font-semibold px-3 py-1"
                          : "text-textGray"
                      }`}
                      onClick={() => setActiveTab("privacy")}
                    >
                      Privacy
                    </li>
                    </ul>
                  </div>

                  {/* Tab Content */}
                  <div className="mt-4 mb-4">
                    {/* profile Tab */}
                    {activeTab === "profile" && (
                      <div>
                        
                      </div>
                    )}

                    {/* notification Tab */}
                    {activeTab === "notification" && (
                      <div>

                      </div>
                    )}

                    {/* Payment Tab */}
                    {activeTab === "payment" && (
                    <div className="w-full">
                      <div className="flex px-1">
                        <h2 className="text-white">Course Payment</h2>
                        <button
                          onClick={connectWallet}
                          className="ml-auto text-white bg-PrimaryPurple px-4 rounded-sm cursor-pointer"
                        >
                          {wallet ? walletAdd : "Connect wallet"}
                        </button>
                      </div>
            
                    <div className="w-full mt-4  flex flex-row justify-start gap-5 text-white text-xs px-1 mb-5">
                      <span>From</span>
                      <span>Balance</span>
                    </div>
                    
                    <div className="items-center w-full justify-between px-4 rounded-md bg-inputBackground border-inputBorderColor border py-3 mb-10">
                      <div className="flex items-center justify-between ">
                        <img src={Solana} className="h-6 w-14 " />
                        <div className="right-8">
                          <h1 className="text-[20px]">2</h1>
                          <p className="text-[10px]">$300</p>
                        </div>
                      </div>
                      {/* <input className=" bg-inputBackground border-inputBorderColor border  rounded-md focus:outline-none text-end text-white" /> */}
                    </div>
            
                    <div className="w-[100%] h-[50%]mb-10">
                      <img src={Line} alt="" className="w-[100%] h-[50%]" />
                    </div>
                    
                    <div className=" mt-10 w-full flex flex-row justify-between text-white text-xs px-1 mb-5">
                      <span>Confirm wallet</span>
                    </div>
                    <div className="flex items-center w-full  px-4 rounded-md bg-inputBackground border border-inputBorderColor mb-3">
                      <input
                        className=" py-6 w-full bg-inputBackground  border-inputBorderColor rounded-md focus:outline-none  text-white "
                        placeholder="wallet address"
                      />
                    </div>
            
                    <button
                      className="h-12 text-center  w-full mt-4 bg-PrimaryPurple text-white rounded-sm "
                      onClick={pay}
                    >
                      {" "}
                      Pay now
                    </button>
                    </div>
                    )}

                    {/* privacys Tab */}
                    {activeTab === "privacy" && (
                      <div>

                      </div>
                    )}
                  </div>
            </div>
          </main>

          <aside className="mx-5 lg:w-[40%]">
            <div className=" bg-[#1B1C1E] rounded-lg p-2">
              <h1 className="m-3 font-semibold">Transaction History</h1>
              <div className="bg-gradient-to-r from-[#FFFFFF] via-[#007AFF] to-[#8E73EF] rounded-lg m-3 mb-7">
                <div className="p-0.5">
                <input 
                  type="search"
                  placeholder="Hinted search text"
                  name="" 
                  id="" 
                  className="bg-inputBackground px-3 py-4 rounded-lg w-full"
                  />
                </div>
              </div>

              <div className="w-[100%] h-auto px-3 my-10">
                <img src={Line} alt="" />
              </div>
              
              <div className="flex items-center justify-between bg-inputBackground p-3 px-5 m-3 rounded-md">
                <div className="font-semibold flex flex-col items-start">
                  <p className="w-[79px] mb-2 text-[12px]">300.98, 11:00</p>
                  <p className="flex items-center font-semibold text-[15px] w-[107.95px]"><img src={SolanaIcon} alt="" />-2.02 SOL</p>
                  <p className="text-[12px]">Solana Network</p>
                </div>
                {/* arrow */}
                <div className="">
                  <img src={Arrow} alt="Arroww" />
                </div>

                <div className="font-semibold flex flex-col items-end justify-end">
                  <p className="text-[#489556] text-[12px] mb-2 font-bold">Completed</p>
                  <img src={Illusion} alt="Illusion Academy" className="w-[81px] h-[33px]" />
                  <p className="text-[12px]">via PortalHQ</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-inputBackground p-3 px-5 m-3 rounded-md">
                <div className="font-semibold flex flex-col items-start">
                  <p className="w-[79px] mb-2 text-[12px]">300.98, 11:00</p>
                  <p className="flex items-center font-semibold text-[15px] w-[107.95px]"><img src={SolanaIcon} alt="" />-2.02 SOL</p>
                  <p className="text-[12px]">Solana Network</p>
                </div>
                {/* arrow */}
                <div className="">
                  <img src={Arrow} alt="Arroww" />
                </div>

                <div className="font-semibold flex flex-col items-end justify-end">
                  <p className="text-[#489556] text-[12px] mb-2 font-bold">Completed</p>
                  <img src={Illusion} alt="Illusion Academy" className="w-[81px] h-[33px]" />
                  <p className="text-[12px]">via PortalHQ</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-inputBackground p-3 px-5 m-3 rounded-md">
                <div className="font-semibold flex flex-col items-start">
                  <p className="w-[79px] mb-2 text-[12px]">300.98, 11:00</p>
                  <p className="flex items-center font-semibold text-[15px] w-[107.95px]"><img src={SolanaIcon} alt="" />-2.02 SOL</p>
                  <p className="text-[12px]">Solana Network</p>
                </div>
                {/* arrow */}
                <div className="">
                  <img src={Arrow} alt="Arroww" />
                </div>

                <div className="font-semibold flex flex-col items-end justify-end">
                  <p className="text-[#489556] text-[12px] mb-2 font-bold">Completed</p>
                  <img src={Illusion} alt="Illusion Academy" className="w-[81px] h-[33px]" />
                  <p className="text-[12px]">via PortalHQ</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
    </section>
  );
};

export default PaymentCheckout;
