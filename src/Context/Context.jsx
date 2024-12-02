import React, { createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
export const CreateContext = createContext();

const ContextProvider = (props) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userRole, setUserRole] = useState("")
  // const [tokenExpDate, setTokenExpDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currUser, setCurrUser] = useState("recruit");
  const [skeletalLoading, setSkeletalLoading] = useState(false);


  const login=(accessToken, userId, userRole)=>{
    setToken(accessToken)
    setUserId(userId)
    setUserRole(userRole)
    localStorage.setItem("userData", JSON.stringify({accessToken, userId, userRole}))
    userRole == "Employee" ? navigate("/app/recruit") : navigate("/app/recruiter")
    

  }

  const getCourses = ()=>{
    
  }

  const logout = ()=>{
    setToken(null)
    setUserId(null)
    setUserRole(null)
    localStorage.removeItem("userData")
    navigate("/auth/login")
  }
 
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
          logout
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
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );
};

export default ContextProvider;
