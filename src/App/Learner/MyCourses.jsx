import React, {useContext} from "react";
import { CreateContext } from "../../Context/Context";
import { useQuery } from "@tanstack/react-query";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getEnrolledCourses } from "../../services/apiCourses";
import Profile from "../../assets/lessons/profile.svg";
import LessonImage from "../../assets/lessons/lessonGallery.svg";
import Clock from "../../assets/dashboard/clock.svg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
// Assuming getEnrolledCourses is imported from another file


const MyCourses = () => {
  const navigate = useNavigate()
  // Use React Query to fetch enrolled courses with object syntax
  const {
    data: enrolledCourses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["enrolledCourses"], 
    queryFn: getEnrolledCourses, 
  });



  const handleViewCourse = (courseId) => {
    navigate(`/app/learner/course/view/?id=${courseId}`);
  };
  


  if (isError) {
    return <div>Error loading courses: {error.message}</div>;
  }

  return (
    <div className="bg-mobileBackground min-h-screen ">
      <div className="flex justify-between bg-[#101010] text-white h-auto py-3">
        <div className="text-white flex items-center justify-center text-1xl border-inputBorderColor lg:ml-[3%]">
          <h2 className="hidden xl:block p-3">Courses</h2>
          <img
            src={Profile}
            alt="login illustration"
            className="object-contain w-10 h-10 rounded-full xl:hidden"
          />
        </div>

        <div className="hidden relative xl:block ">
          <div className="absolute bottom-4 left-3 flex text-2xl text-textGray">
            <CiSearch />
          </div>

          <input
            type="search"
            className="border-inputborderGreen text-textGray rounded-lg px-3 py-4 mt-1 text-sm w-[700px] bg-inputBackground focus:outline-PrimaryPurple focus:ring focus:border-PrimaryPurple"
            placeholder="       ...Search"
          />
        </div>

        <div className="flex items-center justify-between mr-[3%]">
          <div className="rounded-full text-PrimaryPurple w-5 h-5 flex items-center justify-center text-3xl bg-[#1b1c1e] border-inputBorderColor mr-3">
            <FaBell />
          </div>

          <div className="rounded-full text-PrimaryPurple w-10 h-10 flex items-center justify-center text-3xl bg-[#1b1e1f] border-inputBorderColor xl:hidden">
            <IoPersonCircleSharp />
          </div>
          <img
            src={Profile}
            alt="login illustration"
            className="object-contain w-10 h-10 rounded-full hidden xl:block"
          />
        </div>
      </div>

      <div className="py-8 px-4">
        <h2 className="text-white font-semibold text-2xl">My Courses</h2>

        <div className="flex items-center justify-between my-5">
          <div className="flex items-center h-[52px] flex-wrap">
            <div className="bg-inputBackground font-semibold w-[52px] text-lg grid place-items-center rounded-l-lg h-full text-textGray">
              <CiSearch />
            </div>
            <input
              type="search"
              className="h-full text-textGray outline-none w-[200px] lg:w-[370px] rounded-r-lg text-sm bg-inputBackground "
              placeholder="Search"
            />
          </div>

          <div div className="flex gap-5 items-center h-[52px] flex-wrap">
            <div className="flex items-center h-[52px] flex-wrap rounded-lg pl-3 pr-2 bg-inputBackground">
              <div className="font-semibold text-sm grid place-items-center h-full text-white ">
                Sort by:
              </div>
              <select
                name="sort"
                id="sort"
                className="h-full text-textGray outline-none text-sm bg-transparent"
              >
                <option value="">Popular</option>
              </select>
            </div>

            <div className="flex items-center h-[52px] flex-wrap rounded-lg pl-3 pr-2 bg-inputBackground">
              <div className="font-semibold text-sm grid place-items-center h-full text-white">
                Category:
              </div>
              <select
                name="sort"
                id="sort"
                className="h-full text-textGray outline-none text-sm bg-transparent"
              >
                <option value="">All Category</option>
              </select>
            </div>

            <div className="flex items-center h-[52px] flex-wrap rounded-lg pl-3 pr-2 bg-inputBackground">
              <select
                name="sort"
                id="sort"
                className="h-full text-textGray outline-none text-sm bg-transparent"
              >
                <option value="">Courses</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3">
        {isError ? (
            <div className="flex text-white text-3xl items-center justify-center font-bold w-[1000px] h-[200px] text-center">
              <h2>An error occured, refresh to try again</h2>
            </div>) : isLoading ?  <div className="flex flex-row gap-x-1">
              <Skeleton height="306px" width="246px" baseColor="#222222" />
              <Skeleton height="306px" width="246px" baseColor="#222222" />
              <Skeleton height="306px" width="246px" baseColor="#222222" />
              <Skeleton height="306px" width="246px" baseColor="#222222" />
            </div> : !isLoading && enrolledCourses?.length >= 1 ? (
            enrolledCourses?.map((course, index) => {
              return (
                <div onClick={() => handleViewCourse(course.id)}>
                  <div
                    className="space-y-3 border-inputBorderColor border p-5 rounded-lg cursor-pointer"
                    title={course.course_title}
                  >
                    <img
                      src={LessonImage}
                      className="object-cover rounded-lg"
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32 text-sm">
                        {course.course_level}
                      </p>
                      <div className="text-textGray flex items-center">
                        <img src={Clock} alt="clock" />
                        <p className="ml-[4px] text-[10px]">24hr 40mins</p>
                      </div>
                    </div>
                    <h3 className="text-white font-bold">
                      {course.course_title.length > 22
                        ? `${course.course_title.slice(0, 22)}...`
                        : course.course_title}
                    </h3>
                    <p className="text-[13px] text-[#AAAAAA] mb-5">
                      {course.course_category}
                    </p>
                    <div className="flex text-textGray text-sm items-center justify-between">
                      <p>12 Lessons</p>
                      <p className="text-PrimaryPurple font-bold text-[20px]">
                        ${course.price ? course.price : "400"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col gap-y-2 text-white text-3xl items-center justify-center font-bold w-[1000px] h-[200px] text-center">

            <h2 >No Course Found</h2>
            <Link to="/app/learner/explore-courses">
            <button className="bg-PrimaryPurple text-lg px-2 py-1 rounded-md font-normal">Enroll in a course</button>
            </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
