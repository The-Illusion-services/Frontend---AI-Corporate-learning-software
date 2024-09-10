import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./App/Dashboard";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Navbar from "./App/Navbar";
import Landingpage from "./HomePage/Landingpage";


function App() {
  return (
      <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/app" element={<Navbar/>}>
        <Route index element={<Dashboard />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
      </Route>
      </Routes>
  );
}

export default App;
