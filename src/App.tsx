import React from "react";
import { Route, Routes } from "react-router-dom";
import RecruitDashboard from "./App/Recruit/Dashboard";
import RecruiterDashboard from "./App/Recruiter/Dashboard";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import RecruitNavbar from "./App/Recruit/Navbar";
import RecruiterNavbar from "./App/Recruiter/Navbar";
import Landingpage from "./HomePage/Landingpage";
import Courses from "./App/Recruit/Courses";
import LessonsGallery from "./App/Recruit/LessonsGallery";
import RequireAuth from "./Auth/RequireAuth";
import ForgottenPassword from "./Auth/ForgottenPassword";
import Spinner from "./UiElements/spinner";
import Course from "./App/Recruiter/Course";
import CreateCourse from "./CourseBuilder/CreateCourse";
import QuizBuilder from "./QuizBuilder/QuizBuilder";
import CourseLandingPage from "./CourseBuilder/CourseLandingPage";
import Payment from "./App/Recruit/Payment";
import CreateJobs from "./App/Recruiter/CreateJobs";
import Toast from "./Shared/toast";
import ManageCourses from "./App/Recruiter/ManageCourse";
import CreateCourseLandingPage from "./App/Recruiter/Course";
import CourseList from "./App/Recruit/Courses";
import ViewCourse from "./App/Recruit/ViewCourse";

function App() {
  return (
    <>
      <Spinner />
      <Toast/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/payment-checkout" element={<Payment />} />

        <Route path="/auth/login" element={<Login />} />
        <Route
          path="auth/login/recoverpassword"
          index
          element={<ForgottenPassword />}
        />
        <Route path="/auth/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/app/recruit" element={<RecruitNavbar />}>
            <Route index element={<RecruitDashboard />} />
            <Route path="dashboard" element={<RecruitDashboard />} />
            <Route path="courses" element={<CourseList />} />
            <Route path="course/view" element={<ViewCourse />} />
            <Route path="course" element={<Payment />} />
            <Route path="lessons-gallery" element={<LessonsGallery />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route path="/app/recruiter" element={<RecruiterNavbar />}>
            <Route index element={<RecruiterDashboard />} />
            <Route path="dashboard" element={<RecruiterDashboard />} />
            <Route path="create-jobs" element={<CreateJobs />} />
            <Route path="manage-courses" element={<ManageCourses />} />
            <Route path="course/view" element={<ViewCourse />} />
            <Route path="create-course" element={<Course />}>
              <Route index element={<CourseLandingPage />} />
              <Route path="create-resource" element={<CreateCourse />} />
              <Route path="quiz" element={<QuizBuilder />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
