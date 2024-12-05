import React, { useState, useEffect, useContext } from "react";
import { CreateContext } from "../Context/Context";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";
import ReactQuill from "react-quill";
import PreviewCourse from "./previewCourse";
import "react-quill/dist/quill.snow.css";

const CourseBuilder = ({ cacheKey, publishUrl, requestMethod }) => {
  const { auth, loader } = useContext(CreateContext);
  const { token } = auth;
  const { setIsLoading } = loader;
  const [formElements, setFormElements] = useState([]);
  const [preview, setPreview] = useState(false);

  const handlePreview = () => {
    setPreview(true);
  };
  const handleCreate = () => {
    setPreview(false);
  };

  const [course, setCourse] = useState({
    course_title: "",
    course_description: "",
    price: "",
    modules: [],
  });

  const checkLessonsFieldValidity = () => {
    let validity = true;
    course.modules.map((module) => {
      const invalidLessons = module.lessons.filter((lesson) => {
        return lesson.title === "" || lesson.description === "";
      });
      if (invalidLessons.length >= 1) {
        return (validity = false);
      }
    });
    return validity;
  };
  const publishCourse = async () => {
    if (course.modules.length >= 1 && checkLessonsFieldValidity()) {
      setIsLoading(true);

      try {
        const response = await fetch(
          publishUrl,
          {
            method: requestMethod,
            body: JSON.stringify(course),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          toast.success("Course Published!");
          console.log(responseData);
          localStorage.removeItem(cacheKey);
        }
      } catch (err) {
        return console.log("error");
      }

      setIsLoading(false);
    } else {
      toast.error("Lessons fields or title cannot be empty");
    }
  };

  useEffect(() => {
    // Retrieve the saved course data from localStorage
    const savedData = JSON.parse(localStorage.getItem(cacheKey));

    if (savedData) {
      setCourse((prev) => ({
        course_title: savedData.course_title || prev.course_title,
        course_description:
          savedData.course_description || prev.course_description,
        price: savedData.price || prev.price,
        modules: savedData.modules || prev.modules,
      }));

      setFormElements(savedData.modules || []);
    }
  }, []); // Only run once on component mount

  // Save course state to localStorage whenever formElements change
  useEffect(() => {
    const updatedCourse = {
      ...course,
      modules: formElements, // Update modules with formElements
    };

    // Save the updated course object to localStorage
    if (updatedCourse.course_title && updatedCourse.course_description) {
      console.log("dds");
      localStorage.setItem(cacheKey, JSON.stringify(updatedCourse));
    }
  }, [formElements]); // Only trigger when formElements change

  const addModule = () => {
    const newModule = {
      index: formElements.length + 1,
      id: Date.now(), // Unique ID for each element
      title: `Module ${formElements.length + 1}`,
      lessons: [
        {
          index: 1,
          id: Date.now(),
          type: "article",
          title: `Lesson 1`,
          description: "",
        },
      ],
    };
    setFormElements([...formElements, newModule]);
    setCourse((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        {
          title: newModule.title,
          lessons: [
            {
              title: newModule.lessons[0].title,
              description: newModule.lessons[0].description,
            },
          ],
        },
      ],
    }));
  };

  const addLesson = (lessons, moduleIndex) => {
    const newLesson = {
      index: lessons.length + 1,
      id: Date.now(),
      type: "article",
      title: `Lesson ${lessons.length + 1}`,
      description: "",
    };

    const updatedFormElements = formElements.map((element, idx) => {
      if (idx === moduleIndex) {
        return {
          ...element,
          lessons: [...element.lessons, newLesson],
        };
      }
      return element;
    });

    setFormElements(updatedFormElements);

    const updatedModules = updatedFormElements.map((module) => ({
      title: module.title || "Untitled Module", // Add default title if missing
      lessons: module.lessons.map((lesson) => ({
        title: lesson.title || "Untitled Lesson", // Add default title if missing
        description: lesson.description || "",
      })),
    }));
    setCourse((prev) => ({
      ...prev,
      modules: updatedModules,
    }));
  };

  const handleModuleTitleChange = (e, moduleIndex) => {
    const updatedFormElements = formElements.map((element, idx) => {
      if (idx === moduleIndex) {
        return { ...element, title: e.target.textContent };
      }
      return element; // Ensure other elements are returned unchanged
    });

    setFormElements(updatedFormElements);

    setCourse((prev) => ({
      ...prev,
      modules: updatedFormElements,
    }));
  };

  const handleLessonChange = (moduleIndex, lessonIndex, field, value) => {
    const updatedFormElements = [...formElements];
    const moduleToUpdate = updatedFormElements[moduleIndex];
    const updatedLessons = [...moduleToUpdate.lessons];
    updatedLessons[lessonIndex][field] = value;
    moduleToUpdate.lessons = updatedLessons;
  
    updatedFormElements[moduleIndex] = moduleToUpdate;
    setFormElements(updatedFormElements);
  
    setCourse((prev) => ({
      ...prev,
      modules: updatedFormElements.map((module) => ({
        title: module.title || "Untitled Module",
        lessons: module.lessons.map((lesson) => ({
          title: lesson.title || "Untitled Lesson",
          description: lesson.description || "",
        })),
      })),
    }));
  };
  

  const deleteLesson = (moduleIndex, lessonId) => {
    setFormElements((currFormElements) => {
      return currFormElements.map((formElement, idx) => {
        if (idx === moduleIndex) {
          const updatedLessons = formElement.lessons
            .filter((element) => element.id !== lessonId)
            .map((element, index) => ({
              ...element,
              index: index + 1,
            }));

          return {
            ...formElement,
            lessons: updatedLessons,
          };
        }
        setCourse(() => {
          return { ...course, modules: formElement };
        });

        return formElement;
      });
    });
  };

  const deleteModule = (moduleId) => {
    setFormElements((prev) => {
      const updatedFormElements = prev.filter((currFormElement) => {
        return currFormElement.id !== moduleId;
      });

      // Update course with the new formElements here
      setCourse((prevCourse) => {
        return { ...prevCourse, modules: updatedFormElements };
      });
      return updatedFormElements;
    });
  };

  const renderElement = (element, moduleIndex) => {
    return (
      <section
        key={moduleIndex}
        className=" bg-[#161616] mx-auto lg:mx-0 px-4 py-4 text-white w-[95%] lg:w-[60%]"
      >
        <article className="flex justify-between items-center">
          <div className="flex flex-row gap-x-2 w-[80%]">
            <h2>Module:</h2>
            <div
              contentEditable
              suppressContentEditableWarning={true}
              className="bg-inputBackground rounded-sm border-PrimaryPurple border w-[60%] px-2"
              onBlur={(e) => handleModuleTitleChange(e, moduleIndex)}
            >
              {element.title}
            </div>
          </div>
          <MdDeleteOutline
            onClick={() => deleteModule(element.id)}
            className="text-2xl hover:text-PrimaryPurple cursor-pointer"
            title="delete"
          />
        </article>

        {element.lessons?.map((lesson, lessonIndex) => (
          <article
            key={lesson.id}
            className="gap-y-4  flex flex-col text-sm bg-inputBackground border border-inputBorderColor mt-4 rounded-md"
          >
            <div className="gap-x-2 flex justify-between  h-12 items-center border-b border-inputBorderColor px-2">
              <div className="flex gap-x-2 ">
                <h2>Lesson {lesson.index}</h2>
                <span>{lesson.type}</span>
              </div>
              <div>
                <MdDeleteOutline
                  onClick={() => deleteLesson(moduleIndex, lesson.id)}
                  className="text-lg hover:text-PrimaryPurple cursor-pointer"
                  title="delete"
                />
              </div>
            </div>
            <section className="flex flex-col py-2 gap-y-2">
              <div className="flex flex-col px-2">
                <label>Lesson Title</label>
                <input
                  value={lesson.title}
                  onChange={(e) =>
                    handleLessonChange(
                      moduleIndex,
                      lessonIndex,
                      "title",
                      e.target.value
                    )
                  }
                  className="h-12 bg-inputBackground border-inputBorderColor border rounded-md px-2"
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
          onClick={() => addLesson(element.lessons, moduleIndex)}
        >
          Add new lesson
        </span>
      </section>
    );
  };

  return (
    <main className="flex flex-col gap-y-4 py-4 bg-[#1B1C1E]">
      <h2 className="font-bold mt-4 text-xxl text-white text-center lg:text-start">
        Create Resource
      </h2>

      <section>
        {!preview ? (
          formElements.map((element, index) => renderElement(element, index))
        ) : (
          <PreviewCourse course={course} />
        )}
        <div className="w-full flex gap-x-10 ">
          <span
            className="text-start text-PrimaryPurple cursor-pointer w-fit rounded-md px-2 py-1"
            onClick={addModule}
          >
            Add new module
          </span>
          <button
            onClick={publishCourse}
            className="hover:bg-PrimaryPurple w-fit  px-2 rounded-md text-white"
          >
            Publish Course
          </button>
          {!preview ? (
            <button
              onClick={handlePreview}
              className="hover:bg-PrimaryPurple  rounded-md w-fit px-2 py-1 text-white"
            >
              Preview Course
            </button>
          ) : (
            <button
              onClick={handleCreate}
              className="hover:bg-PrimaryPurple rounded-md w-fit px-2 py-1 text-white"
            >
              Edit Course
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default CourseBuilder;