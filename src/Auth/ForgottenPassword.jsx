import React from "react";
import MultiBackground from "../assets/multi/multiBG.svg";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";

function ForgottenPassword() {
  return (
    <div className="w-screen flex bg-mobileBackground justify-center lg:justify-normal ">
      <div className="hidden lg:flex w-1/2 h-screen fixed">
        <img src={MultiBackground} alt="" className="w-full" />
      </div>
      <div className="max-w-xl lg:max-w-none w-screen lg:w-1/2 min-h-screen text-white px-5 py-10 lg:py-20 relative lg:left-1/2 flex justify-center">
        <div className="w-11/12 lg:w-2/3 flex flex-col lg:justify-center">
          <div className="mb-8 lg:text-center">
            <h1 className="text-3xl lg:text-4xl mb-2 font-semibold">
              Forgotten Password
            </h1>
            <p className="text-textGray text-sm">
              We need your Email so we can send you the password reset code.
            </p>
          </div>

          <form className="w-full">
            <div className="flex flex-col mb-5">
              <label htmlFor="email address" className="text-lg mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Input"
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md h-16 px-2 placeholder:text-lg placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div>
            <button className="bg-PrimaryPurple h-14 rounded-lg w-full mt-6 font-semibold text-xl outline-none">
              Confirm
            </button>
          </form>
          <div className="flex items-center gap-3 mt-10 text-textGray">
            <div className="w-5 bg-[#333333] flex-grow h-[1px]"></div>
            Or
            <div className="w-5 bg-[#333333] flex-grow h-[1px]"></div>
          </div>
          <div className="flex mt-10 gap-3">
            <button className="bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-center gap-2 outline-none">
              <FcGoogle />
              Google
            </button>
            <button className="bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-center gap-2 outline-none">
              <RiTwitterXLine />
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgottenPassword;
