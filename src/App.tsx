import React from "react";
import { Route, Routes } from "react-router-dom";
import RecruitDashboard from "./App/Recruit/Dashboard";
import RecruiterDashboard from "./App/Recruiter/Dashboard";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import RecruitNavbar from "./App/Recruit/Navbar";
import RecruiterNavbar from "./App/Recruiter/Navbar";
import Landingpage from "./HomePage/Landingpage";
import RequireAuth from "./Auth/RequireAuth";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route element={<RequireAuth />}>
        <Route path="/app/recruit" element={<RecruitNavbar />}>
          <Route index element={<RecruitDashboard />} />
          <Route path="dashboard" element={<RecruitDashboard />} />
        </Route>
        <Route path="/app/recruiter" element={<RecruiterNavbar />}>
          <Route index element={<RecruiterDashboard />} />
          <Route path="dashboard" element={<RecruiterDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
