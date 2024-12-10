import { useState, useEffect, useContext } from "react";
import { CreateContext } from "../Context/Context";
import Modal from "./modal";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CourseLandingPage = () => {
  const navigate = useNavigate();
  const { course, setCourse } = useContext(CreateContext).course;

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("courseBuilder"));
    if (savedData) {
      setCourse((prev) => ({
        ...prev,
        course_title: savedData.course_title,
        course_description: savedData.course_description,
        price: savedData.price,
        modules: savedData.modules,
      }));
    }
  }, []);

  useEffect(() => {
    if (course.course_title || course.course_description || course.price) {
      localStorage.setItem("courseBuilder", JSON.stringify({ ...course }));
    }
  }, [course.course_title, course.course_description, course.price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const roundUp = () => {
    setCourse((prev) => ({
      ...prev,
      price: Number(course.price).toFixed(2),
    }));
  };

  const isValid =
    course.course_title &&
    course.course_description &&
    course.price &&
    !isNaN(course.price);

  const handleNavigateToCourseBuilder = () => {
    if (isValid) {
      navigate("/app/recruiter/create-course/create-resource");
    } else {
      toast.error("Fields cannot be empty");
    }
  };

  return (
    <div>
      <Modal />
      <article className="flex flex-col gap-y-4">
        <div className="text-white text-lg w-full mt-4">
          Course Landing Page
        </div>
        <div className="text-white">
          <h2>Course title</h2>
          <p className="text-sm font-light">
            You must enter at least 4 learning objectives or outcomes that
            learners can expect to achieve after completing your <br /> course.
          </p>
          <input
            type="text"
            name="course_title"
            value={course.course_title}
            onChange={handleChange}
            className="h-12 mt-2 px-2 text-sm bg-inputBackground border-inputBorderColor border rounded-md w-[70%]"
          />
        </div>

        {/* <div className="text-white">
      <h2>Course description</h2>
      <p className="font-light">
        List the required skills, experience, tools or equipment
        learners should have prior to taking your course. <br />
        If there are no requirements, use this space as an opportunity
        to lower the barrier for beginners.
      </p>
      <input type="fil" className="h-12 bg-inputBackground border-inputBorderColor border rounded-md" />
    </div> */}

        <div className="text-white">
          <h2>Course description</h2>
          <p className="font-light text-sm">
            List the required skills, experience, tools or equipment learners
            should have prior to taking your course. <br />
            If there are no requirements, use this space as an opportunity to
            lower the barrier for beginners.
          </p>
          <textarea
            name="course_description"
            value={course.course_description}
            onChange={handleChange}
            placeholder="Course Description"
            className="min-h-28 mt-2 text-xs px-2 py-2 bg-inputBackground border-inputBorderColor border rounded-md w-[70%]"
          ></textarea>
        </div>

        <div className="text-white">
          <h2 className="">Course Price ($)</h2>
          <input
            name="price"
            value={course.price}
            onBlur={roundUp}
            onChange={handleChange}
            className="bg-inputBackground border-inputBorderColor h-8 px-2 py-2"
          />
        </div>
      </article>
      <button
        disabled={!isValid}
        onClick={handleNavigateToCourseBuilder}
        className={`mt-2 w-16 px-2 py-1 ${
          isValid ? "bg-PrimaryPurple" : "bg-transparent border"
        } rounded-md text-white`}
      >
        Next
      </button>
    </div>
  );
};

export default CourseLandingPage;
