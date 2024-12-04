import React, { useState, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import CourseIcon from "../../assets/lessons/courseIcon.svg";
import DurationIcon from "../../assets/lessons/durationIcon.svg";
import IntermediateIcon from "../../assets/lessons/intermediateIcon.svg";
import AssignmentIcon from "../../assets/lessons/assignmentIcon.svg";
import StarIcon from "../../assets/lessons/starIcon.svg";
import Video from "../../assets/lessons/video.svg";
import Profile from "../../assets/lessons/profile.svg";
import Profile2 from "../../assets/lessons/profile2.svg";
import Profile3 from "../../assets/lessons/profile3.svg";
import Eclipse from "../../assets/lessons/circle.svg";
import play from "../../assets/lessons/play.svg";
import pdf from "../../assets/lessons/pdf.svg";
import face from "../../assets/lessons/face.svg";
import rocket from "../../assets/lessons/rocket.svg";
import smirk from "../../assets/lessons/smirking.svg";
import message from "../../assets/lessons/message.svg";
import { getEnrolledCourses } from "../../services/apiCourses";
import { useQuery } from "@tanstack/react-query";
import { CreateContext } from "../../Context/Context";
import Spinner from "../../UiElements/spinner";
import { CgSpinner } from "react-icons/cg";
const RecruitCourses = () => {
  const [activeTab, setActiveTab] = useState("description");
  const {setIsLoading} = useContext(CreateContext).loader

  const {data: enrolledCourses, isLoading, error} = useQuery({
    queryKey: ["enrolled-courses"],
    queryFn: getEnrolledCourses
  })
  // Course Details
  const [activeSection, setActiveSection] = useState(null);
  // Function to toggle accordion sections in the course details
  const toggleSection = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  if(isLoading) {
    // setIsLoading(true)
    return(<>
      <div className=" backdrop fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center text-PrimaryPurple  z-50 "><CgSpinner className="animate-spin text-7xl"/></div>
    </>)
  }
 return(<>
  {enrolledCourses?.map((course)=>{
    return <div>{course.title}</div>
  })}
 </>)
};

export default RecruitCourses;
