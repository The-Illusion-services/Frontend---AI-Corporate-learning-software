import React, { useReducer, useEffect, useContext, useState } from "react";
import { CreateContext } from "../../Context/Context";
import { Outlet } from "react-router";
import { GoHome, GoSignOut } from "react-icons/go";
import { BiBook } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const RecruitNavbar = () => {
  const { logout, userRole } = useContext(CreateContext).auth;
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
    setIsMobileMenuOpen(false); // Close the menu after navigation
  };

  const handleCourseDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  if (userRole === "Employer") {
    return (
      <>
        {/* Hamburger Button */}
        <button
          className="lg:hidden fixed top-3 right-5 z-50 bg-transparent font-bold text-[20px] bg-black mb-20 text-white p-2 rounded"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Section */}
        <section
          className={`fixed top-0 left-0 z-40 h-full bg-[#101010] text-white transition-transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:w-[16%] w-[70%]`}
        >
          <article className="lg:h-[70%] flex flex-col justify-evenly p-4">
            {[
              { type: "DASHBOARD", label: "Dashboard", Icon: GoHome },
              { type: "COURSE", label: "Course", Icon: BiBook },
              { type: "LIVE_SESSIONS", label: "Live Sessions", Icon: LuVideo },
              { type: "JOBS", label: "Jobs", Icon: IoChatbubblesOutline },
              {
                type: "CREDENTIALS",
                label: "Credentials",
                Icon: PiCertificateLight,
              },
            ].map(({ type, label, Icon }) => {
              if (type === "COURSE") {
                return (
                  <>
                    <div
                      // to="/app/recruiter/course"
                      onClick={handleCourseDropdown}
                      className={`w-full lg:h-8 flex items-center lg:rounded-md lg:px-2 justify-center ${
                        state.course.isActive &&
                        "text-PrimaryPurple lg:text-white lg:bg-PrimaryPurple"
                      } `}
                    >
                      <div className="flex flex-row w-full text-sm gap-x-1 lg:flex-row items-center cursor-pointer">
                        <BiBook className="text-lg" />
                        <span className="">Course</span>
                        {!showDropdown ? <FaCaretDown /> : <FaCaretUp />}
                      </div>
                    </div>{" "}
                    <article
                      className={`flex flex-col ${
                        showDropdown ? "h-auto" : "h-0 hidden"
                      }  transition-all text-[12px] w-full  `}
                    >
                      <Link to="/app/recruiter/create-course" className="">
                        <div className="pl-5">Create Course</div>
                      </Link>
                      <Link to="/app/recruiter/manage-courses" className="">
                        <div className="pl-5">Manage Courses</div>
                      </Link>
                    </article>
                  </>
                );
              } else {
                return (
                  <Link
                    key={type}
                    to={`/app/recruiter/${type
                      .toLowerCase()
                      .replace("_", "-")}`}
                    onClick={() => handleDispatch(type)}
                    className={`flex items-center gap-2 py-2 ${
                      state[type.toLowerCase()]?.isActive &&
                      "text-white bg-PrimaryPurple rounded-lg p-3"
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span>{label}</span>
                  </Link>
                );
              }
            })}
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

        {/* Outlet for Routing */}
        <section className="ml-[16%]">
        <Outlet />
        </section>
      </>
    );
  }
  return null;
};

export default RecruitNavbar;
