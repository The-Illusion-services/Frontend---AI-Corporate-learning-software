// src/Login.js
import React, { useState } from "react";
import backgroundImage from './assets/bg.png'; // Import background image
import loginImage from './assets/login-image.jpg'; // Import login image

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Handle login logic here
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use imported background image
    >
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto p-5 md:space-x-0">
        {/* Image and form card */}
        <div className="bg-black shadow-md rounded-lg flex flex-col md:flex-row md:w-3/4 w-full">
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
              <h1 className="font-bold text-center text-2xl text-white mb-5">Welcome back!</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="transition duration-200 bg-purple-500 hover:bg-purple-600 focus:bg-purple-700 focus:shadow-sm focus:ring-4 focus:ring-purple-300 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Login</span>
                </button>

                <div className="flex"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
