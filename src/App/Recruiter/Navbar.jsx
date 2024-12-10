import React, { useReducer, useEffect, useContext, useState } from "react";
import { CreateContext } from "../../Context/Context";
import { Outlet } from "react-router";
import { GoHome, GoSignOut } from "react-icons/go";
import { BiBook } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const RecruitNavbar = () => {
  const { logout, userRole } = useContext(CreateContext).auth;
  const location = useLocation();

  const initialState = {
    dashboard: { isActive: true },
    course: { isActive: false },
    liveSessions: { isActive: false },
    jobs: { isActive: false },
    credentials: { isActive: false },
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "DASHBOARD":
        return {
          dashboard: { isActive: true },
          course: { isActive: false },
          liveSessions: { isActive: false },
          jobs: { isActive: false },
          credentials: { isActive: false },
        };
      case "COURSE":
        return {
          dashboard: { isActive: false },
          course: { isActive: true },
          liveSessions: { isActive: false },
          jobs: { isActive: false },
          credentials: { isActive: false },
        };
      case "LIVE_SESSIONS":
        return {
          dashboard: { isActive: false },
          course: { isActive: false },
          liveSessions: { isActive: true },
          jobs: { isActive: false },
          credentials: { isActive: false },
        };
      case "JOBS":
        return {
          dashboard: { isActive: false },
          course: { isActive: false },
          liveSessions: { isActive: false },
          jobs: { isActive: true },
          credentials: { isActive: false },
        };
      case "CREDENTIALS":
        return {
          dashboard: { isActive: false },
          course: { isActive: false },
          liveSessions: { isActive: false },
          jobs: { isActive: false },
          credentials: { isActive: true },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/app/recruiter" || path === "/app/recruiter/dashboard") {
      dispatch({ type: "DASHBOARD" });
    } else if (path === "/app/recruiter/course") {
      dispatch({ type: "COURSE" });
    } else if (path === "/app/recruiter/live-sessions") {
      dispatch({ type: "LIVE_SESSIONS" });
    } else if (path === "/app/recruiter/create-jobs") {
      dispatch({ type: "JOBS" });
    } else if (path === "/app/recruiter/credentials") {
      dispatch({ type: "CREDENTIALS" });
    }
  }, [location.pathname]);

  const handleDispatch = (type) => {
    dispatch({ type });
  };

  if (userRole === "Employer") {
    return (
      <React.Fragment>
        <section className=" bg-[#101010] text-white border-solid lg:py-0 mt-10 fixed z-50 lg:h-full shadow-md flex flex-col text-3xl h-20 bottom-0  w-full lg:w-[16%] lg:px-4">
          <article className="lg:h-[70%] lg:items-start flex flex-row lg:flex-col justify-evenly  items-center h-full  w-full border-b">
            <Link
              to="/app/recruiter/dashboard"
              onClick={() => handleDispatch("DASHBOARD")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.dashboard.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className="flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center ">
                <GoHome className="text-lg " />
                <span className="">Dashboard</span>
              </div>
            </Link>
            <Link
              to="/app/recruiter/course"
              onClick={() => handleDispatch("COURSE")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.course.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className="flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center">
                <BiBook className="text-lg" />
                <span className="">Course</span>
              </div>
            </Link>
            <Link
              to="/app/recruiter/liveSessions"
              onClick={() => handleDispatch("LIVE_SESSIONS")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.liveSessions.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className=" w-full flex flex-col text-sm gap-x-1 lg:flex-row  items-center">
                <LuVideo className="text-lg" />
                <span className="">Live Sessions</span>
              </div>
            </Link>

            <Link
              to="/app/recruiter/create-jobs"
              onClick={() => handleDispatch("JOBS")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.jobs.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className="flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center">
                <IoChatbubblesOutline className="text-lg" />
                <span className="">Jobs</span>
              </div>
            </Link>

            <Link
              onClick={() => handleDispatch("CREDENTIALS")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.credentials.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className="flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center">
                <PiCertificateLight className="text-lg" />
                <span className="">Credentials</span>
              </div>
            </Link>
          </article>
          <article className="mt-auto p-4">
            <button
              onClick={logout}
              className="hover:lg:bg-PrimaryPurple cursor-pointer rounded-md h-8 px-2 flex w-full text-sm gap-x-1 lg:flex-row items-center"
            >
              <GoSignOut />
              <span>Sign Out</span>
            </button>
          </article>
        </section>

        <Outlet />
      </React.Fragment>
    );
  }
  return null;
};

export default RecruitNavbar;
