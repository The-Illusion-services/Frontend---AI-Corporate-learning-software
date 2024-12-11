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

const PreviewCourse = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const { courseInView, setCourseInView } = useContext(CreateContext).course;
  const [activeTab, setActiveTab] = useState("description");
  // Course Details
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeModule, setActiveModule] = useState({});
  const [activeLesson, setActiveLesson] = useState(0);
  const [showModuleLessons, setShowModuleLessons] = useState(false);
  const lessons = courseInView?.modules[activeModuleIndex]?.lessons;
  const lesson_description =
    courseInView?.modules[activeModuleIndex]?.lessons[activeLesson]
      ?.description;

  // Function to toggle accordion sections in the course details
  const [visibleModules, setVisibleModules] = useState({});

  const toggleSection = (moduleIndex) => {
    setVisibleModules((prev) => ({
      ...prev,
      [moduleIndex]: !prev[moduleIndex], // Toggle the specific module's visibility
    }));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const handleActiveLesson = (lessonIndex, moduleIndex) => {
    setActiveModuleIndex(moduleIndex);
    setActiveLesson(lessonIndex);
  };

  const handleNextLesson = () => {
    if (
      activeLesson + 1 <
      courseInView?.modules[activeModuleIndex]?.lessons.length
    ) {
      setActiveLesson(activeLesson + 1);
    } else if (courseInView?.modules.length > activeModuleIndex + 1) {
      setActiveModuleIndex(activeModuleIndex + 1);
      setActiveLesson(0);
    }
  };

  const handlePreviousLesson = () => {
    if (activeLesson > 0) {
      setActiveLesson(activeLesson - 1);
    }
  };

  const handleManageCourse = () => {
    
    localStorage.setItem(
      "manageCourse",
      JSON.stringify({
        course_title: courseInView.course_title,
        course_description: courseInView.course_description,
        price: courseInView.price,
        modules: [...courseInView.modules],
        id: courseInView.id,
      })
    );
    navigate("/app/creator/course-management/update");
  };

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
            <button
              className="w-40 px-2 py-1  rounded-md bg-PrimaryPurple"
              onClick={handleManageCourse}
            >
              Manage Course
            </button>
          </div>

          {/* Video Section */}
          <div className="bg-inputBackground rounded-lg flex items-center justify-center">
            {/* <img
              src={Video}
              alt="Course"
              className="aspect-video object-cover rounded-lg w-full flex relative"
            />

            <img
              src={Eclipse}
              className="flex absolute object-cover rounded-lg"
            />
            <img src={play} className="flex absolute object-cover rounded-lg" /> */}
          </div>
          {/* {activeModuleIndex.} */}

          {/* Quiz Section */}
          {/* <div className="mb-6 mt-6 hidden">
            <div className="flex text-textGray">
              <img src={Profile3} />
              <p>Dianne Russell.Kristin Watson</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <h2 className="text-1xl font-bold">Quiz</h2>
              <div className="flex text-textGray">
                <p className="text-xs font-bold mx-4">Q3/4</p>
                <FaClock />
              </div>
            </div>

            <div className="flex justify-between items-center my-2 text-textGray">
              <h2 className="text-lg font-bold">Question 1</h2>
              <div className="flex">Skip</div>
            </div>

            <div>
              <p className="text-textGray p-2">
                "At vero eos et accusamus et justo odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati." Omnis
                voluptas assumenda est, omnis dolor repellendus. Harum quidem
                rerum facilis est et expedita distinctio. Omnis voluptas
                assumenda est, omnis dolor repellendus. Harum quidem rerum
                facilis est et expedita distinctio. Omnis voluptas assumenda
                est, omnis dolor repellendus. Harum quidem rerum facilis est et
                expedita distinctio.
              </p>
            </div>
          </div> */}

          {/* Lecture Section */}
          <div className="mb-6 mt-6 ">
            <div className="flex items-center space-x-3 text-textGray">
              <img src={Profile3} />
              <p>Dianne Russell.Kristin Watson</p>
            </div>

            <div className="flex flex-col justify-between my-2">
              <h2 className="text-2xl font-bold">
                {courseInView?.modules[activeModuleIndex]?.title}
              </h2>
              <div className="flex justify-between mt-4">
                <h2 className="text-lg">
                  {
                    courseInView?.modules[activeModuleIndex]?.lessons[
                      activeLesson
                    ]?.title
                  }
                </h2>
               
              </div>
            </div>

            <div
              className="border rounded-md lg:max-h-[300px] lg:h-[300px] px-2 py-2 overflow-y-auto border-inputBorderColor"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(lesson_description),
              }}
            ></div>
          </div>

          <div className=" gap-x-2 w-full flex justify-end mb-6">
                  <button
                    className="border rounded-sm h-8 w-24 hover:bg-PrimaryPurple hover:border-0"
                    onClick={handlePreviousLesson}
                  >
                    Previous
                  </button>
                  <button
                    className=" rounded-sm h-8 w-24 bg-PrimaryPurple hover:border-0"
                    onClick={handleNextLesson}
                  >
                    Next
                  </button>
                </div>
          {/* Tab Section */}
          <div className=" bg-mobileBackground border border-inputBorderColor rounded-lg p-3 mt-auto">
            {/* Tab Headers */}
            <div className="">
              <ul className="flex space-x-2 lg:space-x-10 border-b border-inputBorderColor items-center justify-center">
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
        <aside className="hidden xl:block mt-5 px-5 xl:mt-3 py-7  lg:w-[35%]">
          {/* Right Section: Course Metadata */}
          <div className="bg-[#1b1c1e] border-2 border-inputBorderColor p-6 rounded-lg w-full lg:w-full space-y-4 mb-10">
            {/* Course Metadata Items */}
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

          {/* Left Section: Course List */}
          <section className=" h-[100px] lg:h-[445px] flex flex-col items-center justify-center bg-[#1b1c1e] lg:py-4 border-2 border-inputBorderColor rounded-sm">
            <div className=" rounded-lg w-full lg:w-full flex flex-col lg:gap-y-6 overflow-y-auto scrollbar-hide h-full lg:p-2">
              {/** Accordion List */}
              {courseInView.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className=" r">
                  <div
                    className="flex items-center justify-between cursor-pointer hover:bg-PrimaryPurple px-1 hover:text-white rounded "
                    onClick={() => toggleSection(moduleIndex)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="">{module.title}</span>
                    </div>
                    {visibleModules[moduleIndex] ? (
                      <IoIosArrowUp className="text-lg" />
                    ) : (
                      <IoIosArrowDown className="text-lg" />
                    )}
                  </div>

                  {/* Expandable Content */}

                  {visibleModules[moduleIndex] && module.lessons && (
                    <div className="bg-[#1b1c1e] border-2 border-inputBorderColor p-4 mt-2 rounded space-y-5">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="flex justify-between text-xs border px-1 rounded-md border-inputBorderColor py-1"
                          onClick={() =>
                            handleActiveLesson(lessonIndex, moduleIndex)
                          }
                        >
                          <div className="flex items-center gap-2 cursor-pointer">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                lessonIndex === activeLesson &&
                                moduleIndex == activeModuleIndex ?
                                "bg-PrimaryPurple" : "bg-inputBorderColor"
                              }`}
                            />
                            <span
                              className="text-gray-300 text-nowrap overflow-x-hidden"
                              title={lesson.title}
                            >
                              {lesson.title.length > 22
                                ? `${lesson.title.slice(0, 22)}...`
                                : lesson.title}
                            </span>
                          </div>
                          <span className="text-xs">21:03</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
};

export default PreviewCourse;
