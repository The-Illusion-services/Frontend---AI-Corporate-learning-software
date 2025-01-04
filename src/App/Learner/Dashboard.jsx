import React from "react";
import DashboardBG from "../../assets/dashboard/dashboardBG.svg";
import MobileDashboardBG from "../../assets/dashboard/mobileDashboardBG.svg";
import Medal from "../../assets/dashboard/medal.svg";
import MedalDesktop from "../../assets/dashboard/medalDesktop.svg";
import Courses from "../../assets/dashboard/courses.svg";
import Lesson from "../../assets/dashboard/lessons.svg";
import Quiz from "../../assets/dashboard/quiz.svg";
import AssignmentImage from "../../assets/dashboard/assignmentImage.svg";
import chartTemp from "../../assets/dashboard/chartTemp.svg";
import chartTempDesktop from "../../assets/dashboard/chartTempDesktop.svg";
import PlayButtonn from "../../assets/dashboard/playButton.svg";
import BackButton from "../../assets/dashboard/backbutton.svg";
import ForwardButton from "../../assets/dashboard/forwardbutton.svg";
import LessonImage from "../../assets/dashboard/lessonImage.svg";
import Clock from "../../assets/dashboard/clock.svg";
import PaymentCheckout from "../../Payment/PaymentCheckout";
const RecruitDashboard = () => {
  return (
    <div className="bg-mobileBackground min-h-screen lg:w-full relative ">
      <div className="flex flex-col h-full pt-5 pb-28 lg:p-7 px-5">
        <div className="xl:flex xl:gap-5">
          {/* welcome, highlights, assignments */}
          <div className="xl:w-[70%]">
            <div className="relative w-full h-40 overflow-hidden rounded-xl flex items-center">
              {/* welcome */}
              <img
                src={MobileDashboardBG}
                alt="background"
                className="absolute w-full lg:hidden"
              />
              <img
                src={DashboardBG}
                alt="background"
                className="absolute w-full hidden lg:block"
              />
              <div className="z-10 relative py-3 lg:pt-0 px-4 lg:px-6 w-full text-white lg:flex lg:justify-between lg:items-center lg:w-full">
                <div className="mb-5 lg:mb-0">
                  <h2 className="text-xl lg:text-[33.92px] font-semibold">
                    Hello Harsh👋🏻
                  </h2>
                  <p className="text-xs lg:mt-5 lg:text-[18px] xl:text-[20.49px]">
                    Let’s learn something new today!
                  </p>
                </div>
                <div className="flex w-full lg:w-auto items-center">
                  <img src={Medal} alt="" className="lg:hidden" />
                  <img
                    src={MedalDesktop}
                    alt=""
                    className="lg:block hidden lg:h-[70px] lg:w-[70px] xl:w-[104.87px] xl:h-[125.92px]"
                  />
                  <div className="w-11/12 lg:w-[130px] ml-2">
                    <p className="leading-tight lg:text-xl">Intermediate</p>
                    <div className="flex items-center">
                      <div className="w-[60%] h-1 bg-customGreen mr-2 rounded-lg">
                        <div className="w-4/5 h-full bg-green-500 rounded-md"></div>
                      </div>
                      <p className="lg:text-sm">80%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*highlights*/}
            <div className="w-full overflow-x-hidden mt-6">
              <div className="flex overflow-x-auto scrollbar-hide gap-3">
                <div className="bg-[#1b1c1e] border-2 border-inputBorderColor h-28 w-[240px] flex-shrink-0 lg:flex-1 rounded-xl p-3">
                  <div className="flex items-center">
                    <img src={Courses} alt="" />
                    <h4 className="text-[#999999] font-semibold ml-3 text-sm">
                      Completed courses
                    </h4>
                  </div>
                  <div className="text-2xl text-white mt-4">4</div>
                </div>
                <div className="bg-[#1b1c1e] border-2 border-inputBorderColor h-28 w-[240px] flex-shrink-0 lg:flex-1 rounded-xl p-3">
                  <div className="flex items-center">
                    <img src={Lesson} alt="" />
                    <h4 className="text-[#999999] font-semibold ml-3 text-sm">
                      Ongoing lessons
                    </h4>
                  </div>
                  <div className="text-2xl text-white mt-4">4</div>
                </div>
                <div className="bg-[#1b1c1e] border-2 border-inputBorderColor h-28 w-[240px] flex-shrink-0 lg:flex-1 rounded-xl p-3">
                  <div className="flex items-center">
                    <img src={Quiz} alt="" />
                    <h4 className="text-[#999999] font-semibold ml-3 text-sm">
                      Quiz
                    </h4>
                  </div>
                  <div className="text-2xl text-white mt-4">4</div>
                </div>
              </div>
            </div>
          </div>
          {/* Assignments */}
          <div className="mt-5 px-5 xl:mt-0 py-7 bg-[#1b1c1e] border-2 xl:w-[30%] border-inputBorderColor text-white rounded-lg">
            <div className="flex items-end justify-between mb-4">
              <h4 className="text-xl font-semibold">Assignments</h4>
              <button className="text-sm text-[#999999]">See all</button>
            </div>
            <div className="flex pt-5 mt-5 border-t-2 border-inputBorderColor border-solid">
              <img src={AssignmentImage} alt="" width={50} height={50} />
              <div className="ml-4">
                <p className="text-xl font-semibold">Designing a Portfolio</p>
                <p className="text-[#999999] text-sm">Aug 23, 2024</p>
              </div>
              <div className="self-end justify-self-end ml-auto text-[#34C759]">
                Due
              </div>
            </div>
            <div className="flex pt-5 mt-5 border-t-2 border-inputBorderColor border-solid">
              <img src={AssignmentImage} alt="" width={50} height={50} />
              <div className="ml-4">
                <p className="text-xl font-semibold">Designing a Portfolio</p>
                <p className="text-[#999999] text-sm">Aug 23, 2024</p>
              </div>
              <div className="self-end justify-self-end ml-auto text-[#34C759]">
                Due
              </div>
            </div>
          </div>
        </div>

        {/* chart, ongoing, upcoming */}
        <div className="xl:flex xl:gap-5 w-full">
          <div className="xl:w-[68.8%] border-">
            {/* chart */}
            <div className="mt-5 px-5 py-7 bg-[#1b1c1e] border-2 border-inputBorderColor text-white rounded-lg">
              <div className="flex items-end justify-between mb-4 border-b-2 border-inputBorderColor pb-5">
                <h4 className="text-xl font-semibold">Learning Statistics</h4>
                <button className="">Avg: 6hrs/mon</button>
              </div>
              {/* chart, using an image, should be temporary */}
              <div className="w-full">
                <img src={chartTemp} alt="" className="w-full lg:hidden" />
                <img
                  src={chartTempDesktop}
                  alt=""
                  className="w-full hidden lg:block"
                />
              </div>
            </div>
            {/* ongoing */}
            <div className="mt-5 px-5 py-7 bg-[#1b1c1e] border-2 border-inputBorderColor text-white rounded-lg w-full">
              <div className="flex items-center justify-between mb-4 w-full">
                <h4 className="text-xl font-semibold">Ongoing lessons</h4>
                <div className="flex items-center gap-3">
                  <button>
                    <img src={BackButton} alt="" />
                  </button>
                  <button>
                    <img src={ForwardButton} alt="" />
                  </button>
                </div>
              </div>
              <div className="overflow-hidden w-full">
                <div className="overflow-scroll scrollbar-hide flex gap-8">
                  <div className="w-[275px] lg:w-[328.5px] h-[314px] lg:h-[350px] bg-[#1b1c1e] border-2 border-inputBorderColor p-4 rounded-xl flex flex-col flex-shrink-0">
                    <img src={LessonImage} alt="" />
                    <div className="flex items-center mt-5 justify-between">
                      <div className="px-3 py-1 text-sm rounded-full bg-[#ffcc0010] text-[#FFCC00]">
                        Intermediate
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#888888]">
                        <img src={Clock} alt="" />
                        <p>24hr 40min</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-lg font-bold">
                        Designing a Portfolio
                      </h4>
                      <div className="flex items-center">
                        <div className="w-11/12 h-1 bg-[#8e73ef1b] mr-2 rounded-lg ">
                          <div className="w-4/5 h-full bg-[#8E73EF] rounded-md"></div>
                        </div>
                        <p>80%</p>
                      </div>
                    </div>
                    <button className="w-full text-[#8E73EF] bg-[#8e73ef1b] h-10 rounded-xl my-auto self-end justify-self-end">
                      Continue
                    </button>
                  </div>
                  <div className="w-[275px] lg:w-[328.5px] h-[314px] lg:h-[350px] bg-[#1b1c1e] border-2 border-inputBorderColor p-4 rounded-xl flex flex-col flex-shrink-0">
                    <img src={LessonImage} alt="" />
                    <div className="flex items-center mt-5 justify-between">
                      <div className="px-3 py-1 text-sm rounded-full bg-[#ffcc0010] text-[#FFCC00]">
                        Intermediate
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#888888]">
                        <img src={Clock} alt="" />
                        <p>24hr 40min</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-lg font-bold">
                        Designing a Portfolio
                      </h4>
                      <div className="flex items-center">
                        <div className="w-11/12 h-1 bg-[#8e73ef1b] mr-2 rounded-lg ">
                          <div className="w-4/5 h-full bg-[#8E73EF] rounded-md"></div>
                        </div>
                        <p>80%</p>
                      </div>
                    </div>
                    <button className="w-full text-[#8E73EF] bg-[#8e73ef1b] h-10 rounded-xl my-auto self-end justify-self-end">
                      Continue
                    </button>
                  </div>
                  <div className="w-[275px] lg:w-[328.5px] h-[314px] lg:h-[350px] bg-[#1b1c1e] border-2 border-inputBorderColor p-4 rounded-xl flex flex-col flex-shrink-0">
                    <img src={LessonImage} alt="" />
                    <div className="flex items-center mt-5 justify-between">
                      <div className="px-3 py-1 text-sm rounded-full bg-[#ffcc0010] text-[#FFCC00]">
                        Intermediate
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#888888]">
                        <img src={Clock} alt="" />
                        <p>24hr 40min</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-lg font-bold">
                        Designing a Portfolio
                      </h4>
                      <div className="flex items-center">
                        <div className="w-11/12 h-1 bg-[#8e73ef1b] mr-2 rounded-lg ">
                          <div className="w-4/5 h-full bg-[#8E73EF] rounded-md"></div>
                        </div>
                        <p>80%</p>
                      </div>
                    </div>
                    <button className="w-full text-[#8E73EF] bg-[#8e73ef1b] h-10 rounded-xl my-auto self-end justify-self-end">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* upcoming */}
          <div className="mt-5 xl:w-[30%] text-white px-5 py-7 bg-[#1b1c1e] border-2 border-inputBorderColor rounded-lg h-max">
            <div className="flex items-end justify-between mb-4">
              <h4 className="text-xl font-semibold">Upcoming Events</h4>
              <button className="text-sm text-[#999999]">See all</button>
            </div>
            <div className="flex pt-5 mt-5 border-t-2 border-inputBorderColor border-solid">
              <img src={PlayButtonn} alt="" width={50} height={50} />
              <div className="ml-4">
                <p className="text-xl font-semibold">Webinar UX Design</p>
                <p className="text-[#999999] text-sm">
                  Georgy Frank • Aug 23, 9am-10am
                </p>
              </div>
            </div>
            <div className="flex pt-5 mt-5 border-t-2 border-inputBorderColor border-solid">
              <img src={PlayButtonn} alt="" width={50} height={50} />
              <div className="ml-4">
                <p className="text-xl font-semibold">Webinar UX Design</p>
                <p className="text-[#999999] text-sm">
                  Georgy Frank • Aug 23, 9am-10am
                </p>
              </div>
            </div>
            <div className="flex pt-5 mt-5 border-t-2 border-inputBorderColor border-solid">
              <img src={PlayButtonn} alt="" width={50} height={50} />
              <div className="ml-4">
                <p className="text-xl font-semibold">Webinar UX Design</p>
                <p className="text-[#999999] text-sm">
                  Georgy Frank • Aug 23, 9am-10am
                </p>
              </div>
            </div>
            <div className="flex pt-5 mt-5 border-t-2 border-inputBorderColor border-solid">
              <img src={PlayButtonn} alt="" width={50} height={50} />
              <div className="ml-4">
                <p className="text-xl font-semibold">Webinar UX Design</p>
                <p className="text-[#999999] text-sm">
                  Georgy Frank • Aug 23, 9am-10am
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitDashboard;
