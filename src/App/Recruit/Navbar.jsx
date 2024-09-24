import React, { useContext } from "react";
import { CreateContext } from "../../Context/Context";
import { Navigate, Outlet } from "react-router";
import { GoHome } from "react-icons/go";
import { BiBook } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";

const RecruitNavbar = () => {
  const { currUser } = useContext(CreateContext).user;

  if (currUser === "recruit") {
    return (
      <React.Fragment>
        <section className=" bg-[#101010] text-white border-solid mt-10 fixed z-50 lg:h-full flex flex-row lg:flex-col justify-evenly items-center lg:items-start shadow-md  text-3xl h-20 bottom-0  w-full lg:w-[16%] lg:px-4">
          <div className="flex flex-col text-sm gap-x-1 lg:flex-row items-center ">
            <GoHome className="text-lg" />
            <span className="">Dashboard</span>
          </div>
          <div className="flex flex-col text-sm gap-x-1 lg:flex-row items-center">
            <BiBook className="text-lg" />
            <span className="">Lessons</span>
          </div>
          <div className="flex flex-col text-sm gap-x-1 lg:flex-row  items-center">
            <LuVideo className="text-lg" />
            <span className="">Live Sessions</span>
          </div>

          <div className="flex flex-col text-sm gap-x-1 lg:flex-row items-center">
            <IoChatbubblesOutline className="text-lg" />
            <span className="">Peer Network</span>
          </div>
          <div className="flex flex-col text-sm gap-x-1 lg:flex-row items-center">
            <PiCertificateLight className="text-lg" />
            <span className="">Credentials</span>
          </div>
        </section>

        <Outlet />
      </React.Fragment>
    );
  } else {
    return <Navigate to="/app/recruiter" />;
  }
};

export default RecruitNavbar;
