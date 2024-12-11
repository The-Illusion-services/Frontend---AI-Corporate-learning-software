import React, { useState, useContext, useEffect } from "react";
import { CreateContext } from "../../Context/Context";
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
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate()
  const pathname = useLocation().pathname;
  const { courseInView, setCourseInView } = useContext(CreateContext).course;
  const [activeTab, setActiveTab] = useState("description");

  // Function to toggle accordion sections in the course details
  const [visibleModules, setVisibleModules] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const handleNavigateToCheckout = ()=>{
    navigate("/app/learner/course/checkout")
  }

  return (
    <section className=" bg-mobileBackground text-white min-h-screen max-w-full">
      {/* Content Area */}
      <div className="xl:flex bg-mobileBackground text-white min-h-screen max-w-full ">
        {/* Main Content Area */}
        <main className="w-full p-6 lg:px-12 lg:py-8 xl:w-[70%]  flex flex-col">
          {/* <h1 className="xl:hidden">Course Detail</h1> */}
          {/* Course Title */}
          <div className="mb-6 mt-6  flex justify-between items-center py-2 px-1">
            <h1 className=" lg:text-3xl font-bold">
              {courseInView.course_title}
            </h1>
          </div>

          {/* Video Section */}
          <div className="bg-inputBackground rounded-lg flex items-center justify-center">
            <img
              src={Video}
              alt="Course"
              className="aspect-video object-cover rounded-lg w-full flex relative"
            />

            <img
              src={Eclipse}
              className="flex absolute object-cover rounded-lg"
            />
            <img src={play} className="flex absolute object-cover rounded-lg" />
          </div>
          {/* {activeModuleIndex.} */}

          {/* Lecture Section */}
          <div className="mb-6 mt-6 ">
            <div className="flex items-center space-x-3 text-textGray">
              <img src={Profile3} />
              <p>Dianne Russell.Kristin Watson</p>
            </div>
          </div>

          {/* Tab Section */}
          <div className=" bg-mobileBackground border border-inputBorderColor rounded-lg p-3 mt-auto">
            {/* Tab Headers */}
            <div className="">
              <ul className="flex space-x-2 lg:space-x-10 border-b border-inputBorderColor items-center justify-between">
                <li
                  className={`cursor-pointer pb-3 ${
                    activeTab === "description"
                      ? "border-b-2 border-PrimaryPurple text-PrimaryPurple"
                      : "text-textGray"
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </li>
                <li
                  className={`cursor-pointer pb-3 ${
                    activeTab === "reviews"
                      ? "border-b-2 border-PrimaryPurple text-PrimaryPurple"
                      : "text-textGray"
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </li>
                <li
                  className={`cursor-pointer pb-3 ${
                    activeTab === "discussions"
                      ? "border-b-2 border-PrimaryPurple text-PrimaryPurple"
                      : "text-textGray"
                  }`}
                  onClick={() => setActiveTab("discussions")}
                >
                  Discussions
                </li>
                <li
                  className={`cursor-pointer pb-3 ${
                    activeTab === "resources"
                      ? "border-b-2 border-PrimaryPurple text-PrimaryPurple"
                      : "text-textGray"
                  }`}
                  onClick={() => setActiveTab("resources")}
                >
                  Resources
                </li>
              </ul>
            </div>

            {/* Tab Content */}
            <div className="mt-4 mb-20">
              {/* Home Tab */}

              {/* Description Tab */}
              {activeTab === "description" && (
                <div>
                  <p className="text-gray-400">
                    {courseInView.course_description}
                  </p>
                </div>
              )}

              {/*Reviews Tab  */}
              {activeTab === "reviews" && (
                <div>
                  <p className="text-gray-400">
                    "At vero eos et accusamus et justo odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati."
                  </p>
                  <p className="mt-4 text-gray-400">
                    Omnis voluptas assumenda est, omnis dolor repellendus. Harum
                    quidem rerum facilis est et expedita distinctio.
                  </p>
                </div>
              )}

              {/* Discussion Tab */}
              {activeTab === "discussions" && (
                <div className="bg-mobileBackground text-white min-h-screen p-6">
                  <div className="max-w-md mx-auto">
                    {/* Single Comment Box */}
                    <div className="bg-mobileBackground p-4 rounded-lg mb-4">
                      <div className="flex items-center mb-3">
                        <img
                          src={Profile2}
                          alt="Profile"
                          className="rounded-full h-10 w-10 mr-3"
                        />
                        <div>
                          <h4 className="text-sm font-semibold">
                            Dianne Russell
                          </h4>
                          <span className="text-xs text-textGray">
                            51 mins ago
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        This course is just amazing! has great course content,
                        the best practices, and a lot of real-world knowledge. I
                        love the way of giving examples, the best tips by the
                        instructor which are pretty interesting, fun and
                        knowledgeable and I was never getting bored throughout
                        the course. This course meets more than my expectation
                        and, I made the best investment of time to learn and
                        practice what I am passionate about. Thank you so much
                        to our excellent instructor Vakol! Highly recommend this
                        course! Take the next step.
                      </p>
                      {/* Reaction and Replies */}
                      <div className=" items-center justify-between text-PrimaryPurple">
                        <div className="flex space-x-2">
                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg text-white">
                            <button className="flex items-center">
                              <img src={smirk} className="w-5 h-5" />

                              <img src={rocket} className="w-5 h-5" />

                              <span>2</span>
                            </button>
                          </div>
                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg  text-white">
                            <img src={face} className="w-5 h-5" />
                          </div>

                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg  text-white">
                            <img src={message} className="w-5 h-5" />
                          </div>
                        </div>

                        <button className="text-sm flex items-center">
                          <img src={Profile} />
                          <img
                            src={Profile}
                            className="flex absolute left-16"
                          />
                          <p>11 replies</p>
                        </button>
                      </div>
                    </div>

                    {/* Duplicate Comment Box */}
                    <div className="bg-mobileBackground p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <img
                          src={Profile2}
                          alt="Profile"
                          className="rounded-full h-10 w-10 mr-3"
                        />
                        <div>
                          <h4 className="text-sm font-semibold">
                            Dianne Russell
                          </h4>
                          <span className="text-xs text-textGray">
                            51 mins ago
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        This course is just amazing! has great course content,
                        the best practices, and a lot of real-world knowledge. I
                        love the way of giving examples, the best tips by the
                        instructor which are pretty interesting, fun and
                        knowledgeable and I was never getting bored throughout
                        the course. This course meets more than my expectation
                        and, I made the best investment of time to learn and
                        practice what I am passionate about. Thank you so much
                        to our excellent instructor Vakol! Highly recommend this
                        course! Take the next step.
                      </p>
                      {/* Reaction and Replies */}
                      <div className=" items-center justify-between text-PrimaryPurple">
                        <div className="flex space-x-2">
                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg text-white">
                            <button className="flex items-center">
                              <img src={smirk} className="w-5 h-5" />

                              <img src={rocket} className="w-5 h-5" />

                              <span>2</span>
                            </button>
                          </div>
                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg  text-white">
                            <img src={face} className="w-5 h-5" />
                          </div>

                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg  text-white">
                            <img src={message} className="w-5 h-5" />
                          </div>
                        </div>

                        <button className="text-sm flex items-center">
                          <img src={Profile} />
                          <img
                            src={Profile}
                            className="flex absolute left-16"
                          />
                          <p>11 replies</p>
                        </button>
                      </div>
                    </div>

                    <div className="bg-mobileBackground p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <img
                          src={Profile2}
                          alt="Profile"
                          className="rounded-full h-10 w-10 mr-3"
                        />
                        <div>
                          <h4 className="text-sm font-semibold">
                            Dianne Russell
                          </h4>
                          <span className="text-xs text-textGray">
                            51 mins ago
                          </span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        This course is just amazing! has great course content,
                        the best practices, and a lot of real-world knowledge. I
                        love the way of giving examples, the best tips by the
                        instructor which are pretty interesting, fun and
                        knowledgeable and I was never getting bored throughout
                        the course. This course meets more than my expectation
                        and, I made the best investment of time to learn and
                        practice what I am passionate about. Thank you so much
                        to our excellent instructor Vakol! Highly recommend this
                        course! Take the next step.
                      </p>
                      {/* Reaction and Replies */}
                      <div className=" items-center justify-between text-PrimaryPurple">
                        <div className="flex space-x-2">
                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg text-white">
                            <button className="flex items-center">
                              <img src={smirk} className="w-5 h-5" />

                              <img src={rocket} className="w-5 h-5" />

                              <span>2</span>
                            </button>
                          </div>
                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg  text-white">
                            <img src={face} className="w-5 h-5" />
                          </div>

                          <div className="flex items-center space-x-1 bg-mobileBackground p-2 border border-inputBorderColor rounded-lg  text-white">
                            <img src={message} className="w-5 h-5" />
                          </div>
                        </div>

                        <button className="text-sm flex items-center">
                          <img src={Profile} />
                          <img
                            src={Profile}
                            className="flex absolute left-16"
                          />
                          <p>11 replies</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Resourcess Tab */}
              {activeTab === "resources" && (
                <div className="justify-around items-center l lg:flex">
                  <div className=" bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-between gap-2 outline-none text-white m-3 p-5">
                    <div className="flex justify-center items-center">
                      <div className="h-10 w-10 p-2 bg-mobileBackground">
                        <img src={pdf} alt="" className="object-cover" />
                      </div>
                      <div className="m-2">
                        <h2 className="text-base">
                          Meeting minute{" "}
                          <span className="text-textGray text-xs">.13mb</span>
                        </h2>
                        <h3 className="text-textGray text-xs">
                          PDF File <span>.11 Sept 23</span>
                        </h3>
                      </div>
                    </div>
                    <div className="text-textGray">
                      <LiaDownloadSolid />
                    </div>
                  </div>

                  <div className=" bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-between gap-2 outline-none text-white m-3 p-5">
                    <div className="flex justify-center items-center">
                      <div className="h-10 w-10 p-2 bg-mobileBackground">
                        <img src={pdf} alt="" className="object-cover" />
                      </div>
                      <div className="m-2">
                        <h2 className="text-base">
                          Meeting minute{" "}
                          <span className="text-textGray text-xs">.13mb</span>
                        </h2>
                        <h3 className="text-textGray text-xs">
                          PDF File <span>.11 Sept 23</span>
                        </h3>
                      </div>
                    </div>
                    <div className="text-textGray">
                      <LiaDownloadSolid />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Course Info Sidebar */}
        <aside className="hidden xl:block mt-6 px-5 xl:mt-3 py-7  lg:w-[35%] ">
          {/* Right Section: Course Metadata */}
          <div className="bg-[#1b1c1e] border-2 border-inputBorderColor p-6 rounded-lg w-full lg:w-full space-y-4 mb-10">
            {/* Course Metadata Items */}
            <div>
              <h2 className=" text-xl font-bold">${courseInView.price}</h2>
            </div>
            <div className="w-full flex flex-col gap-y-1">
              <button className="bg-PrimaryPurple rounded-sm py-1 ">
                {" "}
                Add to cart
              </button>
              <button className="border rounded-sm py-1" onClick={handleNavigateToCheckout}>Buy now</button>
            </div>
            <span className="mt-4">Course Info:</span>
            <div className="flex items-center gap-4">
              <img src={CourseIcon} className="text-textGray" />
              <span className="text-textGray">
                {courseInView.modules.length} modules{" "}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src={DurationIcon} className="text-textGray" />
              <span className="text-textGray">24hrs 30min</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={IntermediateIcon} className="text-textGray text-lg" />
              <span className="text-textGray">Intermediate</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={AssignmentIcon} className="text-textGray" />
              <span className="text-textGray">5 Assignments and 7 Lessons</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={StarIcon} />
              <span className="text-textGray">
                Receive NFT certificate upon completing all 6 courses
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Preview;
