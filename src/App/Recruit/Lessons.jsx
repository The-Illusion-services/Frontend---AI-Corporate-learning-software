import React, { useState } from "react";
import { FaFilePen } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaCheckCircle, FaClock} from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdOutlineAssignment } from 'react-icons/md';
import { LiaDownloadSolid } from "react-icons/lia";
import CourseIcon from "../../assets/lessons/courseIcon.svg";
import DurationIcon from "../../assets/lessons/durationIcon.svg";
import IntermediateIcon from "../../assets/lessons/intermediateIcon.svg";
import AssignmentIcon from "../../assets/lessons/assignmentIcon.svg";
import StarIcon from "../../assets/lessons/starIcon.svg"
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
import message from "../../assets/lessons/message.svg"




const RecruitLessons = () => {
  const [activeTab, setActiveTab] = useState("description");
  // Course Details
  const [activeSection, setActiveSection] = useState(null);
  // Function to toggle accordion sections in the course details
  const toggleSection = (index) => {
      setActiveSection(index === activeSection ? null : index);
  };

  return (
      <section className=" bg-mobileBackground text-white min-h-screen max-w-full">
        {/* Heading/Search */}
        <div className="flex justify-between bg-mobileBackground text-white h-auto lg:ml-[16%] p-3">

          <div className=" text-white flex items-center justify-center text-1xl border-inputBorderColor lg:ml-[3%]">
            <h2 className="hidden xl:block p-3">Course Detail</h2>
            <img
                src={Profile}
                alt="login illustration"
                className="object-contain w-10 h-10 rounded-full xl:hidden"
              />
          </div>

          <div className="hidden relative xl:block">
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
            <div className=" rounded-full text-PrimaryPurple w-10 h-10 flex items-center justify-center text-3xl bg-[#1b1c1e] border-inputBorderColor">
              <FaBell />
            </div>

            <div className=" rounded-full text-PrimaryPurple w-10 h-10 flex items-center justify-center text-3xl bg-[#1b1c1e] border-inputBorderColor xl:hidden">
              <IoPersonCircleSharp />
            </div>
            <img
                src={Profile}
                alt="login illustration"
                className="object-contain w-10 h-10 rounded-full hidden xl:block"
              />
          </div>
        </div>
      
        {/* Content Area */}
        <div className="xl:flex bg-mobileBackground text-white min-h-screen max-w-full lg:ml-[16%]">

          {/* Main Content Area */}
          <main className="w-full p-6 lg:px-12 lg:py-8 xl:w-[70%]">
            <h1 className="xl:hidden">
              Course Detail
            </h1>
            {/* Course Title */}
            <div className="mb-6 mt-6">
              <h1 className=" lg:text-3xl font-bold">
                Complete Website Responsive Design: from Figma to Webflow to Website
                Design
              </h1>
              
            </div>

            {/* Video Section */}
            <div className="bg-inputBackground rounded-lg flex items-center justify-center">
              <img
                src={Video}
                alt="Course"
                className="aspect-video object-cover rounded-lg w-full flex relative"
              />

              <img src={Eclipse} className="flex absolute object-cover rounded-lg" />
              <img src={play} className="flex absolute object-cover rounded-lg" />
              
            </div>

            {/* Quiz Section */}
            <div className="mb-6 mt-6 hidden">
              <div className="flex text-textGray">
                <img
                  src={Profile3}
                />
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
                <div className="flex">
                  Skip
                </div>
              </div>

              <div>
                <p className="text-textGray p-2">
                "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."

                Omnis voluptas assumenda est, omnis dolor repellendus. Harum quidem rerum facilis est et expedita distinctio.  Omnis voluptas assumenda est, omnis dolor repellendus. Harum quidem rerum facilis est et expedita distinctio.  Omnis voluptas assumenda est, omnis dolor repellendus. Harum quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>

            {/* Lecture Section */}
            <div className="mb-6 mt-6 hidden">
              <div className="flex items-center space-x-3 text-textGray">
                <img
                  src={Profile3}
                />
                <p>Dianne Russell.Kristin Watson</p>
              </div>

              <div className="flex justify-between items-center my-2">
                <h2 className="text-lg font-bold">Lecture 1</h2>
              </div>

              <div>
                <p className="text-textGray p-2">
                "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."

                Omnis voluptas assumenda est, omnis dolor repellendus. Harum quidem rerum facilis est et expedita distinctio.  Omnis voluptas assumenda est, omnis dolor repellendus. Harum quidem rerum facilis est et expedita distinctio.  Omnis voluptas assumenda est, omnis dolor repellendus. Harum quidem rerum facilis est et expedita distinctio.
                </p>
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
                {activeTab === "home" && (
                  <div>
                    {/* Left Section: Course List */}
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-5 px-5 xl:mt-0 py-7 w-full">
                      <div className="bg-[#1b1c1e] border-2 border-inputBorderColor p-6 rounded-lg w-full lg:w-full space-y-4 m-2">
                        {/** Accordion List */}
                        {[
                          { id: 1, title: 'Introduction' },
                          {
                            id: 2,
                            title: 'Section 1',
                            items: [
                              'Lorem ipsum dolor sit amet ipsum',
                              'Lorem ipsum dolor sit amet ipsum dolor sit amet',
                              'Lorem ipsum dolor sit amet ipsum dolor sit amet',
                              'Lorem ipsum dolor sit amet ipsum dolor sit amet',
                            ],
                          },
                          { id: 3, title: 'Section 2' },
                          { id: 4, title: 'Section 3' },
                        ].map((section, index) => (
                          <div key={section.id}>
                            <div
                              className="flex items-center justify-between cursor-pointer p-4 hover:bg-mobileBackground rounded"
                              onClick={() => toggleSection(index)}
                            >
                              <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-textGray">
                                  {section.id}
                                </span>
                                <span className={index === activeSection ? 'text-PrimaryPurple' : 'text-white' }>
                                  {section.title}
                                </span>
                              </div>
                              {index === activeSection ? (
                                <IoIosArrowUp className="text-lg" />
                              ) : (
                                <IoIosArrowDown className="text-lg" />
                              )}
                            </div>

                            {/* Expandable Content */}
                            {index === activeSection && section.items && (
                              <div className="bg-inputBackground p-4 mt-2 rounded space-y-2">
                                {section.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                                      <span className="text-gray-300">{item}</span>
                                    </div>
                                    <span className="text-xs">21:03</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    
                    {/* Course Progress */}    

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
                      <span className="text-textGray">Receive NFT certificate upon completing all 6 courses</span>
                    </div>
                    </div>
                  </div>
                  </div>
                )}

                {/* Description Tab */}
                {activeTab === "description" && (
                  <div>
                    <p className="text-gray-400">
                      "At vero eos et accusamus et justo odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati."
                    </p>
                    <p className="mt-4 text-gray-400">
                      Omnis voluptas assumenda est, omnis dolor repellendus. Harum
                      quidem rerum facilis est et expedita distinctio.
                    </p>
                  </div>
                )}

                {/*Reviews Tab  */}
                {activeTab === "reviews" && (
                  <div>
                    <p className="text-gray-400">
                      "At vero eos et accusamus et justo odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati."
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
                          <h4 className="text-sm font-semibold">Dianne Russell</h4>
                          <span className="text-xs text-textGray">51 mins ago</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge.
                        I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and
                        knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation
                        and, I made the best investment of time to learn and practice what I am passionate about. Thank you so much to
                        our excellent instructor Vakol! Highly recommend this course! Take the next step.
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
                          <img src={Profile} className="flex absolute left-16" />
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
                          <h4 className="text-sm font-semibold">Dianne Russell</h4>
                          <span className="text-xs text-textGray">51 mins ago</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge.
                        I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and
                        knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation
                        and, I made the best investment of time to learn and practice what I am passionate about. Thank you so much to
                        our excellent instructor Vakol! Highly recommend this course! Take the next step.
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
                          <img src={Profile} className="flex absolute left-16" />
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
                          <h4 className="text-sm font-semibold">Dianne Russell</h4>
                          <span className="text-xs text-textGray">51 mins ago</span>
                        </div>
                      </div>
                      <p className="text-sm mb-4">
                        This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge.
                        I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and
                        knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation
                        and, I made the best investment of time to learn and practice what I am passionate about. Thank you so much to
                        our excellent instructor Vakol! Highly recommend this course! Take the next step.
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
                          <img src={Profile} className="flex absolute left-16" />
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
                          <img src={pdf} alt="" className="object-cover"  />
                        </div>
                        <div className="m-2">
                          <h2 className="text-base">Meeting minute <span className="text-textGray text-xs">.13mb</span></h2>
                          <h3 className="text-textGray text-xs">PDF File <span>.11 Sept 23</span></h3>
                        </div>
                      </div>
                      <div className="text-textGray">
                        <LiaDownloadSolid />
                      </div>
                    </div>

                    <div className=" bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-between gap-2 outline-none text-white m-3 p-5">
                      <div className="flex justify-center items-center">
                        <div className="h-10 w-10 p-2 bg-mobileBackground">
                          <img src={pdf} alt="" className="object-cover"  />
                        </div>
                        <div className="m-2">
                          <h2 className="text-base">Meeting minute <span className="text-textGray text-xs">.13mb</span></h2>
                          <h3 className="text-textGray text-xs">PDF File <span>.11 Sept 23</span></h3>
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
          <aside className="hidden xl:block mt-5 px-5 xl:mt-3 py-7  lg:w-[30%]">
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
                      <span className="text-textGray">Receive NFT certificate upon completing all 6 courses</span>
                    </div>
                  </div>

                {/* Left Section: Course List */}
                <div className="bg-[#1b1c1e] border-2 border-inputBorderColor p-6 rounded-lg w-full lg:w-full space-y-4 mb-5">
                        {/** Accordion List */}
                        {[
                          { id: 1, title: 'Introduction' },
                          {
                            id: 2,
                            title: 'Section 1',
                            items: [
                              'Lorem ipsum dolor sit amet ipsum',
                              'Lorem ipsum dolor sit amet ipsum dolor sit amet',
                              'Lorem ipsum dolor sit amet ipsum dolor sit amet',
                              'Lorem ipsum dolor sit amet ipsum dolor sit amet',
                            ],
                          },
                          { id: 3, title: 'Introduction' },
                          { id: 4, title: 'Introduction' },
                        ].map((section, index) => (
                          <div key={section.id}>
                            <div
                              className="flex items-center justify-between cursor-pointer p-4 hover:bg-PrimaryPurple rounded"
                              onClick={() => toggleSection(index)}
                            >
                              <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-500">
                                  {section.id}
                                </span>
                                <span className={index === activeSection ? 'text-PrimaryPurple' : 'text-white' }>
                                  {section.title}
                                </span>
                              </div>
                              {index === activeSection ? (
                                <IoIosArrowUp className="text-lg" />
                              ) : (
                                <IoIosArrowDown className="text-lg" />
                              )}
                            </div>

                            {/* Expandable Content */}
                            {index === activeSection && section.items && (
                              <div className="bg-[#1b1c1e] border-2 border-inputBorderColor p-4 mt-2 rounded space-y-5">
                                {section.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                      <span className="w-2 h-2 rounded-full bg-PrimaryPurple" />
                                      <span className="text-gray-300">{item}</span>
                                    </div>
                                    <span className="text-xs">21:03</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                </div>       
          </aside>
        </div>
      </section>
  );
};

export default RecruitLessons;
