import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/homePage/HomePage";
import { StudentDetails } from "../components/studentDetails/StudentDetails";
import { LogIn } from "../components/logIn/LogIn";

export const Routing = () => {
<div style={{backgroundColor:"yellow",display: "revert"}}>
    <Routes>
      <Route path="home-page" element={<HomePage />}></Route>
      <Route path="/student-details" element={<StudentDetails />}></Route>
      <Route path="/log-in" element={<LogIn />}></Route>
    </Routes>
  </div>;
};
