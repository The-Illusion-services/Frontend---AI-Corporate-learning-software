import React from "react";
import PageHeader from "../PageHeader";
import { Link, Outlet } from "react-router-dom";

const Course = () => {
  return (
    <>
      <PageHeader />
      <main className="lg:ml-[16%]">
        <section className="bg-[#1B1C1E] min-h-screen px-4 py-4">
          <div className="text-white text-xs flex flex-row gap-x-4">
            <Link to="/app/recruiter/course">
              <span>1. Create course content</span>
            </Link>
            <Link to="/app/recruiter/course/create-resource">
              <span>2. Create resource</span>
            </Link>
            <Link to="/app/recruiter/course/quiz">
              <span>3. Quiz</span>
            </Link>
          </div>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Course;
