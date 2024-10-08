import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const CreateCourse = () => {
  const [formElements, setFormElements] = useState([]);

  const addModule = () => {
    const newModule = {
      index: formElements.length + 1,
      id: Date.now(), // Unique ID for each element
      name: `Module ${formElements.length + 1}`,
      lectures: [ {
        index: 1,
        id: Date.now(), // Unique ID for each element
        type: "article",
        name: `Lecture ${formElements.lectures?.length == 0 ? 1 : formElements.lectures?.length + 1}`
      }],
    };
    addLecture(newModule.lectures)
    setFormElements([...formElements, newModule]);
   
    // updateState(newElement, "new")
  };

  
  const addLecture = (lectures)=>{
    const newLecture = {
      index: lectures.length + 1,
      id: Date.now(), // Unique ID for each element
      type: "article",
      name: `Lecture ${formElements.lectures?.length == 0 ? 1 : formElements.lectures?.length + 1}`
    }


    const updatedFormElements = formElements.map((element, index) => {
        return {
          ...element,
          lectures: [...(element.lectures || []), newLecture]  
        };
      
      // return element;
    });
    
    setFormElements(updatedFormElements);
    

  }

  const deleteLecture = (id)=>{

    
    setFormElements((currFormElements) => {

      return currFormElements.map((formElement) => {
        if (formElement.lectures.length === 1){
          return formElement
        }
        const updatedLectures = formElement.lectures
          .filter((element) => element.id !== id)
          .map((element, index) => ({
            ...element,
            index: index + 1,
          }));
        
        return {
          ...formElement,
          lectures: updatedLectures,
        };
      });
    });
    
  }

  console.log(formElements);
  const renderElement = (element, index) => {
    
        return  <section className=" bg-[#161616] px-4 py-4 text-white w-[80%] lg:w-[60%]">
        <div className="flex flex-row gap-x-2">
          <h2>Module:</h2>
          <div
            contentEditable
            className="bg-inputBackground rounded-sm border-PrimaryPurple border w-[60%]"
          >
            Module Title
          </div>
        </div>

        {element.lectures?.map((lecture)=>{
          return <article className="gap-y-4  flex flex-col text-sm bg-inputBackground border border-inputBorderColor mt-4 rounded-md">
           <div className="gap-x-2 flex justify-between  h-12 items-center border-b border-inputBorderColor px-2">
             <div className="flex gap-x-2 ">
               <h2 className="">Lecture {lecture.index}</h2>
               <span>Article</span>
             </div>
             <div>
               <MdDeleteOutline onClick={()=> deleteLecture(lecture.id)} className="text-lg hover:text-PrimaryPurple cursor-pointer" title="delete"/>
             </div>
           </div>
           <section className="flex flex-col py-2 gap-y-2">
             <div className="flex flex-col px-2">
               <label>Title</label>
               <input className="h-12 bg-inputBackground border-inputBorderColor border rounded-md" />
 
               <div></div>
             </div>
             <div className="flex flex-col px-2">
               <label>Article Content</label>
               <textarea className=" min-h-28 bg-inputBackground border-inputBorderColor border rounded-md"></textarea>
             </div>
           </section>
         </article>
        })}
        <span className="text-PrimaryPurple flex items-center cursor-pointer" onClick={()=> addLecture(element.lectures)}>Add new lecture</span>
      </section>

  };


  return (
    <main className="flex flex-col gap-y-4   py-4  bg-[#1B1C1E] ">
      <h2 className="font-bold mt-4 text-xxl text-white">Create Resource</h2>
      {formElements.map((element, index) => renderElement(element, index))}
      <span className="text-start  text-PrimaryPurple cursor-pointer" onClick={addModule}>Add new module</span>
    </main>
  );
};

export default CreateCourse;
