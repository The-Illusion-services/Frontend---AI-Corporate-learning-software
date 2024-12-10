import React, { useReducer, useEffect, useContext, useState } from "react";
import { CreateContext } from "../../Context/Context";
import { Outlet } from "react-router";
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
    const resetState = {
      dashboard: { isActive: false },
      lessons: { isActive: false },
      payment: { isActive: false },
      peerNetwork: { isActive: false },
      credentials: { isActive: false },
    };

    switch (action.type) {
      case "DASHBOARD":
        return { ...resetState, dashboard: { isActive: true } };
      case "LESSONS":
        return { ...resetState, lessons: { isActive: true } };
      case "PAYMENT":
        return { ...resetState, payment: { isActive: true } };
      case "PEER_NETWORK":
        return { ...resetState, peerNetwork: { isActive: true } };
      case "CREDENTIALS":
        return { ...resetState, credentials: { isActive: true } };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);

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

  const handleDispatch = (type) => {
    dispatch({ type });
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  if (userRole === "Employee") {
    return (
      <React.Fragment>
        <button
  className="lg:hidden fixed top-4 right-4 z-50 bg-[#101010] text-white p-2 rounded"
  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
>
  {isMobileMenuOpen ? "✖" : "☰"}
</button>

<section
  className={`fixed z-40 top-0 left-0 h-full bg-[#101010] text-white transition-transform ${
    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 lg:w-[16%] w-[70%]`}
>
  <article className="lg:h-[70%] flex flex-col justify-evenly items-start p-4">
    {[
      { type: "dashboard", label: "Dashboard", Icon: GoHome },
      { type: "lessons", label: "Lessons", Icon: BiBook },
      { type: "payment", label: "Payment", Icon: LuVideo },
      { type: "peerNetwork", label: "Peer Network", Icon: IoChatbubblesOutline },
      { type: "credentials", label: "Credentials", Icon: PiCertificateLight },
    ].map(({ type, label, Icon }) => (
      <Link
        key={type}
        to={`/app/recruit/${type}`}
        onClick={() => handleDispatch(type.toUpperCase())}
        className={`w-full py-2 flex items-center gap-2 ${
          state[type]?.isActive && "text-PrimaryPurple bg-PrimaryPurple"
        }`}
      >
        <Icon className="text-lg" />
        <span>{label}</span>
      </Link>
    ))}
  </article>

  <article className="mt-auto p-4">
    <button
      onClick={logout}
      className="w-full flex items-center gap-2 py-2 text-white rounded"
    >
      <GoSignOut />
      <span>Sign Out</span>
    </button>
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
