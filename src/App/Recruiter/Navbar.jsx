import React, { useContext } from "react";
import { CreateContext } from "../../Context/Context";
import { Outlet } from "react-router";

const age = "";

const RecruiterNavbar = () => {
  const { currUser } = useContext(CreateContext).user;

  return (
    <>
      <div>current user type: {currUser}</div>
      {currUser === "recruiter" ? <Outlet /> : null}
      <Outlet />
    </>
  );
};

export default RecruiterNavbar;
