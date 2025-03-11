import React from "react";
import "./StudentPersonalDetails.css";

export const StudentPersonalDetails = () => {
    
  const fields = [
    { name: "firstName", placeholder: "שם פרטי", type: "text" },
    { name: "lastName", placeholder: "שם משפחה", type: "text" },
    { name: "tz", placeholder: "מספר זהות", type: "text" },
    { name: "dateOfBirth", placeholder: "תאריך לידה", type: "date" },
    { name: "age", placeholder: "גיל", type: "text" },
    { name: "city", placeholder: "עיר מגורים", type: "text" },
    { name: "address", placeholder: "כתובת", type: "text" },
    { name: "class", placeholder: "כיתה", type: "text" },
    { name: "telephone", placeholder: "טלפון", type: "text" },
    { name: "email", placeholder: "כתובת מייל", type: "text" },
    { name: "fatherName", placeholder: "שם האב", type: "text" },
    { name: "motherName", placeholder: "שם האם", type: "text" },
    { name: "fatherPhone", placeholder: "טלפון אבא", type: "text" },
    { name: "motherPhone", placeholder: "טלפון אמא", type: "text" },
    { name: "gender", placeholder: "מין", type: "text" },
    { name: "healthFund", placeholder: "קופת חולים", type: "text" },
   
  ];

  return (
    <div className="div-utef">
      <>
        {fields.map((field, index) => (
          <input
          className="unique-input"
            key={index}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
          />
        ))}
      </>
      <br></br>
     <div className="unique-div"> עיתון/נופש <input type="checkbox" /></div>
     <div className="unique-div">זכאות לביטוח לאומי? <input type="checkbox" /></div>
      <br></br>

    </div>
  );
};
