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
    { name: "newspaper", placeholder: "עיתון/נופש", type: "checkbox" },
    { name: "allowance", placeholder: "זכאי לביטוח לאומי?", type: "checkbox" },
  ];
  const healthFund = ["מאוחדת", "מכבי", "כללית", "לאומית"];

  return (
    <div className="div-utef">
      <>
        {fields.map((field, index) => {
          return field.name === "dateOfBirth" ? (
            <div
              className="unique-div"
              style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
            >
              <label>{field.placeholder}</label>
              <input type={field.type} className="date-input" />{" "}
            </div>
          ) : field.name === "healthFund" ? (
            <select className="unique-select" name={`${field.name}-right`}>
              <option value="" disabled selected>
                {field.placeholder}
              </option>
              {healthFund.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.name === "allowance" || field.name === "newspaper" ? (
           
            <div
              className="unique-div"
              style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
            >
              <label>{field.placeholder}</label>
              <input type={field.type} />
            </div>
          ) : (
            <input
              className="unique-input"
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
            />
          );
        })}
      </>

    </div>
  );
};
