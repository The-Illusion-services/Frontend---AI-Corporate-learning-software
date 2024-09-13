import React from "react";
import MultiBackground from "../assets/multi/multiBG.svg";
import Google from "../assets/signup/google.svg";
import Twitter from "../assets/signup/twitter.svg";

function Verification() {
  return (
    <div className="w-screen flex bg-mobileBackground justify-center lg:justify-normal ">
      <div className="hidden lg:flex w-1/2 h-screen fixed">
        <img src={MultiBackground} alt="" className="w-full" />
      </div>
      <div className="max-w-xl lg:max-w-none w-screen lg:w-1/2 min-h-screen text-white px-5 py-10 lg:py-20 relative lg:left-1/2 flex justify-center">
        <div className="w-11/12 lg:w-2/3 flex flex-col lg:justify-center">
          <div className="mb-8 lg:text-center">
            <h1 className="text-3xl lg:text-4xl mb-2 font-semibold">
              Verification Code
            </h1>
            <p className="text-textGray text-sm">
              You need to enter 4-digit code we send to your Phone number.
            </p>
          </div>

          <div className="w-full">
            <div className="flex gap-2">
              <div className="h-[89px] bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md text-2xl flex-1 ">
                <input
                  type="text"
                  className="h-full w-full bg-transparent outline-none text-center"
                />
              </div>
              <div className="h-[89px] bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md text-2xl flex-1 ">
                <input
                  type="text"
                  className="h-full w-full bg-transparent outline-none text-center"
                />
              </div>
              <div className="h-[89px] bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md text-2xl flex-1 ">
                <input
                  type="text"
                  className="h-full w-full bg-transparent outline-none text-center"
                />
              </div>
              <div className="h-[89px] bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md text-2xl flex-1 ">
                <input
                  type="text"
                  className="h-full w-full bg-transparent outline-none text-center"
                />
              </div>
            </div>
            <button className="bg-PrimaryPurple h-14 rounded-lg w-full mt-6 font-semibold text-xl outline-none">
              Confirm
            </button>
          </div>
          <div className="flex items-center gap-3 mt-10 text-textGray">
            <div className="w-5 bg-[#333333] flex-grow h-[1px]"></div>
            Or
            <div className="w-5 bg-[#333333] flex-grow h-[1px]"></div>
          </div>
          <div className="flex mt-10 gap-3">
            <button className="bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-center gap-2 outline-none">
              <img src={Google} alt="" />
              Google
            </button>
            <button className="bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-center gap-2 outline-none">
              <img src={Twitter} alt="" />
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
