// src/Login.js
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing icons from react-icons
import backgroundImage from './assets/bg.jpg'; // Import background image
import loginImage from './assets/bg.jpg'; // Import login image
import google from './assets/google.png'; //Import google icon
import twitter from './assets/twitter.png';
import wallet from './assets/bitcoin.png';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Handle login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the password visibility state
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use imported background image
    >
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto p-5 md:space-x-0">
        {/* Image and form card */}
        <div className="bg-transparent shadow-md rounded-lg flex flex-col md:flex-row md:w-3/4 w-full">
          {/* Login Image */}
          <div className="hidden md:block md:w-1/2 p-5 flex items-center justify-center">
            <img
              src={loginImage}
              alt="login illustration"
              className="w-[100%] h-[100%] object-contain"
            />
          </div>

          {/* Login Form */}
          <div className="p-10 xs:p-5 md:w-1/2 w-full bg-black flex items-center justify-center">
            <div className="w-full">
              <h1 className="font-bold text-center text-2xl text-white mb-2">Welcome back!</h1>

              <p className="text-slate-400 text-center text-sm mb-5">Don't have an account? <a href=""><span className="text-purple-500">Sign Up</span></a></p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ring-purple-500 bg-slate-900 rounded-md px-3 py-2 mt-1 text-sm w-full text-white "
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between "password" and "text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-purple-500 bg-slate-900 rounded-md px-3 py-2 mb-6 mt-1 text-sm text-white w-full"
                    placeholder="Enter your password" 
                    required
                  />
                    <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={20} /> // Show eye-off icon if password is visible
                    ) : (
                      <AiOutlineEye size={20} /> // Show eye icon if password is hidden
                    )}
                  </div>

                  <p className="text-slate-400 text-sm ">Forgot Password? <a href=""><span className="text-purple-500">Recover</span></a></p>
                </div>
                <button
                  type="submit"
                  className="mt-5 mb-5 transition duration-200 bg-purple-500 hover:bg-purple-600 focus:bg-purple-700 focus:shadow-sm focus:ring-4 focus:ring-purple-300 text-white w-full py-2.5 rounded-md text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block border-opacity-5"
                >
                  <span className="inline-block mr-2">Login</span>
                </button>

                <div className="flex">
                <button
                  type="button"
                  className="flex mt-5 mr-4 transition duration-200 bg-slate-100 bg-opacity-10 hover:bg-purple-600 focus:bg-purple-700 focus:shadow-sm focus:ring-4 focus:ring-purple-300 text-white w-full py-2.5 rounded-sm text-sm shadow-sm hover:shadow-md font-semibold text-center items-center inline-block p-5 ring ring-opacity-50 ring-1 ring-slate-400"
                >
                    <img src={google} className="w-6 h-6 mr-2" />
                  <span className="inline-block mr-2">Google</span>
                </button>

                <button
                  type="button"
                  className="flex mt-5 mr-4 transition duration-200 bg-slate-100 bg-opacity-10 hover:bg-purple-600 focus:bg-purple-700 focus:shadow-sm focus:ring-4 focus:ring-purple-300 text-white w-full py-2.5 rounded-sm text-sm shadow-sm hover:shadow-md font-semibold text-center items-center inline-block p-5 ring ring-opacity-50 ring-1 ring-slate-400"
                >
                    <img src={twitter} className="w-6 h-6 mr-2" />
                  <span className="inline-block mr-2">Twitter</span>
                </button>

                <button
                  type="button"
                  className="flex mt-5 transition duration-200 bg-slate-100 bg-opacity-10 hover:bg-purple-600 focus:bg-purple-700 focus:shadow-sm focus:ring-4 focus:ring-purple-300 text-white w-full py-2.5 rounded-sm text-sm shadow-sm hover:shadow-md font-semibold text-center items-center inline-block p-5 ring ring-opacity-50 ring-1 ring-slate-400"
                >
                    <img src={wallet} className="w-6 h-6 mr-2" />
                  <span className="inline-block mr-2">Wallet</span>
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
