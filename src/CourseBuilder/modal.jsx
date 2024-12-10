import { useEffect, useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("courseBuilder"));
    const checkedCachedCourse = localStorage.getItem("checkCachedCourse");
    if (savedData && !checkedCachedCourse) setShowModal(true);
  },[]);

  const clearCachedCourse = () => {
    localStorage.removeItem("courseBuilder");
    localStorage.removeItem("checkCachedCourse")
    setShowModal(false);
  };
  
  const closeModal = () => {
    localStorage.setItem("checkCachedCourse", "true")
    setShowModal(false);
  };

  if (showModal) {
    return (
      <section className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#00000060] z-40 backdrop-blur-sm">
        <article className="lg:w-[30%] lg:h-[35%] border bg-[#1b1c1e] text-white flex flex-col justify-center items-center lg:gap-y-8">
          <span className="text-lg">
            You currently have a course being created
          </span>
          <div className="flex lg:gap-x-2 ">
            <button
              className="border px-2 py-1 lg:w-24 rounded-md"
              onClick={clearCachedCourse}
            >
              Discard
            </button>
            <button
              className="border px-2 py-1  lg:w-24 rounded-md"
              onClick={closeModal}
            >
              Continue
            </button>
          </div>
        </article>
      </section>
    );
  } else {
    return null;
  }
};

export default Modal;
