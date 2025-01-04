import { useState, useEffect, useContext } from "react";
import { CreateContext } from "../Context/Context";
import Modal from "./modal";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CourseLandingPage = () => {
  const navigate = useNavigate();
  const { course, setCourse } = useContext(CreateContext).course;

  // Load course data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("courseBuilder");
    if (savedData) {
      setCourse(JSON.parse(savedData));
    }
  }, [setCourse]);

  // Update localStorage whenever course state changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (course.course_title || course.course_description || course.price) {
        localStorage.setItem("courseBuilder", JSON.stringify(course));
      }
    }, 500); // Debounced update for better performance
    return () => clearTimeout(timeoutId);
  }, [course]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Round up price on blur
  const roundUpPrice = () => {
    if (!isNaN(course.price) && course.price) {
      setCourse((prev) => ({
        ...prev,
        price: parseFloat(course.price).toFixed(2),
      }));
    }
  };

  // Validation for form completion
  const isValid =
    course.course_title?.trim() &&
    course.course_description?.trim() &&
    course.price &&
    !isNaN(course.price) &&
    course.price > 0;

  // Navigate to the course builder page if the form is valid
  const handleNavigateToCourseBuilder = () => {
    if (isValid) {
      navigate("/app/creator/course-management/create/create-resource");
    } else {
      toast.error("All fields must be completed and valid");
    }
  };

  return (
    <div className="bg-mobileBackground min-h-screen px-4 py-2 border border-inputBorderColor mt-4 rounded-md">
      <Modal />
      <article className="flex flex-col gap-y-4">
        <h1 className="text-white text-lg mt-4">Course Landing Page</h1>

        {/* Course Title */}
        <section className="text-white">
          <h2>Course Title</h2>
          <p className="text-sm font-light">
            You must enter at least 4 learning objectives or outcomes that
            learners can expect to achieve after completing your course.
          </p>
          <input
            type="text"
            name="course_title"
            placeholder="Course Title"
            value={course.course_title}
            onChange={handleChange}
            className="h-12 mt-2 px-2 text-sm bg-inputBackground border border-inputBorderColor rounded-md w-[70%]"
          />
        </section>

        {/* Course Description */}
        <section className="text-white">
          <h2>Course Description</h2>
          <p className="font-light text-sm">
            List the required skills, experience, tools, or equipment learners
            should have prior to taking your course.
          </p>
          <textarea
            name="course_description"
            value={course.course_description}
            onChange={handleChange}
            placeholder="Course Description"
            className="min-h-28 mt-2 px-2 py-2 bg-inputBackground border border-inputBorderColor rounded-md w-[70%]"
          ></textarea>
        </section>

        {/* Course Category */}
        <section className="text-white">
          <h2>Course Category</h2>
          <select
            name="course_category"
            onChange={handleChange}
            className="bg-inputBackground border border-inputBorderColor h-8 px-2"
          >
            <option value="" className="italic">
              ---Select an option---
            </option>
            <option value="Blockchain Basics">Blockchain Basics</option>
            <option value="Smart Contracts">Smart Contracts</option>
            <option value="dApp Development">dApp Development</option>
            <option value="Decentralized Governance">
              Decentralized Governance
            </option>
            <option value="Crypto Wallets">Crypto Wallets</option>
            <option value="NFTs">NFTs</option>
            <option value="DeFi">DeFi</option>
          </select>
        </section>

        {/* Course Price */}
        <section className="text-white">
          <h2>Course Price ($)</h2>
          <input
            type="number"
            name="price"
            value={course.price}
            onBlur={roundUpPrice}
            onChange={handleChange}
            placeholder="Price"
            className="bg-inputBackground border border-inputBorderColor h-8 px-2 py-2"
          />
        </section>
      </article>

      {/* Submit Button */}
      <button
        disabled={!isValid}
        onClick={handleNavigateToCourseBuilder}
        className={`mt-4 w-24 px-2 py-1 ${
          isValid ? "bg-PrimaryPurple" : "bg-transparent border"
        } rounded-md text-white`}
      >
        Next
      </button>
    </div>
  );
};

export default CourseLandingPage;
