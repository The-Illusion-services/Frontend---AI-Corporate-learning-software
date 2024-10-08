import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <main className=" h-screen bg-mobileBackground flex flex-col gap-y-6 justify-center items-center">
      <h2 className="text-5xl font-bold text-PrimaryPurple">Go to app</h2>
      <div className="flex gap-x-4 text-white">
        <Link to="/auth/login">
        <button className="bg-PrimaryPurple px-4 rounded-sm flex items-center">Login</button>
        </Link>
        <Link to="/auth/signup">
        <button className="bg-PrimaryPurple px-4 rounded-sm flex items-center">Signup</button>
        </Link>
      </div>
    </main>
  );
};

export default Landingpage;
