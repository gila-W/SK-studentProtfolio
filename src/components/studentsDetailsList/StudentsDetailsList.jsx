import React from "react";
import { useQuery } from "react-query";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { fetchStudentsList } from "../../utils/Services";
import "./StudentsDetailsList.css";
import { useEducation, useStudents } from "../../utils/UseLists";
import { useNavigate } from "react-router";
export const StudentsDetailsList = () => {
    const navigate=useNavigate();
    const addStudent =()=>{
        navigate('/add-student');
    }
  const {
    data: studentsList = [],
    studentsError,
    studentsIsLoading,
  } = useStudents();
  const {
    data: educationDetailsList = [],
    educationDetailsError,
    educationDetailsIsLoading,
  } = useEducation();

  if (studentsIsLoading) return <div>בטעינה</div>;
  if (studentsError) return <div>שגיאה בטעינת המשתמשים</div>;
  console.log(studentsList);
  return (
    <div className="students-list-page">
      <div className="students-list-buttons">
        <button onClick={addStudent} className="add-student-button">הוספת תלמיד</button>
        <button className="search-student-button"> חיפוש</button>
      </div>
      <div className="students-list-table">
        <div className="students-table-title">
          <h3>ת.פתיחת תיק</h3>
          <h3>שם</h3>
          <h3>מספר זהות</h3>
          <h3>תאריך לידה</h3>
          <h3>טלפון</h3>
          <h3>טלפון נייד</h3>
          <h3>כתובת</h3>
          <h3>עיר</h3>
          <h3>מוסד</h3>
          <h3>קופת חולים</h3>
          <h3>סטטוס</h3>
        </div>
        <div className="students-table-details">
          <section className="section">
            {Array.isArray(studentsList) &&
              studentsList.map((item, i) => {
                const dateOfBirth = new Date(item.dateOfBirth.seconds * 1000);
                const formattedDate = dateOfBirth.toLocaleDateString();
                const currentInstitution = educationDetailsList.find((e) => {
                  return e.studentCode === item.studentCode;
                });
                return (
                  <div className="one-item" key={i}>
                    <div className="one-detail">תאריך פתיחה</div>
                    <div className="one-detail">
                      {item.firstName + "  "}
                      {item.lastName}
                    </div>
                    <div className="one-detail">{item.tz}</div>
                    <div className="one-detail">{formattedDate}</div>
                    <div className="one-detail">{item.telephone}</div>
                    <div className="one-detail">{item.motherPhone}</div>
                    <div className="one-detail">{item.address}</div>
                    <div className="one-detail">{item.city}</div>
                    <div className="one-detail">
                      {currentInstitution?.institutionName}
                    </div>
                    <div className="one-detail">{item.healthFund}</div>
                    <div className="one-detail">סטטוס</div>
                  </div>
                );
              })}
          </section>
        </div>
      </div>
    </div>
  );
};
