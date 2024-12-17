import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const CreateContext = createContext();

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // State for authentication
  const [authState, setAuthState] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    return storedData || { token: null, userId: null, userRole: null };
  });

  const { token, userId, userRole } = authState;

  // Other states
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currUser, setCurrUser] = useState("recruit");
  const [skeletalLoading, setSkeletalLoading] = useState(false);
  const [courseInView, setCourseInView] = useState([]);
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const [course, setCourse] = useState({
    course_title: "",
    course_description: "",
    price: "",
    modules: [],
  });
  const [previousLocation, setPreviousLocation] = useState();

  useEffect(() => {
    if (
      pathname !== "/auth/login" &&
      pathname !== "/auth/signup" &&
      pathname !== "/"
    ) {
      const updatedPathname = `/app${window.location.href.split("/app")[1]}`;
      localStorage.setItem("lastVisitedPage", updatedPathname);
      setPreviousLocation(updatedPathname);
    }
  }, [pathname]);

  // Login function
  const login = (accessToken, userId, userRole) => {
    const userData = { token: accessToken, userId, userRole };
    setAuthState(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate(userRole === "Employee" ? "/app/learner" : "/app/creator");
  };

  // Logout function
  const logout = () => {
    setAuthState({ token: null, userId: null, userRole: null });
    localStorage.removeItem("userData");
    navigate("/auth/login");
  };

  // Clear course state on navigation
  useEffect(() => {
    if (
      !pathname.includes("/app/creator/course-management/create") &&
      !pathname.includes("/app/creator/course-management/update")
    ) {
      setCourse({
        course_title: "",
        course_description: "",
        price: "",
        modules: [],
      });
    }
  }, [pathname]);

  // Clear cached course checker on navigation
  useEffect(() => {
    if (!pathname.includes("/creator/course-management")) {
      localStorage.removeItem("checkCachedCourse");
    }
  }, [pathname]);

  // Automatically log in from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData?.token) {
      setAuthState(storedData);
    }
  }, []);

  console.log(window.location.href.split("/app")[1]);

  return (
    <CreateContext.Provider
      value={{
        auth: {
          token,
          setToken: (newToken) =>
            setAuthState((prev) => ({ ...prev, token: newToken })),
          setUsername,
          userId,
          username,
          userRole,
          login,
          logout,
          showSignOutModal,
          setShowSignOutModal,
        },
        modal: {
          showModal,
          setShowModal,
          errMsg,
          setErrMsg,
        },
        loader: {
          isLoading,
          setIsLoading,
          skeletalLoading,
          setSkeletalLoading,
        },
        user: { currUser },
        course: {
          courseInView,
          setCourseInView,
          course,
          setCourse,
        },
        previousLocation,
        setPreviousLocation,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default ContextProvider;
