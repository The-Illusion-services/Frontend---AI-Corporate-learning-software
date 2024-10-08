import React, { useState, useContext } from "react";
import signupBG from "../assets/signup/signupBG.svg";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { BiHide } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import Wallets from "../assets/signup/wallets.svg";
import { CreateContext } from "../Context/Context";
import { Link } from "react-router-dom";

const Signup = () => {
  const {login} = useContext(CreateContext).auth
  const [registerForm, setRegisterForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    company: "",
    role: "",
  });
  const signup = async()=>{
    
    const response = await fetch(
      "https://illusion-6ga5.onrender.com/api/register/",
      {
        method: "POST",
        body: JSON.stringify(registerForm),
        headers: {
          "Content-Type": "application/json", // Ensure JSON content type
        }
      }
      );
      const responseData = await response.json();
      const { access_token: accessToken, user_id: userId, role: userRole} = responseData
    
      login(accessToken, userId, userRole)
    }
  const submit = (e) => {
    e.preventDefault()
   return registerForm.first_name && registerForm.last_name && registerForm.email && registerForm.role && registerForm.password && registerForm.confirm_password && registerForm.company && registerForm.password === registerForm.confirm_password
      && signup()
    
  };
  const formDataChangeHandler = (e) => {
    setRegisterForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  // if (isLoading) return <Spinner/>
  return (
    <div className="w-screen flex bg-mobileBackground justify-center lg:justify-normal ">
      <div className="hidden lg:flex w-1/2 h-screen fixed">
        <img src={signupBG} alt="" className="w-full" />
      </div>
      <div className="max-w-xl lg:max-w-none w-screen lg:w-1/2 min-h-screen text-white px-5 py-10 lg:py-20 relative lg:left-1/2 flex justify-center">
        <div className="w-11/12 lg:w-2/3">
          <div className="mb-8 lg:text-center">
            <h1 className="text-3xl lg:text-4xl lg:mb-2 font-semibold">
              Let's get started
            </h1>
            <p className="text-textGray text-sm">
              Have an account? 
              <Link to="/auth/login">
              <span className="text-PrimaryPurple">Login</span>{" "}
              </Link>
              {/*the "login" would eventually become a link to the login page*/}
            </p>
          </div>

          <form onSubmit={submit} className="w-full">
            <div className="flex flex-col mb-5">
              <label htmlFor="first name" className="text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="first name"
                value={registerForm.first_name}
                name="first_name"
                onChange={formDataChangeHandler}
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="last name" className="text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="last name"
                name="last_name"
                onChange={formDataChangeHandler}
                value={registerForm.last_name}
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div>
            {/* <div className="flex flex-col mb-5">
              <label htmlFor="first name" className="text-sm mb-2">
                Field
              </label>
              <select
                name="field"
                id=""
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              >
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div> */}
             <div className="flex flex-col mb-5">
              <label htmlFor="company id" className="text-sm mb-2">
                Company
              </label>
              <input
                type="text"
                placeholder="company"
                name="company"
                onChange={formDataChangeHandler}
                value={registerForm.company}
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div> 
            <div className="flex flex-col mb-5">
              <label htmlFor="email address" className="text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={formDataChangeHandler}
                value={registerForm.email}
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="first name" className="text-sm mb-2">
                Role
              </label>
              <select
                name="role"
                id=""
                onChange={formDataChangeHandler}
                value={registerForm.role}
                
                className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-PrimaryPurple focus:border-2"
              >
                <option value="select option" defaultValue="select option"  disabled>Select option</option>
                <option value="Employee" >Employee</option>
                <option value="Employer">Employer</option>
              </select>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  placeholder="Input"
                  name="password"
                  autoComplete="true"
                  onChange={formDataChangeHandler}
                  value={registerForm.password}
                  className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-inputborderGreen focus:border-2 w-full"
                />
                {/* <img
                  src={Eye}
                  alt=""
                  className="absolute top-[22px] right-6 cursor-pointer"
                /> */}
                <BiHide className="absolute top-[22px] right-6 cursor-pointer text-textGray" />
              </div>
            </div>
            <div className="flex flex-col mb-5 w-full">
              <label htmlFor="confirm password" className="text-sm mb-2">
                Confirm Password
              </label>
              <div className="relative w-full h-max">
                <input
                  type="Password"
                  placeholder="Input"
                  name="confirm_password"
                  onChange={formDataChangeHandler}
                  autoComplete="true"
                  value={registerForm.confirm_password}
                  className="bg-inputBackground border-inputBorderColor border-solid border-2 rounded-md py-2 px-2 placeholder:text-sm placeholder:text-gray-300 outline-none focus:border-inputborderGreen focus:border-2 w-full"
                />
                {/* <img
                  src={Check}
                  alt=""
                  className="absolute top-[22px] right-6 cursor-pointer"
                /> */}
                <FaRegCheckCircle className="absolute top-[22px] right-6 cursor-pointer text-inputborderGreen" />
              </div>
            </div>

            <button
              type="submit"
              className="bg-PrimaryPurple py-2 rounded-lg w-full mt-6 font-semibold text-lg outline-none"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center gap-3 mt-10 text-textGray">
            <div className="w-5 bg-[#333333] flex-grow h-[1px]"></div>
            Or
            <div className="w-5 bg-[#333333] flex-grow h-[1px]"></div>
          </div>
          <div className="flex mt-10 gap-3">
            <button className="bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-center gap-2 outline-none">
              <FcGoogle />
              Google
            </button>
            <button className="bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-center gap-2 outline-none">
              <RiTwitterXLine />
              Twitter
            </button>
            <button className="hidden bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md py-2 flex-grow text-sm font-semibold lg:flex items-center justify-center gap-2 outline-none">
              <img src={Wallets} alt="" />
              Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
