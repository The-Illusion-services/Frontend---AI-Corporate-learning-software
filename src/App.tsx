import React from "react";
import { Route, Routes } from "react-router-dom";
import RecruitDashboard from "./App/Recruit/Dashboard";
import RecruiterDashboard from "./App/Recruiter/Dashboard";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import RecruitNavbar from "./App/Recruit/Navbar";
import RecruiterNavbar from "./App/Recruiter/Navbar";
import Landingpage from "./HomePage/Landingpage";
import Lessons from "./App/Recruit/Lessons";
import LessonsGallry from "./App/Recruit/LessonsGallery";
import RequireAuth from "./Auth/RequireAuth";
import ForgottenPassword from "./Auth/ForgottenPassword";
import Spinner from "./UiElements/spinner";

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route  path="/auth/login" element={<Login />} />
        <Route path="auth/login/recoverpassword" index element={<ForgottenPassword />} />
      <Route path="/auth/signup" element={<Signup />} />
      {/* element={<RequireAuth />} */}
      <Route>
        <Route path="/app/recruit" element={<RecruitNavbar />}>
          <Route index element={<RecruitDashboard />} />
          <Route path="dashboard" element={<RecruitDashboard />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="lessonsGallery" element={<LessonsGallry />} />
        </Route>
        <Route path="/app/recruiter" element={<RecruiterNavbar />}>
          <Route index element={<RecruiterDashboard />} />
          <Route path="dashboard" element={<RecruiterDashboard />} />
        </Route>
      </Route>
    </Routes>
  </>
  );
}

export default App;
