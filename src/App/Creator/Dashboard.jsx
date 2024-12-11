import React from "react";
import DashboardBG from "../../assets/dashboard/dashboardBG.svg";
import MobileDashboardBG from "../../assets/dashboard/mobileDashboardBG.svg";
import Piggy from "../../assets/dashboard/piggymobile.svg";
import PiggyDesktop from "../../assets/dashboard/desktopPiggy.svg";
import Courses from "../../assets/dashboard/courses.svg";
import Lesson from "../../assets/dashboard/lessons.svg";
import Quiz from "../../assets/dashboard/quiz.svg";
import AssignmentImage from "../../assets/dashboard/assignmentImage.svg";
import chartTemp from "../../assets/dashboard/chartTemp.svg";
import chartTempDesktop from "../../assets/dashboard/chartTempDesktop.svg";
import PlayButtonn from "../../assets/dashboard/playButton.svg";
import StakingChart from "../../assets/dashboard/stakingChart.svg";
import CourseChart from "../../assets/dashboard/courseChart.svg";

const RecruiterDashboard = () => {
  return (
    <div className="bg-mobileBackground min-h-screen  relative ">
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
              <div className="z-10 relative py-3 lg:pt-0 px-4 lg:px-6 w-full text-white lg:flex lg:items-center lg:w-full">
                <div className="mb-5 lg:mb-0">
                  <h2 className="text-xl lg:text-[33.92px] font-semibold">
                    Hello Illusion👋🏻
                  </h2>
                  <p className="text-xs lg:mt-5 lg:text-[18px] xl:text-[20.49px]">
                    Let’s Create something exciting today!
                  </p>
                </div>
                <div className="flex w-full lg:w-auto items-center">
                  <img
                    src={Piggy}
                    alt=""
                    className="lg:hidden"
                    width={70}
                    height={70}
                  />
                  <img
                    src={PiggyDesktop}
                    alt=""
                    className="lg:block hidden lg:ml-32"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
            {/*highlights*/}
            <div className="w-full overflow-x-hidden mt-6">
              <div className="flex overflow-x-auto scrollbar-hide gap-3">
                <div className="bg-[#1b1c1e] border-2 border-inputBorderColor h-28 min-w-[220px] flex-shrink-0 md:flex-1 rounded-xl p-3">
                  <div className="flex items-center">
                    <img src={Quiz} alt="" />
                    <h4 className="text-[#999999] font-semibold ml-3 text-lg">
                      Active courses
                    </h4>
                  </div>
                  <div className="text-2xl text-white mt-4">2</div>
                </div>
                <div className="bg-[#1b1c1e] border-2 border-inputBorderColor h-28 min-w-[220px] flex-shrink-0 md:flex-1 rounded-xl p-3">
                  <div className="flex items-center">
                    <img src={Courses} alt="" />
                    <h4 className="text-[#999999] font-semibold ml-3 text-base">
                      New Sign-Ups (Today)
                    </h4>
                  </div>
                  <div className="text-2xl text-white mt-4">8</div>
                </div>
                <div className="bg-[#1b1c1e] border-2 border-inputBorderColor h-28 min-w-[220px] flex-shrink-0 md:flex-1 rounded-xl p-3">
                  <div className="flex items-center">
                    <img src={Lesson} alt="" />
                    <h4 className="text-[#999999] font-semibold ml-3 text-lg">
                      Total Active users
                    </h4>
                  </div>
                  <div className="text-2xl text-white mt-4">21</div>
                </div>
              </div>
            </div>
          </div>
          {/* Assignments */}
          <div className="mt-5 px-5 xl:mt-0 py-7 bg-[#1b1c1e] border-2 xl:w-[30%] border-inputBorderColor text-white rounded-lg">
            <div className="flex items-end justify-between mb-4">
              <h4 className="text-xl font-semibold">Recent Activity</h4>
              <button className="text-sm text-[#999999]">See all</button>
            </div>
            <div className="flex pt-5 mt-5 border-t-2 border-inputBorderColor border-solid">
              <img
                src={AssignmentImage}
                alt=""
                width={50}
                height={50}
                className="flex flex-shrink-0"
              />
              <div className="ml-4">
                <p className="text-base font-semibold mb-2">
                  Created a design course
                </p>
                <p className="text-[#999999] text-sm">Aug 23, 2024</p>
              </div>
              <div className="self-end justify-self-end ml-auto text-[#34C759]">
                Due
              </div>
            </div>
            <div className="flex pt-5 mt-5 border-t-2 border-inputBorderColor border-solid">
              <img
                src={AssignmentImage}
                alt=""
                width={50}
                height={50}
                className="flex flex-shrink-0"
              />
              <div className="ml-4">
                <p className="text-base font-semibold mb-2">
                  Created a blockchain development course...
                </p>
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
            {/* Financials */}
            <div className="flex overflow-x-auto scrollbar-hide gap-3 mt-5">
              <div className="bg-[#1b1c1e] border-2 border-inputBorderColor h-28 min-w-[240px] sm:flex-1 flex-shrink-0 lg:flex-1 rounded-xl p-3">
                <div className="flex items-center">
                  <img src={Courses} alt="" />
                  <h4 className="text-[#999999] font-semibold ml-3 text-lg">
                    Total Tokens Staked
                  </h4>
                </div>
                <div className="text-2xl text-white mt-4">$20,000</div>
              </div>
              <div className="bg-[#1b1c1e] border-2 border-inputBorderColor h-28 min-w-[240px] sm:flex-1 flex-shrink-0 lg:flex-1 rounded-xl p-3">
                <div className="flex items-center">
                  <img src={Lesson} alt="" />
                  <h4 className="text-[#999999] font-semibold ml-3 text-lg">
                    Revenue (This Month)
                  </h4>
                </div>
                <div className="text-2xl text-white mt-4">$50,000</div>
              </div>
            </div>
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
              <div className="flex w-full flex-col sm:flex-row h-full justify-evenly">
                <div className="flex items-center flex-col mb-10 sm:mb-0">
                  <h4 className="mb-8 font-semibold">Staking Distribution</h4>
                  <img src={StakingChart} alt="" />
                </div>
                <div className="flex items-center flex-col">
                  <h4 className="mb-8 font-semibold">Course Popularity</h4>
                  <img src={CourseChart} alt="" />
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

export default RecruiterDashboard;
