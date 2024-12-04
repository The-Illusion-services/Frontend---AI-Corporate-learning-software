import React, { useReducer, useEffect, useContext } from "react";
import { CreateContext } from "../../Context/Context";
import { Navigate, Outlet } from "react-router";
import { GoHome } from "react-icons/go";
import { BiBook } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const RecruitNavbar = () => {
  const { logout, userRole } = useContext(CreateContext).auth;
  const location = useLocation();

  const initialState = {
    dashboard: {
      isActive: true,
    },
    courses: {
      isActive: false,
    },
    payment: {
      isActive: false,
    },
    peerNetwork: {
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
          courses: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      }
      case "COURSES": {
        return {
          ...state,
          dashboard: { isActive: false },
          courses: { isActive: true },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      }
      case "PAYMENT": {
        return {
          ...state,
          dashboard: { isActive: false },
          courses: { isActive: false },
          payment: { isActive: true },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      }
      case "PEER_NETWORK": {
        return {
          ...state,
          dashboard: { isActive: false },
          courses: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: true },
          credentials: { isActive: false },
        };
      }
      case "CREDENTIALS": {
        return {
          ...state,
          dashboard: { isActive: false },
          courses: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: true },
        };
      }
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/app/recruit" ||
      location.pathname === "/app/recruit/dashboard"
    ) {
      return dispatch({ type: "DASHBOARD" });
    } else if (location.pathname === "/app/recruit/courses") {
      return dispatch({ type: "COURSES" });
    } else if (location.pathname === "/app/recruit/payment") {
      return dispatch({ type: "PAYMENT" });
    } else if (location.pathname === "/app/recruit/peer-network") {
      return dispatch({ type: "PEER_NETWORK" });
    } else if (location.pathname === "/app/recruit/credentials") {
      return dispatch({ type: "CREDENTIALS" });
    }
  }, [location.pathname]);
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const handleDispatch = (type) => {
    dispatch({ type });
  };

  if (userRole === "Employee") {
    return (
      <React.Fragment>
        <section className=" bg-[#101010] text-white border-solid mt-10 fixed z-50 lg:h-full shadow-md flex flex-col text-3xl h-20 bottom-0  w-full lg:w-[16%] lg:px-4">
          <article className="lg:h-[70%] lg:items-start flex flex-row lg:flex-col justify-evenly  items-center h-full  w-full border-b">
            <Link
              to="/app/recruit/dashboard"
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
              to="/app/recruit/courses"
              onClick={() => handleDispatch("COURSES")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.courses.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className="flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center">
                <BiBook className="text-lg" />
                <span className="">Courses</span>
              </div>
            </Link>
            <Link
              to="/app/recruit/payment"
              onClick={() => handleDispatch("PAYMENT")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.payment.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className=" w-full flex flex-col text-sm gap-x-1 lg:flex-row  items-center">
                <LuVideo className="text-lg" />
                <span className="">Payment</span>
              </div>
            </Link>

            <Link
              onClick={() => handleDispatch("PEER_NETWORK")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.peerNetwork.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className="flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center">
                <IoChatbubblesOutline className="text-lg" />
                <span className="">Peer Network</span>
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
