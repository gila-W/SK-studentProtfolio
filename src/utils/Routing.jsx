
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/homePage/HomePage";
import { StudentDetails } from "../components/studentDetails/StudentDetails";
import { LogIn } from "../components/logIn/LogIn";
import { NewStudentProgressBar } from "../components/newStudent/newStudentProgressBar/NewStudentProgressBar";

export const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/home-page" element={<HomePage />}></Route>
        <Route path="/student-details" element={<StudentDetails />}></Route>
  
        <Route 
          path="/new-student" 
          element={
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <NewStudentProgressBar />
              </div>
            </div>
          } 
        /> {/* עטיפת הקומפוננטה של תלמיד חדש בסטייל */}      </Routes>
  );
};

