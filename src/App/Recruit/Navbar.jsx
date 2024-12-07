import React, { useReducer, useEffect, useContext, useState } from "react";
import { CreateContext } from "../../Context/Context";
import { Navigate, Outlet } from "react-router";
import { GoHome, GoSignOut } from "react-icons/go";
import { BiBook } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const RecruitNavbar = () => {
  const { logout, userRole } = useContext(CreateContext).auth;
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const initialState = {
    dashboard: { isActive: true },
    lessons: { isActive: false },
    payment: { isActive: false },
    peerNetwork: { isActive: false },
    credentials: { isActive: false },
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "DASHBOARD":
        return {
          ...state,
          dashboard: { isActive: true },
          lessons: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      case "LESSONS":
        return {
          ...state,
          dashboard: { isActive: false },
          lessons: { isActive: true },
          payment: { isActive: false },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      case "PAYMENT":
        return {
          ...state,
          dashboard: { isActive: false },
          lessons: { isActive: false },
          payment: { isActive: true },
          peerNetwork: { isActive: false },
          credentials: { isActive: false },
        };
      case "PEER_NETWORK":
        return {
          ...state,
          dashboard: { isActive: false },
          lessons: { isActive: false },
          payment: { isActive: false },
          peerNetwork: { isActive: true },
          credentials: { isActive: false },
        };
      case "CREDENTIALS":
        return {
          ...state,
          dashboard: { isActive: false },
          lessons: { isActive: false },
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
      location.pathname === "/app/recruit" ||
      location.pathname === "/app/recruit/dashboard"
    ) {
      dispatch({ type: "DASHBOARD" });
    } else if (location.pathname === "/app/recruit/lessons") {
      dispatch({ type: "LESSONS" });
    } else if (location.pathname === "/app/recruit/payment") {
      dispatch({ type: "PAYMENT" });
    } else if (location.pathname === "/app/recruit/peer-network") {
      dispatch({ type: "PEER_NETWORK" });
    } else if (location.pathname === "/app/recruit/credentials") {
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
        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden fixed font-bold top-3 right-5 z-50 bg-transparent p-2 rounded text-[20px] text-white"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        <section
          className={`fixed z-40 top-0 left-0 h-full bg-[#101010] text-white transition-transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:w-[16%] w-[50%]`}
        >
          <article className="lg:h-[70%] flex flex-col justify-evenly items-start p-4">
            {[
              { type: "DASHBOARD", label: "Dashboard", Icon: GoHome },
              { type: "LESSONS", label: "Lessons", Icon: BiBook },
              { type: "PAYMENT", label: "Payment", Icon: LuVideo },
              { type: "PEER_NETWORK", label: "Peer Network", Icon: IoChatbubblesOutline },
              { type: "CREDENTIALS", label: "Credentials", Icon: PiCertificateLight },
            ].map(({ type, label, Icon }) => (
              <Link
                key={type}
                to={`/app/recruit/${type.toLowerCase()}`}
                onClick={() => handleDispatch(type)}
                className={`w-full py-2 flex items-center gap-2 ${
                  state[type.toLowerCase()]?.isActive &&
                  "text-white bg-PrimaryPurple rounded-lg p-3"
                }`}
              >
                <Icon className="text-lg" />
                <span>{label}</span>
              </Link>
            ))}
          </article>

          {/* Logout Button */}
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

        {/* Content Section */}
        <Outlet />
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default RecruitNavbar;
