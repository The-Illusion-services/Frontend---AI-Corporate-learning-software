import React from "react";
import signupBG from "../assets/signup/signupBG.svg";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import Wallets from "../assets/signup/wallets.svg";
import Check from "../assets/signup/check.svg";
import Eye from "../assets/signup/eye.svg";

const Signup = () => {
  return (
    <div className="w-screen flex bg-mobileBackground justify-center lg:justify-normal ">
      <div className="hidden lg:flex w-1/2 h-screen fixed">
        <img src={signupBG} alt="" className="w-full" />
      </div>
      <div className="max-w-xl lg:max-w-none w-screen lg:w-1/2 min-h-screen text-white px-5 py-10 lg:py-20 relative lg:left-1/2 flex justify-center">
        <div className="w-11/12 lg:w-2/3">
          <div className="mb-8 lg:text-center">
            <h1 className="text-3xl lg:text-4xl lg:mb-2 font-semibold">
              Let's get started
            </h1>
            <p className="text-textGray text-sm">
              Have an account? <span className="text-PrimaryPurple">Login</span>{" "}
              {/*the "login" would eventually become a link to the login page*/}
            </p>
          </div>

          <form className="w-full">
            <div className="flex flex-col mb-5">
              <label htmlFor="first name" className="text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Input"
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="last name" className="text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Input"
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="first name" className="text-sm mb-2">
                Field
              </label>
              <select
                name="field"
                id=""
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              >
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="company id" className="text-sm mb-2">
                Company ID
              </label>
              <input
                type="text"
                placeholder="Input"
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email address" className="text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Input"
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  placeholder="Input"
                  className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-inputborderGreen focus:border-2 w-full"
                />
                <img
                  src={Eye}
                  alt=""
                  className="absolute top-[22px] right-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5 w-full">
              <label htmlFor="confirm password" className="text-sm mb-2">
                Confirm Password
              </label>
              <div className="relative w-full h-max">
                <input
                  type="Password"
                  placeholder="Input"
                  className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-inputborderGreen focus:border-2 w-full"
                />
                <img
                  src={Check}
                  alt=""
                  className="absolute top-[22px] right-6 cursor-pointer"
                />
              </div>
            </div>

            <button className="bg-PrimaryPurple py-2 rounded-lg w-full mt-6 font-semibold text-lg outline-none">
              Sign Up
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
            <button className="hidden bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md py-2 flex-grow text-sm font-semibold lg:flex items-center justify-center gap-2 outline-none">
              <img src={Wallets} alt="" />
              Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
