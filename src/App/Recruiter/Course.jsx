import React, { useEffect, useState, useContext } from "react";
import { CreateContext } from "../../Context/Context";
import PageHeader from "../PageHeader";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateCourseLandingPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState({
    createCourse: true,
    createResource: false,
    quiz: false,
  });
  const location = useLocation();

  const { course, setCourse } = useContext(CreateContext).course;
  const handleNavigateToCourseBuilder = () => {
    if (course.course_title && course.course_description && course.price) {
      navigate("/app/recruiter/create-course/create-resource");
    } else {
      toast.error("Fields cannot be empty");
    }
  };

  useEffect(() => {
    location.pathname === "/app/recruiter/create-course/landing-page"
      ? setActiveTab({
          ...activeTab,
          createCourse: true,
          createResource: false,
          quiz: false,
        })
      : location.pathname === "/app/recruiter/create-course/create-resource"
      ? setActiveTab({
          ...activeTab,
          createCourse: false,
          createResource: true,
          quiz: false,
        })
      : location.pathname === "/app/recruiter/course/quiz"
      ? setActiveTab({
          ...activeTab,
          createCourse: false,
          createResource: false,
          quiz: true,
        })
      : setActiveTab(activeTab);
  }, [location.pathname]);

  return (
    <>
      <PageHeader />
      <main className=" lg:mb-0 mb-16">
        <section className="bg-[#1B1C1E] min-h-screen px-4 py-4">
          <div className="text-white text-xs flex flex-row gap-x-4 justify-center lg:justify-normal">
            <Link
              to="/app/recruiter/create-course/landing-page"
              className="flex flex-row gap-x-1"
            >
              <span
                className={`${
                  activeTab.createCourse
                    ? "bg-PrimaryPurple"
                    : "bg-inputBorderColor"
                }   text-center rounded-full w-4 h-4`}
              >
                1{" "}
              </span>
              <span>Create course content</span>
            </Link>
            <div
              onClick={handleNavigateToCourseBuilder}
              className="flex flex-row gap-x-1 cursor-pointer"
            >
              <span
                className={`${
                  activeTab.createResource
                    ? "bg-PrimaryPurple"
                    : "bg-inputBorderColor"
                }   text-center rounded-full w-4 h-4`}
              >
                2{" "}
              </span>
              <span>Create resource</span>
            </div>
            {/* <Link to="/app/recruiter/course/quiz" className="flex flex-row gap-x-1">
              <span className={`${activeTab.quiz ? "bg-PrimaryPurple" : "bg-inputBorderColor"}  text-center rounded-full w-4 h-4`}>3 </span>
              <span>Quiz</span>
            </Link> */}
          </div>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default CreateCourseLandingPage;
