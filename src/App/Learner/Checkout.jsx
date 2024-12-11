import React, { useContext } from "react";
import { CreateContext } from "../../Context/Context";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate()
  const { course, loader } = useContext(CreateContext);
  const { setIsLoading } = loader;
  const { courseInView, setCourseInView } = course;
  const storedData = JSON.parse(localStorage.getItem("userData"));
  const token = storedData?.accessToken;
  const buyCourse = async (courseId) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://illusion-6ga5.onrender.com/api/courses/enroll/",
        {
          method: "POST",
          body: JSON.stringify({ course: courseId }),
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        }
      );
      if (response.ok) {
        setIsLoading(false);
        const responseData = await response.json();
        toast.success("Course purchase successful!")
        navigate("/app/learner/my-courses")

        console.log(responseData);

        return responseData;
      } else {
        setIsLoading(false);
        const responseData = await response.json();
        console.log(responseData.message);
        toast.error(responseData.message)
        throw new Error(response.message);
      }
    } catch (err) {
      setIsLoading(false);
      return err.message;
    }
  };

  return (
    <main className=" bg-mobileBackground min-h-screen ">
      <section className="flex px-4 text-white py-7 gap-x-4  ">
        <section className=" w-[60%]  rounded-lg bg-[#1b1c1e] py-6 px-4 flex flex-col justify-evenly">
          <div>
            <h2>Check out</h2>
            <span>Order Details</span>
          </div>

          <div className="flex flex-col text-textGray">
            <span className="">{courseInView.course_title}</span>
            <span>4.7</span>
            <div className="flex">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarOutline />
            </div>
            <span>(2845 reviews)</span>
          </div>

          <div className="mt-4 border  border-inputBorderColor rounded-sm w-1/2 text-textGray p-2">
            <span>Course includes</span>
            <li>24 Hours on-demand video</li>
            <li>Full lifetime access</li>
            <li>Hands-on projecs</li>
            <li>Certificate of completion</li>
          </div>
          <button className="w-full h-8 p-2 bg-PrimaryPurple mt-4 rounded-md flex items-center justify-center">
            Checkout
          </button>
        </section>

        <aside className="hidden xl:block  lg:w-[35%] p-6 bg-[#1b1c1e] rounded-sm">
          {/* Right Section: Course Metadata */}
          <article className="border rounded-sm border-inputBorderColor p-4">
            <div className="flex flex-col">
              <span>Total Price</span>
              <span className="text-textGray">20 XION</span>
            </div>

            <div className="flex flex-col">
              <span>APPROX.USD</span>
              <span className="text-textGray">$180</span>
            </div>
          </article>
          <span>Select Payment Method</span>
          <article>
            <button
              className="w-full h-8 p-2 bg-PrimaryPurple mt-4 rounded-md flex items-center justify-center"
              onClick={() => buyCourse(courseInView.id)}
            >
              Pay now
            </button>
          </article>
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
