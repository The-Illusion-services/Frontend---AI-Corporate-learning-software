// src/Login.js
import React, { useState } from "react";
// import loginImage from './assets/login-image.jpg'; // Import login image
// import google from './assets/google.png'; // Import your image
// import Wallets from "../assets/signup/wallets.svg"; // Import your image
// import twitter from './assets/twitter.png'; // Import your image


import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Handle login logic here
  };

  return (
    // <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-textGray">
    //   {/* Container for form and image, flexed on desktop */}
    //   <div className="w-full max-w-lg lg:max-w-4xl lg:flex lg:items-center bg-mobileBackground shadow-md rounded-lg p-5">

    //     {/* Login Image (visible only on desktop) */}
    //     <div className="hidden lg:block lg:w-1/2 h-full p-5">
    //       <img
    //         src={loginImage}
    //         alt="login illustration"
    //         className="w-full h-auto object-contain"
    //       />
    //     </div>

    //     {/* Login Form */}
    //     <div className="w-full lg:w-1/2 p-10 xs:p-5">
    //       <h1 className="font-bold text-center text-3xl mb-2 text-white">Welcome back!</h1>

    //       <p className="text-center text-textGray mb-10">Don't have an account? <a href=""><span className="text-PrimaryPurple">Sign Up</span></a></p>

    //       <form onSubmit={handleSubmit}>
    //         <div className="mb-4">
    //           <label className="font-semibold text-sm text-white pb-1 block mb-4">
    //             Email Address
    //           </label>
    //           <input
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="border-inputborderGreen text-textGray rounded-lg px-3 py-4 mt-1 text-sm w-full bg-inputBackground focus:outline-PrimaryPurple focus:ring-1 focus:border-PrimaryPurple"
    //             placeholder=""
    //             required
    //           />
    //         </div>

    //         <div className="mb-4 relative">
    //           <label className="font-semibold text-sm text-white pb-1 block  mb-4">
    //             Password
    //           </label>
    //           <input
    //            type={showPassword ? "text" : "password"} // Toggle input type between password and text
    //            value={password}
    //            onChange={(e) => setPassword(e.target.value)}
    //             className="border-inputborderGreen text-textGray rounded-lg px-3 py-4 mt-1 text-sm w-full bg-inputBackground focus:outline-PrimaryPurple focus:ring focus:border-PrimaryPurple"
    //             placeholder=""
    //             required
    //           />

    //           {/* Show/Hide password icon */}
    //         <button
    //           type="button"
    //           className="absolute bottom-5 right-2 flex items-center text-textGray"
    //           onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
    //         >
    //           {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle eye/eye-slash icon */}
    //         </button>
              

    //         </div>
            
    //         <p className="text-textGray mb-7">
    //             Forgot password? <a href=""><span className="text-PrimaryPurple">Recover</span></a>
    //         </p>


    //         {/* Login Button*/}
    //         <button
    //           type="submit"
    //           className="transition duration-200 bg-PrimaryPurple hover:bg-PrimaryPurple focus:bg-PrimaryPurple text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mb-5"
    //         >
    //           Login
    //         </button>

    //         <hr className="my-4 border-textGray border-1 border-separate" />


    //         <div className="flex">
    //             <button
    //               type="button"
    //               className="flex mt-5 mr-4 transition duration-200 bg-textGray bg-opacity-10 focus:shadow-sm focus:ring-1 focus:ring-PrimaryPurple text-white w-full py-2.5 rounded-sm text-sm shadow-sm hover:shadow-md font-semibold text-center items-center  p-5 ring-opacity-50 ring-1 ring-textGray"
    //             >
    //                 <img src={google} className="w-6 h-6 mr-2" />
    //               <span className="inline-block mr-2">Google</span>
    //             </button>

    //             <button
    //               type="button"
    //               className="flex mt-5 mr-4 transition duration-200 bg-textGray bg-opacity-10 focus:shadow-sm focus:ring-1 focus:ring-PrimaryPurple text-white w-full py-2.5 rounded-sm text-sm shadow-sm hover:shadow-md font-semibold text-center items-center  p-5 ring-opacity-50 ring-1 ring-textGray"
    //             >
    //                 <img src={twitter} className="w-6 h-6 mr-2" />
    //               <span className="inline-block mr-2">Twitter</span>
    //             </button>

    //             <button
    //               type="button"
    //               className="flex mt-5 transition duration-200 bg-textGray bg-opacity-10 focus:shadow-sm focus:ring-1 focus:ring-PrimaryPurple text-white w-full py-2.5 rounded-sm text-sm shadow-sm hover:shadow-md font-semibold text-center items-center p-5 ring-opacity-50 ring-1 ring-textGray"
    //             >
    //                 <img src={Wallets} className="w-6 h-6 mr-2" />
    //               <span className="inline-block mr-2">Wallet</span>
    //             </button>
    //             </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <>
    </>
  );
};

export default Login;
