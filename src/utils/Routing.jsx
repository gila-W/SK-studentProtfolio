
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/homePage/HomePage";
import { StudentDetails } from "../components/studentDetails/StudentDetails";
import { LogIn } from "../components/logIn/LogIn";
import { StudentsDetailsList } from "../components/studentsDetailsList/StudentsDetailsList";
import { Municipalities } from "../components/municipalities/Municipalities";
import { Employees } from "../components/employees/Employees";

export const Routing = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/home-page" element={<HomePage />}></Route>
        <Route path="/student-details" element={<StudentDetails />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/municipalities" element={<Municipalities />}></Route>
        <Route path="/students-details-list" element={<StudentsDetailsList />}></Route>

      </Routes>
    </div>
  );
};

