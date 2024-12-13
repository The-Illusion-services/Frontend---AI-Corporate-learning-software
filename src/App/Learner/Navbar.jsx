import React, { useReducer, useEffect, useContext, useState } from "react";
import { CreateContext } from "../../Context/Context";
import { Navigate, Outlet } from "react-router";
import { GoHome, GoSignOut } from "react-icons/go";
import { BiBook } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"

const LearnerNavbar = () => {
  const { logout, userRole, setShowSignOutModal, showSignOutModal } = useContext(CreateContext).auth;
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleShowSignOutModal = ()=>{
    setShowSignOutModal(!showSignOutModal)
  }

  const initialState = {
    dashboard: {
      isActive: true,
    },
    explore_courses: {
      isActive: false,
    },
    myCourses: {
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
      case "DASHBOARD":
        return {
          ...state,
          dashboard: { isActive: true },
          explore_courses: { isActive: false },
          myCourses: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      case "EXPLORE_COURSES":
        return {
          ...state,
          dashboard: { isActive: false },
          explore_courses: { isActive: true },
          myCourses: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      case "COURSES": {
        return {
          ...state,
          dashboard: { isActive: false },
          explore_courses: { isActive: true },
          myCourses: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      }
      case "MYCOURSES": {
        return {
          ...state,
          dashboard: { isActive: false },
          explore_courses: { isActive: false },
          myCourses: { isActive: true },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      }
      case "PAYMENT":
        return {
          ...state,
          dashboard: { isActive: false },
          courses: { isActive: false },
          myCourses: { isActive: false },
          payment: { isActive: true },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      case "PEER_NETWORK":
        return {
          ...state,
          dashboard: { isActive: false },
          explore_courses: { isActive: false },
          myCourses: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: true },
          credentials: { isActive: false },
        };
      case "CREDENTIALS":
        return {
          ...state,
          dashboard: { isActive: false },
          courses: { isActive: false },
          myCourses: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: true },
        };
      default:
        return state;
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/app/learner" ||
      location.pathname === "/app/learner/dashboard"
    ) {
      return dispatch({ type: "DASHBOARD" });
    } else if (location.pathname === "/app/learner/explore-courses") {
      return dispatch({ type: "EXPLORE_COURSES" });
    } else if (location.pathname === "/app/learner/mycourses") {
      return dispatch({ type: "MYCOURSES" });
    } else if (location.pathname === "/app/learner/payment") {
      dispatch({ type: "PAYMENT" });
    } else if (location.pathname === "/app/learner/peer-network") {
      dispatch({ type: "PEER_NETWORK" });
    } else if (location.pathname === "/app/learner/credentials") {
      dispatch({ type: "CREDENTIALS" });
    }
  }, [location.pathname]);

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const handleDispatch = (type) => {
    dispatch({ type });
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  if (userRole === "Employee") {
    return (
      <React.Fragment>
        <section className=" bg-[#101010] text-white border-solid mt-10 fixed z-40 lg:h-full shadow-md flex flex-col text-3xl h-20 bottom-0  w-full lg:w-[16%] lg:px-4 py-4">
        <div className=" flex items-center px-4">
          <img src={logo} className="h-10 w-24"/>
          </div>
          <article className="lg:h-[70%] lg:items-start flex flex-row lg:flex-col justify-evenly  items-center h-full  w-full border-b">
            <Link
              to="/app/learner/dashboard"
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
              to="/app/learner/explore-courses"
              onClick={() => handleDispatch("COURSES")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.explore_courses.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className="flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center">
                <BiBook className="text-lg" />
                <span className="">Explore Courses</span>
              </div>
            </Link>
            <Link
              to="/app/learner/my-courses"
              onClick={() => handleDispatch("MYCOURSES")}
              className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                state.myCourses.isActive &&
                "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
              } `}
            >
              <div className="flex flex-col w-full text-sm gap-x-1 lg:flex-row items-center">
                <BiBook className="text-lg" />
                <span className="">My Courses</span>
              </div>
            </Link>
            <Link
              to="#"
              // onClick={() => handleDispatch("PAYMENT")}
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
              // onClick={() => handleDispatch("PEER_NETWORK")}
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
              // onClick={() => handleDispatch("CREDENTIALS")}
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

          {/* Logout Button */}
          <article className="mt-auto p-4">
            <button
              onClick={handleShowSignOutModal}
              className="hover:lg:bg-PrimaryPurple cursor-pointer rounded-md h-8 px-2 flex w-full text-sm gap-x-1 lg:flex-row items-center"
            >
              <GoSignOut />
              <span>Sign Out</span>
            </button>
          </article>
        </section>

        {/* Content Section */}
        <section className="lg:ml-[16%]">
        <Outlet />
        </section>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default LearnerNavbar;
