import React, { useContext } from "react";
import { CreateContext } from "../../Context/Context";
import { Navigate, Outlet } from "react-router";

const RecruitNavbar = () => {
  const { currUser } = useContext(CreateContext).user;

  if (currUser == "recruit") {
    return (
      <>
        <div>Recruit Navbar</div>
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/app/recruiter" />;
  }
};

export default RecruitNavbar;
