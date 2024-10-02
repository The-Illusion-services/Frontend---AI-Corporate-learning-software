import React, { useState } from "react";
import LessonImage from "../../assets/lessons/lessonGallery.svg";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";

import Profile from "../../assets/lessons/profile.svg";


const RecruitLessonsGallery = () => {
    
      return (
        <div className="bg-mobileBackground min-h-screen py-8 px-4 lg:ml-[16%]">
          <div className="flex justify-between bg-mobileBackground text-white h-auto">

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
          {/* Responsive Image Grid */}
          <h2 className="text-white text-2xl">Courses</h2>
          <div className="relative">
            <div className="absolute bottom-3 left-3 flex text-2xl text-textGray">
            <CiSearch />
            </div>
            <div className="mb-5">
            <input
                type="search"
                    className="border-inputborderGreen text-textGray rounded-lg px-2 py-3 mt-1 text-sm w-[50%] bg-inputBackground focus:outline-PrimaryPurple focus:ring focus:border-PrimaryPurple"
                    placeholder="       ...Search"
                />
            </div>
        </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 space-x-3 space-y-3">
            {/* {images.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md m-3">
                <img src={LessonImage} alt={image.alt} className="object-cover w-full h-48 transform hover:scale-110 transition duration-300 ease-in-out" />
                <p key={image.text}></p>
              </div>
            ))} */}

            <div className="space-y-3 border-inputBorderColor border p-5 rounded-lg">
                <img 
                    src={LessonImage} 
                    className="object-cover rounded-lg"
                />
                <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32" >Intermediate</p>
                <h3 className="text-white font-bold">Designing a Portfolio</h3>
                <div className="flex text-textGray text-sm items-center justify-between">
                    <p>12 Lessons</p>
                    <p>24hrs 40mins</p>
                </div>
            </div>

            <div className="space-y-3 border-inputBorderColor border p-5 rounded-lg">
                <img 
                    src={LessonImage} 
                    className="object-cover rounded-lg"
                />
                <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32" >Intermediate</p>
                <h3 className="text-white font-bold">Designing a Portfolio</h3>
                <div className="flex text-textGray text-sm items-center justify-between">
                    <p>12 Lessons</p>
                    <p>24hrs 40mins</p>
                </div>
            </div>

            <div className="space-y-3 border-inputBorderColor border p-5 rounded-lg">
                <img 
                    src={LessonImage} 
                    className="object-cover rounded-lg"
                />
                <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32" >Intermediate</p>
                <h3 className="text-white font-bold">Designing a Portfolio</h3>
                <div className="flex text-textGray text-sm items-center justify-between">
                    <p>12 Lessons</p>
                    <p>24hrs 40mins</p>
                </div>
            </div>

            <div className="space-y-3 border-inputBorderColor border p-5 rounded-lg">
                <img 
                    src={LessonImage} 
                    className="object-cover rounded-lg"
                />
                <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32" >Intermediate</p>
                <h3 className="text-white font-bold">Designing a Portfolio</h3>
                <div className="flex text-textGray text-sm items-center justify-between">
                    <p>12 Lessons</p>
                    <p>24hrs 40mins</p>
                </div>
            </div>

            <div className="space-y-3 border-inputBorderColor border p-5 rounded-lg">
                <img 
                    src={LessonImage} 
                    className="object-cover rounded-lg"
                />
                <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32" >Intermediate</p>
                <h3 className="text-white font-bold">Designing a Portfolio</h3>
                <div className="flex text-textGray text-sm items-center justify-between">
                    <p>12 Lessons</p>
                    <p>24hrs 40mins</p>
                </div>
            </div>

            <div className="space-y-3 border-inputBorderColor border p-5 rounded-lg">
                <img 
                    src={LessonImage} 
                    className="object-cover rounded-lg"
                />
                <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32" >Intermediate</p>
                <h3 className="text-white font-bold">Designing a Portfolio</h3>
                <div className="flex text-textGray text-sm items-center justify-between">
                    <p>12 Lessons</p>
                    <p>24hrs 40mins</p>
                </div>
            </div>

            <div className="space-y-3 border-inputBorderColor border p-5 rounded-lg">
                <img 
                    src={LessonImage} 
                    className="object-cover rounded-lg"
                />
                <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32" >Intermediate</p>
                <h3 className="text-white font-bold">Designing a Portfolio</h3>
                <div className="flex text-textGray text-sm items-center justify-between">
                    <p>12 Lessons</p>
                    <p>24hrs 40mins</p>
                </div>
            </div>

            <div className="space-y-3 border-inputBorderColor border p-5 rounded-lg">
                <img 
                    src={LessonImage} 
                    className="object-cover rounded-lg"
                />
                <p className="text-yellow-500 bg-yellow-700 bg-opacity-10 rounded-xl text-center p-1 w-32" >Intermediate</p>
                <h3 className="text-white font-bold">Designing a Portfolio</h3>
                <div className="flex text-textGray text-sm items-center justify-between">
                    <p>12 Lessons</p>
                    <p>24hrs 40mins</p>
                </div>
            </div>
          </div>
        </div>
      );
  };
  
  export default RecruitLessonsGallery;