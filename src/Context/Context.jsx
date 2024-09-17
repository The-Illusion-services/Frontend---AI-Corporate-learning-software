import React, { createContext, useState } from "react";

export const CreateContext = createContext();

const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  // const [tokenExpDate, setTokenExpDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currUser, setCurrUser] = useState("recruit");
  const [skeletalLoading, setSkeletalLoading] = useState(false);

 
  return (
    <CreateContext.Provider
      value={{
        auth: {
          token,
          setToken,
          setUsername,
          userId,
          username,
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
