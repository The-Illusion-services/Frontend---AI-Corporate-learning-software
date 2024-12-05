import CourseBuilder from "./courseBuilder";

const CreateCourse = () => {
  return (
    <>
      <CourseBuilder
        cacheKey={"courseBuilder"}
        publishUrl={"https://illusion-6ga5.onrender.com/api/create-course/"}
        requestMethod="POST"
      />
    </>
  );
};

export default CreateCourse;
