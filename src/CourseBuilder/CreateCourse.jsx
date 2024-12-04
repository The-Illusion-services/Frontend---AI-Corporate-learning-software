import React, { useState, useEffect, useContext } from "react";
import { CreateContext } from "../Context/Context";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateCourse = () => {
  const { auth, loader } = useContext(CreateContext);
  const { token } = auth;
  const { setIsLoading } = loader;
  const [formElements, setFormElements] = useState([]);
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
          "https://illusion-6ga5.onrender.com/api/create-course/",
          {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          toast.success("Course created!");
          console.log(responseData);
          localStorage.removeItem("courseBuilder");
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
    const savedData = JSON.parse(localStorage.getItem("courseBuilder"));

    if (savedData) {
      setCourse((prev) => ({
        course_title: savedData.title || prev.title,
        course_description: savedData.description || prev.description,
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
    if (updatedCourse.title && updatedCourse.description) {
      localStorage.setItem("courseBuilder", JSON.stringify(updatedCourse));
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
    console.log(value);
    const updatedFormElements = formElements.map((element, idx) => {
      if (idx === moduleIndex) {
        const updatedLessons = element.lessons.map((lesson, lIdx) => {
          if (lIdx === lessonIndex) {
            return {
              ...lesson,
              [field]: value, // Dynamically update title or description
            };
          }
          return lesson;
        });
        return {
          ...element,
          lessons: updatedLessons,
        };
      }
      return element;
    });

    setFormElements(updatedFormElements);
    setCourse(() => {
      return { ...course, modules: updatedFormElements };
    });
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
        return formElement;
      });
    });
  };

  const deleteModule = (moduleIndex) => {
    setFormElements((prev)=>{
      const updatedFormElements = prev.filter((currFormElement) => {
        console.log(moduleIndex);
        return currFormElement.index !== moduleIndex;
      });
      
      console.log(updatedFormElements);
      return updatedFormElements
     
    })
   
  };
  console.log(course);

  const renderElement = (element, moduleIndex) => {
    return (
      <section
        key={moduleIndex}
        className=" bg-[#161616] px-4 py-4 text-white w-[80%] lg:w-[60%]"
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
            onClick={() => deleteModule(moduleIndex)}
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
                  className="h-12 bg-inputBackground border-inputBorderColor border rounded-md"
                />
              </div>
              <div className="flex flex-col px-2">
                <label>Lesson Content</label>

                <ReactQuill
                  theme="snow"
                  value={lesson.description}
                  onChange={(e) =>
                    handleLessonChange(
                      moduleIndex,
                      lessonIndex,
                      "description",
                      e
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
      <h2 className="font-bold mt-4 text-xxl text-white">Create Resource</h2>
      {formElements.map((element, index) => renderElement(element, index))}
      <div className="w-full flex gap-x-10 ">
        <span
          className="text-start text-PrimaryPurple cursor-pointer"
          onClick={addModule}
        >
          Add new module
        </span>
        <button
          onClick={publishCourse}
          className="hover:bg-PrimaryPurple  px-4 rounded-md text-white"
        >
          Publish Course
        </button>
      </div>
    </main>
  );
};

export default CreateCourse;
