import React, { useState, useEffect, useRef } from "react";
import Preview from "./Preview";
import { CiUndo, CiRedo } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const QuizBuilder = () => {
  const [formElements, setFormElements] = useState([]);
  const [preview, setPreview] = useState(false);

  // Function to add a new form element based on type
  const addElement = (type) => {
    const newElement = {
      index: formElements.length + 1,
      id: Date.now(), // Unique ID for each element
      type: type,
      name: `Question ${formElements.length + 1}`,
      choices:
        type === "multipleChoice"
          ? [
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas ",
              "Option 2",
            ]
          : [],
    };
    setFormElements([...formElements, newElement]);

    updateState(newElement, "new");
  };

  // ref={index === formElements.length - 1 ? titleInputRef : null}
  const editName = (element, name) => {
    // titleInputRef.current.blur()
    formElements.map((obj) => {
      if (obj.id === element.id) {
        const newObj = {
          ...obj,
          name,
        };
        updateState(newObj, "name");
      }
    });
  };
  const titleInputRef = useRef(null);

  const deleteElement = (elementId) => {
    console.log(elementId);
    setFormElements((prev) => {
      const newFormElement = prev.filter((obj) => {
        return obj.id !== elementId;
      });
      newFormElement.length == 0 &&
        localStorage.setItem("questionBuilder", JSON.stringify([]));

      return newFormElement.map((obj, i) => {
        return { ...obj, name: `${obj.name}`, index: i + 1 };
      });
    });
    updateState();
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("questionBuilder"));

    if (formElements.length === 0 && savedData.length !== 0) {
      // localStorage.setItem("questionBuilder", JSON.stringify(formElements))
      setFormElements(savedData);
    } else if (formElements.length !== 0) {
      localStorage.setItem("questionBuilder", JSON.stringify(formElements));
    }
  }, [formElements]);

  // Function to render the form elements
  const renderElement = (element, index) => {
    switch (element.type) {
      case "text":
        return (
          <div className="flex border-[#333333] flex-col rounded-md border gap-y-2 space-y-2 px-1 py-2">
            <div className="flex flex-row justify-between">
              <div className="space-x-3 ">
                <span>{element.index}.</span>
                <label
                  className="w-max focus:outline-violet-800"
                  onBlur={(e) => editName(element, e.target.innerHTML)}
                  contentEditable
                >
                  {element.name}
                </label>
              </div>
              <MdDeleteOutline
                onClick={() => deleteElement(element.id, "delete")}
                className="hover:text-PrimaryPurple text-white text-xl"
              />
            </div>

            <input
              disabled
              type="text"
              className=" min-h-12  mx-5 rounded-md bg-[#171717]"
              placeholder={element.label}
              key={element.id}
            />
          </div>
        );
      case "comment":
        return (
          <div className="flex flex-col border border-[#333333] rounded-md space-y-2 px-1 py-2">
            <div className="flex flex-row justify-between">
              <div className="space-x-3 ">
                <span>{element.index}.</span>
                <label
                  className="w-max focus:outline-violet-800"
                  onBlur={(e) => editName(element, e.target.innerHTML)}
                  contentEditable
                >
                  {element.name}
                </label>
              </div>
              <MdDeleteOutline
                onClick={() => deleteElement(element.id, "delete")}
                className="hover:text-PrimaryPurple text-white text-xl"
              />
            </div>
            <textarea
              disabled
              className=" focus:outline-violet-700  bg-[#171717]  mx-5 rounded-md  min-h-28"
              key={element.id}
            />
          </div>
        );
      default:
        return null;
    }
  };

  // const [state, setState] = useState("");
  const [history, setHistory] = useState([]); // Stack for undo
  const [future, setFuture] = useState([]); // Stack for redo

  const updateState = (newState, type) => {
    setHistory([...history, formElements]); // Save current state to history before updating
    if (type === "name") {
      setFormElements((prev) => {
        return prev.map((obj) => {
          if (obj.id === newState.id) {
            return {
              ...obj,
              name: newState.name,
            };
          }
          return obj;
        });
      });
    } else if (type === "delete") {
      setFormElements((prev) => {
        return prev.filter((obj) => {
          return newState.id !== obj.id;
        });
      });
    } else if (type === "new") {
      setFormElements([...formElements, newState]);
    }

    setFuture([]); // Clear redo stack when a new state is created
  };

  const undo = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setFuture([formElements, ...future]); // Save current state to future before undoing
    setFormElements(previousState); // Revert to previous state
    setHistory(history.slice(0, history.length - 1)); // Remove last state from history
  };

  const redo = () => {
    if (future.length === 0) return;
    const nextState = future[0];
    setHistory([...history, formElements]); // Save current state to history before redoing
    setFormElements(nextState); // Move to next state
    setFuture(future.slice(1)); // Remove first state from future
  };
  return (
    <div className="bg-[#1B1C1E] min-h-screen text-white">
      <h1 className="text-start font-bold text-xxl mt-4">Create Quiz</h1>

      <div className="form-preview  w-[70%] mt-4 flex flex-row justify-between">
        <div className="flex  gap-x-4">
          <button
            className=" hover:bg-PrimaryPurple text-sm rounded px-2"
            onClick={() => addElement("text")}
          >
            Add Short Answer
          </button>
          <button
            className=" hover:bg-PrimaryPurple text-sm rounded px-2"
            onClick={() => {
              addElement("comment");
            }}
          >
            Add Long Answer
          </button>
        </div>
        <div className="flex flex-row -x-2 mt-2">
          <CiUndo
            onClick={undo}
            title="undo"
            className="cursor-pointer text-xl hover:text-PrimaryPurple font-bold"
          />
          <CiRedo
            onClick={redo}
            title="redo"
            className="cursor-pointer text-xl hover:text-PrimaryPurple font-bold tex"
          />
        </div>
        <div className="flex flex-row  gap-x-2">
          <button
            className="hover:bg-PrimaryPurple w-max px-2 rounded"
            onClick={() => setPreview(false)}
          >
            Builder
          </button>
          <button
            className="hover:bg-PrimaryPurple w-max px-2 rounded"
            onClick={() => setPreview(true)}
          >
            Preview
          </button>
        </div>
      </div>
      <div className="w-[70%] mt-4 gap-y-2 flex flex-col">
        {!preview ? (
          formElements.map((element, index) => renderElement(element, index))
        ) : (
          <Preview formElements={formElements} />
        )}
      </div>
    </div>
  );
};

export default QuizBuilder;
