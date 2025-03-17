import React from "react";
import "./StudentEducation.css";
import CalendarCheckbox from "./CalendarCheckbox";

export const StudentEducationClub = () => {
  const fields = [
    { name: "clubMember", placeholder: "משתתף במועדונית?", type: "checkbox" },
    { name: "theCommittee", placeholder: "הועדה מתאריך", type: "text" },
    { name: "private", placeholder: "פרטי?", type: "checkbox" },
    { name: "paymentType", placeholder: "סוג תשלום", type: "text" },
    { name: "cost", placeholder: "מחיר לתשלום", type: "text" },
    { name: "startDate", placeholder: "התחיל להשתתף בתאריך:", type: "date" },
    { name: "clubDocumentation", placeholder: "תעוד שיחות", type: "text" },
    { name: "clubInvoicesURL", placeholder: "צרוף קבלות", type: "file" },
    { name: "leavingDate", placeholder: "תאריך עזיבה", type: "date" },
  ];
  const paymentType = ["הוראת קבע", "מזומן", "צ'ק"];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  };

  return (
    <div className="div-utef">
      {fields.map((field, index) => {
        return field.name === "clubMember" ||
          field.name === "private" ||
          field.name === "leavingDate" ||
          field.name === "startDate" ? (
          <div
            className="unique-div"
            style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
          >
            <label>{field.placeholder}</label>
            <input type={field.type} className="date-input" />{" "}
          </div>
        ) : field.name === "theCommittee" ? (
          <div
            className="unique-div"
            style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
          >
            <label>{field.placeholder}</label>
            <input type="checkbox" className="date-input" />
            <input type="date" className="date-input" />
          </div>
        ) : field.name === "paymentType" ? (
          <select className="unique-select" name={`${field.name}-right`}>
            <option value="" disabled selected>
              {field.placeholder}
            </option>
            {paymentType.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : field.name === "clubInvoicesURL" ? (
          <div
            className="unique-div"
            style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
          >
            <label>{field.placeholder}</label>
            <input type="file" onChange={handleFileChange} />
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
      <CalendarCheckbox />
    </div>
  );
};
