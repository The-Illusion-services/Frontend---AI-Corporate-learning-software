import React from "react";
import MultiBackground from "../assets/multi/multiBG.svg";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import Check from "../assets/signup/check.svg";
import { BiHide } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";

function CreatePassword() {
  return (
    <div className="w-screen flex bg-mobileBackground justify-center lg:justify-normal ">
      <div className="hidden lg:flex w-1/2 h-screen fixed">
        <img src={MultiBackground} alt="" className="w-full" />
      </div>
      <div className="max-w-xl lg:max-w-none w-screen lg:w-1/2 min-h-screen text-white px-5 py-10 lg:py-20 relative lg:left-1/2 flex justify-center">
        <div className="w-11/12 lg:w-2/3 flex flex-col lg:justify-center">
          <div className="mb-8 lg:text-center">
            <h1 className="text-3xl lg:text-4xl mb-2 font-semibold">
              Create New Passwor d
            </h1>
            <p className="text-textGray text-sm">
              Create a new password, please don’t forget this one too.
            </p>
          </div>

          <form className="w-full">
            <div className="flex flex-col mb-5">
              <label htmlFor="password" className="text-lg mb-2">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  placeholder="Input"
                  className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md h-16 px-2 placeholder:text-lg placeholder:text-gray-300 outline-none focus:border-inputborderGreen focus:border-2 w-full"
                />
                {/* <img
                  src={Eye}
                  alt=""
                  className="absolute top-[22px] right-6 cursor-pointer"
                /> */}
                <BiHide className="absolute top-[22px] right-6 cursor-pointer text-textGray" />
              </div>
            </div>
            <div className="flex flex-col mb-5 w-full">
              <label htmlFor="confirm password" className="text-lg mb-2">
                Confirm Password
              </label>
              <div className="relative w-full h-max">
                <input
                  type="Password"
                  placeholder="Input"
                  className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md h-16 px-2 placeholder:text-lg placeholder:text-gray-300 outline-none focus:border-inputborderGreen focus:border-2 w-full"
                />
                {/* <img
                  src={Check}
                  alt=""
                  className="absolute top-[22px] right-6 cursor-pointer"
                /> */}
                <FaRegCheckCircle className="absolute top-[22px] right-6 cursor-pointer text-inputborderGreen" />
              </div>
            </div>
            <button className="bg-PrimaryPurple h-14 rounded-lg w-full mt-6 font-semibold text-xl outline-none">
              Submit
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

export default CreatePassword;
