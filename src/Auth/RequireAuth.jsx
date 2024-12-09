import React, { useContext } from "react";
import { CreateContext } from "../Context/Context";
import { Outlet, Navigate } from "react-router";

const RequireAuth = () => {
  const { token } = useContext(CreateContext).auth;

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export default RequireAuth;
