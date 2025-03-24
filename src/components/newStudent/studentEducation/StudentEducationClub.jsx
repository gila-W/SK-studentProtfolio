import React from "react";
import "./StudentEducation.css";
import CalendarCheckbox from "./CalendarCheckbox";

export const StudentEducationClub = (props) => {
  const setObject = props.object;
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setObject((prevState) => ({
      ...prevState,
      clubInvoicesURL: file,
    }));
  };

  return (
    <div className="div-utef">
      {fields.map((field, index) => {
        return field.name === "theCommittee" ? (
          <div
            className="unique-div"
            style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
          >
            <label>{field.placeholder}</label>
            <input
              type="checkbox"
              className="date-input"
              onChange={(e) =>
                setObject((prevState) => ({
                  ...prevState,
                  theCommittee: e.target.checked,
                }))
              }
            />
            <input
              type="date"
              className="date-input"
              onChange={(e) =>
                setObject((prevState) => ({
                  ...prevState,
                  theCommitteeDate: e.target.value,
                }))
              }
            />
          </div>
        ) : field.name === "paymentType" ? (
          <select
            className="unique-select"
            onChange={(e) =>
              setObject((prevState) => ({
                ...prevState,
                [field.name]: e.target.value,
              }))
            }
          >
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
          <div
            className="unique-div"
            style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
          >
            <label>{field.placeholder}</label>
            <input
              className="unique-input2"
              type={field.type}
              onChange={(e) =>
                setObject((prevState) => ({
                  ...prevState,
                  [field.name]: e.target.value,
                }))
              }
            />
          </div>
        );
      })}
      <CalendarCheckbox setObject={setObject}/>
    </div>
  );
};
