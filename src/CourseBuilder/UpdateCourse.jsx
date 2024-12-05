import React from "react";
import CourseBuilder from "./courseBuilder";

const UpdateCourse = () => {
  const savedData = JSON.parse(localStorage.getItem("manageCourse"));
  const publishUrl = `https://illusion-6ga5.onrender.com/api/update-module/${savedData.id}/`;
  return (
    <CourseBuilder
      cacheKey={"manageCourse"}
      publishUrl={publishUrl}
      requestMethod="PATCH"
    />
  );
};

export default UpdateCourse;
