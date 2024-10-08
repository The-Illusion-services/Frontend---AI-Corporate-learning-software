import React from 'react'

const CourseLandingPage = () => {
  return (
    <div>          
      <article className="flex flex-col gap-y-4">
    <div className="text-white text-lg w-full mt-4">Course Landing Page</div>
    <div className="text-white">
      <h2>Course title</h2>
      <p className="text-sm font-light">
        You must enter at least 4 learning objectives or outcomes that
        learners can expect to achieve after completing your <br/> course.
      </p>
      <input className="h-12 mt-2 px-2 text-sm bg-inputBackground border-inputBorderColor border rounded-md w-[70%]" />
    </div>

    {/* <div className="text-white">
      <h2>Course description</h2>
      <p className="font-light">
        List the required skills, experience, tools or equipment
        learners should have prior to taking your course. <br />
        If there are no requirements, use this space as an opportunity
        to lower the barrier for beginners.
      </p>
      <input type="fil" className="h-12 bg-inputBackground border-inputBorderColor border rounded-md" />
    </div> */}

    <div className="text-white">
      <h2>Course description</h2>
      <p className="font-light text-sm">
        List the required skills, experience, tools or equipment
        learners should have prior to taking your course. <br />
        If there are no requirements, use this space as an opportunity
        to lower the barrier for beginners.
      </p>
      <textarea className="min-h-28 mt-2 text-xs px-2 py-2 bg-inputBackground border-inputBorderColor border rounded-md w-[70%]" ></textarea>
    </div>
  </article></div>
  )
}

export default CourseLandingPage