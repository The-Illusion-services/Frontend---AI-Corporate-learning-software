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
    console.log(userRole);
    setToken(accessToken)
    setUserId(userId)
    setUserRole(userRole)
    localStorage.setItem("userData", JSON.stringify({accessToken, userId, userRole}))
    console.log(userRole);
    userRole == "Employee" ? navigate("/app/recruit") : navigate("/app/recruiter")
  }
 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log(storedData);
    if (
      storedData &&
      storedData.accessToken
      // storedData.tokenExpDate > new Date().getTime()
    ) {
      login(storedData.accessToken, storedData.userId, storedData.userRole);
    } else {
         navigate("/auth/login")  
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
          login
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
