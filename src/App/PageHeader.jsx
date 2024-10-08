import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import Profile from "../assets/lessons/profile.svg";

const PageHeader = () => {
  return (
    <div>
      <div className="flex justify-between bg-mobileBackground text-white h-auto lg:ml-[16%] p-3">
        <div className=" text-white flex items-center justify-center text-1xl border-inputBorderColor lg:ml-[3%]">
          <h2 className="hidden xl:block p-3">Course Detail</h2>
          <img
            src={Profile}
            alt="login illustration"
            className="object-contain w-10 h-10 rounded-full xl:hidden"
          />
        </div>

        <div className="hidden relative xl:block">
          <div className="absolute bottom-4 left-3 flex text-2xl text-textGray">
            <CiSearch />
          </div>

          <input
            type="search"
            className="border-inputborderGreen text-textGray rounded-lg px-3 py-4 mt-1 text-sm w-[700px] bg-inputBackground focus:outline-PrimaryPurple focus:ring focus:border-PrimaryPurple"
            placeholder="       ...Search"
          />
        </div>

        <div className="flex items-center justify-between mr-[3%]">
          <div className=" rounded-full text-PrimaryPurple w-10 h-10 flex items-center justify-center text-3xl bg-[#1b1c1e] border-inputBorderColor">
            <FaBell />
          </div>

          <div className=" rounded-full text-PrimaryPurple w-10 h-10 flex items-center justify-center text-3xl bg-[#1b1c1e] border-inputBorderColor xl:hidden">
            <IoPersonCircleSharp />
          </div>
          <img
            src={Profile}
            alt="login illustration"
            className="object-contain w-10 h-10 rounded-full hidden xl:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
