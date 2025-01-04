import React from "react";

const CreateJobs = () => {
  return (
    <div className="bg-mobileBackground w-screen min-h-screen p-10 text-white lg:ml-[16%]">
      {/* Basic Information */}
      <div className="bg-[#1B1C1E] w-[716px] px-5 py-7">
        <div className="mb-10">
          <h3 className="text-2xl font-semibold">Provide Basic Information</h3>
          <p className="">This will be displayed on your profile</p>
        </div>
        <form action="">
          <div className="flex flex-col mb-6">
            <label htmlFor="Job Title" className="font-semibold mb-2">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Placeholder"
              className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2 h-[56px]"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="industry" className="font-semibold mb-2">
              Industry
            </label>
            <input
              type="text"
              placeholder="Placeholder"
              className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2 h-[56px]"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="number to hire" className="font-semibold mb-2">
              No of people to hire
            </label>
            <input
              type="number"
              placeholder="Placeholder"
              className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2 h-[56px]"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="location" className="font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Placeholder"
              className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2 h-[56px]"
            />
          </div>
          <div className="bg-[#333333] flex-grow h-[1px] w-full mt-10 mb-5"></div>
          <div className="flex justify-between items-center">
            <div className="">
              <button className="border-[1px] border-solid border-inputBorderColor rounded-[8px] h-[44px] w-[70px] text-[#999999]">
                Back
              </button>
            </div>
            <div className="flex items-center">
              <button className="border-[1px] border-solid border-inputBorderColor rounded-[8px] h-[44px] w-[85px] mr-[10px] text-[#999999]">
                Cancel
              </button>
              <button className="bg-PrimaryPurple w-[102px] h-[44px] rounded-[8px]">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      {/* Qualification */}
      <div className="bg-[#1B1C1E] w-[716px] px-5 py-7">
        <div className="mb-10">
          <h3 className="text-2xl font-semibold">Qualification</h3>
          <p className="">This will be displayed on your profile</p>
        </div>
        <form action="">
          <div className="flex flex-col mb-6">
            <label htmlFor="experience level" className="font-semibold mb-2">
              Experience Level
            </label>
            <select
              name="expereience level"
              className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2 h-[56px]"
            >
              <option value="">Experience Level</option>
              <option value="">Intern</option>
              <option value="">Junior</option>
              <option value="">Mid level</option>
              <option value="">Senior</option>
            </select>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="Required skills" className="font-semibold mb-2">
              Required Skills
            </label>
            <input
              type="text"
              placeholder="Placeholder"
              className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2 h-[56px]"
            />
          </div>
          <div className="bg-[#333333] flex-grow h-[1px] w-full mt-10 mb-5"></div>
          <div className="flex justify-between items-center">
            <div className="">
              <button className="border-[1px] border-solid border-inputBorderColor rounded-[8px] h-[44px] w-[70px] text-[#999999]">
                Back
              </button>
            </div>
            <div className="flex items-center">
              <button className="border-[1px] border-solid border-inputBorderColor rounded-[8px] h-[44px] w-[85px] mr-[10px] text-[#999999]">
                Cancel
              </button>
              <button className="bg-PrimaryPurple w-[102px] h-[44px] rounded-[8px]">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      {/* Qualification 2? */}
      <div className="bg-[#1B1C1E] w-[716px] px-5 py-7">
        <div className="mb-10">
          <h3 className="text-2xl font-semibold">Qualification</h3>
          <p className="">This will be displayed on your profile</p>
        </div>
        <form action="">
          <div className="flex flex-col mb-6">
            <label htmlFor="Job description" className="font-semibold mb-2">
              Job description
            </label>
            <input
              type="text"
              placeholder="Placeholder"
              className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2 h-[107px]"
            />
          </div>
          <div className="bg-[#333333] flex-grow h-[1px] w-full mt-10 mb-5"></div>
          <div className="flex justify-between items-center">
            <div className="">
              <button className="border-[1px] border-solid border-inputBorderColor rounded-[8px] h-[44px] w-[70px] text-[#999999]">
                Back
              </button>
            </div>
            <div className="flex items-center">
              <button className="border-[1px] border-solid border-inputBorderColor rounded-[8px] h-[44px] w-[85px] mr-[10px] text-[#999999]">
                Cancel
              </button>
              <button className="bg-PrimaryPurple w-[102px] h-[44px] rounded-[8px]">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Progessboard */}
    </div>
  );
};

export default CreateJobs;
