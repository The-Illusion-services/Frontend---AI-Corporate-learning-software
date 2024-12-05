import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
export const CreateContext = createContext();

const ContextProvider = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userRole, setUserRole] = useState("");
  // const [tokenExpDate, setTokenExpDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currUser, setCurrUser] = useState("recruit");
  const [skeletalLoading, setSkeletalLoading] = useState(false);
  const [courseInView, setCourseInView] = useState([])

  const location = useLocation()
  const pathname = location.pathname

  const login = (accessToken, userId, userRole) => {
    setToken(accessToken);
    setUserId(userId);
    setUserRole(userRole);
    localStorage.setItem(
      "userData",
      JSON.stringify({ accessToken, userId, userRole })
    );
    userRole == "Employee"
      ? navigate("/app/recruit")
      : navigate("/app/recruiter");
  };

  const getCourses = () => {};

  const logout = () => {
    setToken(null);
    setUserId(null);
    setUserRole(null);
    localStorage.removeItem("userData");
    navigate("/auth/login");
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedData &&
      storedData.accessToken
      // storedData.tokenExpDate > new Date().getTime()
    ) {
      login(storedData.accessToken, storedData.userId, storedData.userRole);
    }
  }, [token]);

  useEffect(()=>{
    if (!pathname.includes("/recruiter/create-course")){
      localStorage.removeItem("checkCachedCourse")
    }
  })

  // const getAllCourses = async()=>{
  //   try{
  //     const response = await fetch("https://illusion-6ga5.onrender.com/api/courses/",{
  //       headers: {
  //         authorization: `Bearer ${token}`
  //       }

  //     })
  //     if(response.ok){
  //       const responseData = await response.json()
  //         console.log(responseData);
  //         return responseData
  //     }else{
  //       throw error
  //     }

  //   }catch(err){
  //     return err.message
  //   }


  // }


  // const {data: courses, isLoading: loading, error} = useQuery({
  //   queryKey: ["all-courses"],
  //   queryFn: getAllCourses
  // })

  const [course, setCourse] = useState({
    course_title: "",
    course_description: "",
    price: "",
  });
  return (
    <CreateContext.Provider
      value={{
        auth: {
          token,
          setToken,
          setUsername,
          userId,
          username,
          userRole,
          login,
          logout,
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

        user: {
          currUser,
        },

        course: {
          courseInView,
          setCourseInView,
          course,
          setCourse
        }
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );
};

export default ContextProvider;
