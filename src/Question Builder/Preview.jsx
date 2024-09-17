import React from 'react'

const Preview = ({formElements}) => {
  const renderElement = (element, index) => {
  
    switch (element.type) {
      case 'text':
        return <div className='flex border-[#333333] flex-col rounded-md border gap-y-2 space-y-2 px-1 py-2'>
          <div className='space-x-3 '>
          <span>{element.index}</span>
          <label  className='w-max focus:outline-violet-800' >{element.name}</label>
          </div>
          <input  type="text" className=' min-h-12  mx-5 rounded-md bg-[#171717]' placeholder={element.label} key={element.id} />
          
          </div>
      case 'comment':
        return  <div className='flex flex-col border border-[#333333] rounded-md space-y-2 px-1 py-2'>
         <div className='space-x-3 border-[#333333]'>
          <span>{element.index}.</span>
          <label  className='w-max focus:outline-violet-700' >{element.name}</label>
          </div>
        <textarea  className=' focus:outline-violet-700  bg-[#171717]  mx-5 rounded-md  min-h-28' key={element.id} />
      
        </div>
      default:
        return null;
    }
  };
  return (<>
    {formElements.map((element, index) => renderElement(element, index))}
  </>
  )
}

export default Preview