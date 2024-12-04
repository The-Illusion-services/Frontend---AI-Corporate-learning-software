import React, { useState, useContext } from "react";
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

const PreviewCourse = () => {
  const { courseInView} = useContext(CreateContext).course;
  const [activeTab, setActiveTab] = useState("description");
  // Course Details
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0)
  const [showModuleLessons, setShowModuleLessons] = useState(false)
  const lesson_description = courseInView?.modules[activeModule]?.lessons[activeLesson]?.description

  const handleShowModuleLessons = ()=>{
      setShowModuleLessons(!showModuleLessons)
  }

  // Function to toggle accordion sections in the course details
  const toggleSection = (index) => {
    setActiveModule(index);
    handleShowModuleLessons()
  };

  const handleActiveLesson = (index) => {
    setActiveLesson( index);
  };

  return (
    <section className=" bg-mobileBackground text-white min-h-screen max-w-full">

      {/* Content Area */}
      <div className="xl:flex bg-mobileBackground text-white min-h-screen max-w-full ">
        {/* Main Content Area */}
        <main className="w-full p-6 lg:px-12 lg:py-8 xl:w-[70%]">
          <h1 className="xl:hidden">Course Detail</h1>
          {/* Course Title */}
          <div className="mb-6 mt-6">
            <h1 className=" lg:text-3xl font-bold">
             {courseInView.course_title}
            </h1>
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
          {/* {activeModule.} */}

          {/* Quiz Section */}
          <div className="mb-6 mt-6 hidden">
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
          </div>

          {/* Lecture Section */}
          <div className="mb-6 mt-6 ">
            <div className="flex items-center space-x-3 text-textGray">
              <img src={Profile3} />
              <p>Dianne Russell.Kristin Watson</p>
            </div>

            <div className="flex justify-between items-center my-2">
              <h2 className="text-lg font-bold">{courseInView?.modules[activeModule]?.lessons[activeLesson]?.title}</h2>
            </div>

            <div dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(lesson_description),
        }}>
              
                
            </div>
          </div>

          {/* Tab Section */}
          <div className="mt-6 bg-mobileBackground border border-inputBorderColor rounded-lg p-3">
            {/* Tab Headers */}
            <div className="">
              <ul className="flex space-x-2 lg:space-x-10 border-b border-inputBorderColor items-center justify-center">
                <li
                  className={`cursor-pointer pb-3 ${
                    activeTab === "home"
                      ? "border-b-2 border-PrimaryPurple text-PrimaryPurple"
                      : "text-textGray xl:hidden"
                  }`}
                  onClick={() => setActiveTab("home")}
                >
                  Home
                </li>
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
              <span className="text-textGray">6 courses and 29</span>
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
          <section className="border h-[100px] lg:h-[445px] flex flex-col items-center justify-center lg:py-4">

          <div className="bg-[#1b1c1e] border-2 border-inputBorderColor  rounded-lg w-full lg:w-[90%] flex flex-col lg:gap-y-6  overflow-y-auto h-full lg:p-2">
            {/** Accordion List */}
            {courseInView.modules.map((module, index) => (
              <div key={module.id} className="">
                <div
                  className="flex items-center justify-between cursor-pointer  hover:bg-PrimaryPurple hover:text-white rounded"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    
                    <span
                      className=""
                    >
                      {module.title}
                    </span>
                  </div>
                  {!showModuleLessons ? (
                    <IoIosArrowUp className="text-lg" />
                  ) : (
                    <IoIosArrowDown className="text-lg" />
                  )}
                </div>

                {/* Expandable Content */}

                {showModuleLessons && module.lessons && (
                  <div className="bg-[#1b1c1e] border-2 border-inputBorderColor p-4 mt-2 rounded space-y-5">
                    {module.lessons.map((lesson, index) => (
                      <div key={index} className="flex justify-between text-xs"  onClick={()=> handleActiveLesson(index)}>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <span className={`w-2 h-2 rounded-full ${index === activeLesson && "bg-PrimaryPurple"}`} />
                          <span className="text-gray-300 text-nowrap overflow-x-hidden">{lesson.title.length > 22 ? `${lesson.title.slice(0, 22)}...` : lesson.title}</span>
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
