import React, { useState, useEffect } from 'react';
import UndoRedoExample from './history';
const FormBuilder = () => {
  const [formElements, setFormElements] = useState([]);

  // Function to add a new form element based on type
  const addElement = (type) => {
    const newElement = {
      id: Date.now(), // Unique ID for each element
      type: type,
      name: `Question ${formElements.length + 1}`,
      choices: type === 'multipleChoice' ? ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas ', 'Option 2'] : [],
    };
    setFormElements([...formElements, newElement]);
   
    updateState(newElement)
  };

  const addOptions = (element) => {
  
    formElements.map((obj)=>{
      if (obj.id === element.id) {
        const  newObj = {
          ...obj,
          choices: [...obj.choices, "option"],
        }
       return updateState(newObj, "option")

      }
    })
  };
  
const editName= (element, name)=>{
  formElements.map((obj)=>{
    if (obj.id === element.id) {
      const newObj = {
        ...obj,
        name
      }
     return updateState(newObj, "name")

    }
  })
}


  // Function to render the form elements
  const renderElement = (element) => {
    switch (element.type) {
      case 'text':
        return <div className='flex flex-col'>
          <label onBlur={(e)=> editName(element, e.target.innerHTML)} contentEditable>{element.name}</label>
          <input type="text" className='border' placeholder={element.label} key={element.id} />
          </div>
      case 'comment':
        return  <div className='flex flex-col'>
        <label contentEditable  >{element.label}</label>
        <textarea className='border' placeholder={element.name} key={element.id} />
        </div>
 
      case 'checkbox':
        return (
          <div key={element.id} className='flex flex-col'>
            <p>{element.name}</p>
            {element.choices.map((choice, index) => (
              <label key={index}>
                <input className='border' type="radio" name={`question-${element.id}`} value={choice}  />
                <span contentEditable>
                  {choice}
                  </span>
              </label>
            ))}
            <span onClick={()=> addOptions(element)}>+</span>
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
    if(type == "option"){
        setFormElements((prev) => {
      return prev.map((obj) => {
        if (obj.id === newState.id) {
          return {
            ...obj,
            choices: [...obj.choices, "dodo"],
          }
        }
      });
    });
    }
    else if(type == "name"){
      setFormElements((prev) => {
        return prev.map((obj) => {
          if (obj.id === newState.id) {
            return {
              ...obj,
              name: newState.name,
            }
          }
        });
      });
    }
    else{
      setFormElements([...formElements, newState]);
    }
    
    setFuture([]); // Clear redo stack when a new state is created
  };

  const undo = () => {
    console.log("s");
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
    <div>
      <h1>Form Builder</h1>
      <div>
        <button onClick={(formElements) => 
          addElement('text') 
         }>Add Short Answer</button>
        <button onClick={() => {addElement('comment')}}>Add Long Answer</button>
        <button onClick={() => addElement('checkbox')}>Add Multiple Choice</button>
      </div>

      <div className="form-preview space-y-4">
        <h2>Preview:</h2>
        {formElements.map((element) => renderElement(element))}
      </div>
      <h2 onClick={redo}>Redo</h2>
      <h2 onClick={undo}>Undo</h2>
    </div>
  );
};

export default FormBuilder;
