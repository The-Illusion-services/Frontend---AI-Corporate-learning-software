import React, { useState, useEffect, useContext, useCallback } from "react";
import { CreateContext } from "../Context/Context";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import PreviewCourse from "../App/Learner/ViewCourse";
import "react-quill/dist/quill.snow.css";

const CourseBuilder = ({ cacheKey, publishUrl, requestMethod }) => {
  const navigate = useNavigate();
  const { auth, loader, setCourseInView } = useContext(CreateContext);
  const { setCourse, course } = useContext(CreateContext).course;
  const { token } = auth;
  const { setIsLoading } = loader;
  const [formElements, setFormElements] = useState([]);
  const [preview, setPreview] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Save course state to localStorage whenever formElements change
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(cacheKey));

    if (savedData) {
      setCourse(savedData);
      setFormElements(savedData.modules || []);
      setHasInitialized(true); // Mark initialization complete
    }
  }, [cacheKey, setCourse]);

  useEffect(() => {
    if (!hasInitialized) return; // Skip effect during initialization

    localStorage.setItem(
      cacheKey,
      JSON.stringify({ ...course, modules: formElements })
    );
  }, [formElements, hasInitialized, course, cacheKey]);

  const handleCreate = () => setPreview(false);
  const handlePreview = () => {
    setCourseInView(course);
    setPreview(true);
  };

  const checkLessonsFieldValidity = () => {
    return course.modules.every((module) =>
      module.lessons.every((lesson) => lesson.title && lesson.description)
    );
  };

  const publishCourse = async () => {
    if (course.modules.length < 1 || !checkLessonsFieldValidity()) {
      toast.error("Lessons fields or title cannot be empty");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(publishUrl, {
        method: requestMethod,
        body: JSON.stringify(course),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();
      if (response.ok) {
        toast.success("Course Published!");
        localStorage.removeItem(cacheKey);
        navigate("/app/creator/course-management");
      } else {
        toast.error(responseData.detail);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to publish course");
    } finally {
      setIsLoading(false);
    }
  };

  const addModule = () => {
    const newModule = {
      id: Date.now(),
      title: `Module ${formElements.length + 1}`,
      lessons: [{ id: Date.now(), title: "Lesson 1", description: "" }],
    };
    const updatedModules = [...formElements, newModule];
    setFormElements(updatedModules);
    setCourse((prev) => ({ ...prev, modules: updatedModules }));
  };

  const addLesson = useCallback(
    (moduleIndex) => {
      const newLesson = {
        id: Date.now(),
        title: `Lesson ${formElements[moduleIndex].lessons.length + 1}`,
        description: "",
      };
      const updatedModules = formElements.map((module, idx) =>
        idx === moduleIndex
          ? { ...module, lessons: [...module.lessons, newLesson] }
          : module
      );
      setFormElements(updatedModules);
      setCourse((prev) => ({ ...prev, modules: updatedModules }));
    },
    [formElements, setCourse]
  );

  const handleModuleTitleChange = (moduleIndex, newTitle) => {
    const updatedModules = formElements.map((module, idx) =>
      idx === moduleIndex ? { ...module, title: newTitle } : module
    );
    setFormElements(updatedModules);
    setCourse((prev) => ({ ...prev, modules: updatedModules }));
  };

  const handleLessonChange = (moduleIndex, lessonIndex, field, value) => {
    const updatedModules = formElements.map((module, idx) =>
      idx === moduleIndex
        ? {
            ...module,
            lessons: module.lessons.map((lesson, lIdx) =>
              lIdx === lessonIndex ? { ...lesson, [field]: value } : lesson
            ),
          }
        : module
    );
    setFormElements(updatedModules);
    setCourse((prev) => ({ ...prev, modules: updatedModules }));
  };

  const deleteLesson = (moduleIndex, lessonId) => {
    const updatedModules = formElements.map((module, idx) =>
      idx === moduleIndex
        ? {
            ...module,
            lessons: module.lessons.filter((lesson) => lesson.id !== lessonId),
          }
        : module
    );
    setFormElements(updatedModules);
    setCourse((prev) => ({ ...prev, modules: updatedModules }));
  };

  const deleteModule = (moduleId) => {
    const updatedModules = formElements.filter(
      (module) => module.id !== moduleId
    );
    setFormElements(updatedModules);
    setCourse((prev) => ({ ...prev, modules: updatedModules }));
  };

  const renderElement = (element, moduleIndex) => (
    <section
      key={moduleIndex}
      className=" bg-[#161616] ml-10 mx-auto lg:ml-4 px-4 py-4 text-white w-[95%] lg:w-[60%]"
    >
      <article className="flex justify-between items-center">
        <div className="flex flex-row gap-x-2 w-[80%]">
          <h2>Module:</h2>
          <div
            contentEditable
            suppressContentEditableWarning={true}
            className="bg-inputBackground rounded-sm border-PrimaryPurple border w-[60%] px-2"
            onBlur={(e) =>
              handleModuleTitleChange(moduleIndex, e.target.textContent)
            }
          >
            {element.title}
          </div>
          <MdDeleteOutline
            onClick={() => deleteModule(element.id)}
            className="text-2xl hover:text-PrimaryPurple cursor-pointer"
            title="delete"
          />
        </div>
      </article>

      {element.lessons.map((lesson, lessonIndex) => (
        <article
          key={lesson.id}
          className="gap-y-4  flex flex-col text-sm bg-inputBackground border border-inputBorderColor mt-4 rounded-md"
        >
          <div className="gap-x-2 flex justify-between  h-12 items-center border-b border-inputBorderColor px-2">
            <div className="flex gap-x-2 ">
              <h2>Lesson {lesson.index}</h2>
              <MdDeleteOutline
                onClick={() => deleteLesson(moduleIndex, lesson.id)}
                className="text-lg hover:text-PrimaryPurple cursor-pointer"
              />
            </div>
          </div>

          <section className="flex flex-col py-2 gap-y-2">
            <div className="flex flex-col px-2">
              <label>Lesson Title</label>
              <input
                value={lesson.title}
                className="h-12 bg-inputBackground border-inputBorderColor border rounded-md px-2"
                onChange={(e) =>
                  handleLessonChange(
                    moduleIndex,
                    lessonIndex,
                    "title",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="flex flex-col px-2">
              <label>Lesson Content</label>
              <ReactQuill
                theme="snow"
                value={lesson.description}
                onChange={(value) =>
                  handleLessonChange(
                    moduleIndex,
                    lessonIndex,
                    "description",
                    value
                  )
                }
              />
            </div>
          </section>
        </article>
      ))}
      <span
        className="text-PrimaryPurple flex items-center cursor-pointer"
        onClick={() => addLesson(moduleIndex)}
      >
        Add new lesson
      </span>
    </section>
  );

  return (
    <main className="flex flex-col gap-y-4 py-4 bg-[#1B1C1E]">
      <h2 className="font-bold mt-4 text-xxl text-white text-center lg:text-start ml-4">
        Create Resource
      </h2>

      {!preview ? (
        formElements.map((element, index) => renderElement(element, index))
      ) : (
        <PreviewCourse />
      )}

      <div className="w-full flex gap-x-10 ml-4 ">
        <button
          onClick={addModule}
          className="text-start text-PrimaryPurple cursor-pointer w-fit rounded-md px-2 py-1"
        >
          Add new module
        </button>
        <button
          onClick={publishCourse}
          className="hover:bg-PrimaryPurple w-fit  px-2 rounded-md text-white"
        >
          Publish Course
        </button>
        <button onClick={handlePreview}>
          {preview ? "Edit Course" : "Preview Course"}
        </button>
      </div>
    </main>
  );
};

export default CourseBuilder;
