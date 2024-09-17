import React, {useContext} from "react";
import { CreateContext } from "../Context/Context";
import { Outlet, Navigate } from "react-router";

const RequireAuth = () => {
  const {currUser} = useContext(CreateContext).user
  if (currUser=="recruit") {
    return <Outlet />;
  }else{
    return <Navigate to="/auth/login"/>;
  }
};

export default RequireAuth;
