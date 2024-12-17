// src/Login.js
import React, { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import loginImage from "../assets/signup/signupBG.svg"; // Import login image
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri"; // Import your image
import Wallets from "../assets/signup/wallets.svg"; // Import your image
import { Link } from "react-router-dom";
import { CreateContext } from "../Context/Context";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

const Login = () => {
  const { login, token } = useContext(CreateContext).auth;
  const { setIsLoading } = useContext(CreateContext).loader;
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const formDataChangeHandler = (e) => {
    setLoginForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://illusion-6ga5.onrender.com/api/login/",
        {
          method: "POST",
          body: JSON.stringify(loginForm),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();
      const {
        access_token: accessToken,
        user_id: userId,
        role: userRole,
      } = responseData;

      login(accessToken, userId, userRole);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error(err.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginForm.email && loginForm.password) {
      handleLogin();
    }
    // Handle login logic here
  };

  const previousLocation = localStorage.getItem("lastVisitedPage");
  if (!token) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-mobileBackground">
        {/* Container for form and image, flexed on desktop */}
        <div className="w-full max-w-lg lg:max-w-4xl lg:flex lg:items-center bg-mobileBackground shadow-md rounded-lg p-5">
          {/* Login Image (visible only on desktop) */}
          <div className="hidden lg:block  lg:w-1/2 h-screen p-5">
            <img
              src={loginImage}
              alt="login illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Login Form */}
          <div className="w-full lg:w-1/2 h-screen  p-10 xs:p-5">
            <h1 className="font-bold text-center text-3xl mb-2 text-white">
              Welcome back!
            </h1>

            <p className="text-center text-textGray mb-10">
              Don't have an account?{" "}
              <a href="">
                <Link to="/auth/signup">
                  <span className="text-PrimaryPurple">Sign Up</span>
                </Link>
              </a>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="font-semibold text-sm text-white pb-1 block mb-4">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={(e) => formDataChangeHandler(e)}
                  className="border-inputborderGreen text-textGray rounded-lg px-3 py-4 mt-1 text-sm w-full bg-inputBackground focus:outline-PrimaryPurple focus:ring-1 focus:border-PrimaryPurple"
                  placeholder=""
                  required
                />
              </div>

              <div className="mb-4 relative">
                <label className="font-semibold text-sm text-white pb-1 block  mb-4">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type between password and text
                  value={loginForm.password}
                  name="password"
                  onChange={(e) => formDataChangeHandler(e)}
                  className="border-inputborderGreen text-textGray rounded-lg px-3 py-4 mt-1 text-sm w-full bg-inputBackground focus:outline-PrimaryPurple focus:ring focus:border-PrimaryPurple"
                  placeholder=""
                  required
                />

                {/* Show/Hide password icon */}
                <button
                  type="button"
                  className="absolute bottom-5 right-2 flex items-center text-textGray"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                  {/* Toggle eye/eye-slash icon */}
                </button>
              </div>

              <p className="text-textGray mb-7">
                Forgot password?{" "}
                <Link to="/auth/login/recoverpassword">
                  <span className="text-PrimaryPurple">Recover</span>
                </Link>
              </p>

              {/* Login Button*/}
              <button
                type="submit"
                className="transition duration-200 bg-PrimaryPurple hover:bg-PrimaryPurple focus:bg-PrimaryPurple text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mb-5"
              >
                Login
              </button>
            </form>

            {/* <div className="flex items-center gap-3 mt-10 text-textGray">
            <div className="w-5 bg-[#333333] flex-grow h-[1px]"></div>
            Or
            <div className="w-5 bg-[#333333] flex-grow h-[1px]"></div>
          </div> */}
            {/* <div className="flex mt-10 gap-3">
            <button className="bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-center gap-2 outline-none text-white">
              <FcGoogle />
              Google
            </button>
            <button className="bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold flex items-center justify-center gap-2 outline-none text-white">
              <RiTwitterXLine />
              Twitter
            </button>
            <button
              type="submit"
              className="hidden bg-inputBackground border-inputBorderColor border-2 border-solid rounded-md h-16 flex-grow text-lg font-semibold lg:flex items-center justify-center gap-2 outline-none text-white"
            >
              <img src={Wallets} alt="" />
              Wallet
            </button>
          </div> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={previousLocation} />;
  }
};

export default Login;
