import React from "react";
import CourseBuilder from "./courseBuilder";

const UpdateCourse = () => {
  const savedData = JSON.parse(localStorage.getItem("manageCourse"));
  const publishUrl = `https://illusion-6ga5.onrender.com/api/update-module/${savedData.id}/`;
  return (
    <section className=" min-h-screen bg-[#1B1C1E]">

    <CourseBuilder
      cacheKey={"manageCourse"}
      publishUrl={publishUrl}
      requestMethod="PATCH"
      />
      </section>
  );
};

export default UpdateCourse;
