import { Route, Routes } from "react-router-dom";
import CourseList from "./App/Learner/AllCourses";
import RecruitDashboard from "./App/Learner/Dashboard";
import LessonsGallery from "./App/Learner/LessonsGallery";
import MyCourses from "./App/Learner/MyCourses";
import RecruitNavbar from "./App/Learner/Navbar";
import Payment from "./App/Learner/Payment";
import Preview from "./App/Learner/Preview";
import ViewCourse from "./App/Learner/ViewCourse";
import Course from "./App/Creator/Course";
import CreateJobs from "./App/Creator/CreateJobs";
import RecruiterDashboard from "./App/Creator/Dashboard";
import ManageCourses from "./App/Creator/ManageCourse";
import RecruiterNavbar from "./App/Creator/Navbar";
import CreatorCourseView from "./App/Creator/ViewCourse";
import ForgottenPassword from "./Auth/ForgottenPassword";
import Login from "./Auth/Login";
import RequireAuth from "./Auth/RequireAuth";
import Signup from "./Auth/Signup";
import CourseLandingPage from "./CourseBuilder/CourseLandingPage";
import CreateCourse from "./CourseBuilder/CreateCourse";
import UpdateCourse from "./CourseBuilder/UpdateCourse";
import Landingpage from "./HomePage/Landingpage";
import QuizBuilder from "./QuizBuilder/QuizBuilder";
import Toast from "./Shared/toast";
import Spinner from "./UiElements/spinner";
import Checkout from "./App/Learner/Checkout";
import SignoutModal from "./Auth/SignoutModal";

function App() {
  return (
    <>
      <SignoutModal />
      <Spinner />
      <Toast />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="auth/login/recoverpassword"
          index
          element={<ForgottenPassword />}
        />
        <Route path="/auth/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/app/learner" element={<RecruitNavbar />}>
            <Route index element={<RecruitDashboard />} />
            <Route path="dashboard" element={<RecruitDashboard />} />
            <Route path="explore-courses" element={<CourseList />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="course/preview" element={<Preview />} />
            <Route path="course/view" element={<ViewCourse />} />
            <Route path="course" element={<Payment />} />
            <Route path="lessons-gallery" element={<LessonsGallery />} />
            <Route path="payment" element={<Payment />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="course/checkout" element={<Checkout />} />
          </Route>
          <Route path="/app/creator" element={<RecruiterNavbar />}>
            <Route index element={<RecruiterDashboard />} />
            <Route path="dashboard" element={<RecruiterDashboard />} />
            <Route path="create-jobs" element={<CreateJobs />} />
            <Route path="course-management/update" element={<UpdateCourse />} />
            <Route path="course/view" element={<CreatorCourseView />} />
            <Route path="course-management" element={<ManageCourses />} />
            <Route path="course-management/create" element={<Course />}>
              <Route index element={<CourseLandingPage />} />
              <Route path="landing-page" element={<CourseLandingPage />} />
              <Route path="create-resource" element={<CreateCourse />} />
              <Route path="create-course/quiz" element={<QuizBuilder />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
