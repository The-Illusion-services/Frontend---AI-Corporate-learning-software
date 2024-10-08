import React, { useReducer, useEffect, useContext } from "react";
import { CreateContext } from "../../Context/Context";
import { Navigate, Outlet } from "react-router";
import { GoHome } from "react-icons/go";
import { BiBook } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const RecruitNavbar = () => {
  const navigate = useNavigate();
  const { logout, userRole } = useContext(CreateContext).auth;
  const location = useLocation();

  const initialState = {
    dashboard: {
      isActive: true,
    },
    course: {
      isActive: false,
    },
    liveSessions: {
      isActive: false,
    },
    jobs: {
      isActive: false,
    },
    credentials: {
      isActive: false,
    },
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "DASHBOARD": {
        return {
          ...state,
          dashboard: { isActive: true },
          course: { isActive: false },
          liveSessions: { isActive: false },
          jobs: { isActive: false },
          credentials: { isActive: false },
        };
      }
      case "COURSE": {
        return {
          ...state,
          dashboard: { isActive: false },
          course: { isActive: true },
          liveSessions: { isActive: false },
          jobs: { isActive: false },
          credentials: { isActive: false },
        };
      }
      case "LIVE_SESSIONS": {
        return {
          ...state,
          dashboard: { isActive: false },
          course: { isActive: false },
          liveSessions: { isActive: true },
          jobs: { isActive: false },
          credentials: { isActive: false },
        };
      }
      case "JOBS": {
        return {
          ...state,
          dashboard: { isActive: false },
          course: { isActive: false },
          liveSessions: { isActive: false },
          jobs: { isActive: true },
          credentials: { isActive: false },
        };
      }
      case "CREDENTIALS": {
        return {
          ...state,
          dashboard: { isActive: false },
          course: { isActive: false },
          liveSessions: { isActive: false },
          jobs: { isActive: false },
          credentials: { isActive: true },
        };
      }
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/app/recruiter" ||
      location.pathname === "/app/recruiter/dashboard"
    ) {
      return dispatch({ type: "DASHBOARD" });
    } else if (location.pathname === "/app/recruiter/course") {
      return dispatch({ type: "COURSE" });
    } else if (location.pathname === "/app/recruiter/live-sessions") {
      return dispatch({ type: "LIVE_SESSIONS" });
    } else if (location.pathname === "/app/recruiter/create-jobs") {
      return dispatch({ type: "JOBS" });
    } else if (location.pathname === "/app/recruiter/credentials") {
      return dispatch({ type: "CREDENTIALS" });
    }
  }, [location.pathname]);
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const handleDispatch = (type) => {
    dispatch({ type });
  };

  if (userRole === "Employer") {
    return (
      <React.Fragment>
        <section className=" bg-[#101010] text-white border-solid mt-10 fixed z-50 lg:h-full shadow-md flex flex-col text-3xl h-20 bottom-0  w-full lg:w-[16%] lg:px-4">
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
          <article className="lg:block hidden  mt-auto py-2">
            <div
              onClick={logout}
              className=" hover:lg:bg-PrimaryPurple cursor-pointer rounded-md h-8 px-2 flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center"
            >
              <GoSignOut className="text-lg" />
              <span className="">Sign Out</span>
            </div>
          </article>
        </section>

        <Outlet />
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default RecruitNavbar;
