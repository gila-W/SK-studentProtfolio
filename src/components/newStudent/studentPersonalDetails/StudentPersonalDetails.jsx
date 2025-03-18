import React, { useState } from "react";
import "./StudentPersonalDetails.css";

export const StudentPersonalDetails = (props) => {
  const setObject = props.object;

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
      {fields.map((field, index) => {
        return field.name === "healthFund" ? (
          <select
            className="unique-select"
            key={index}
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
            {healthFund.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <div
            key={index}
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
                  [field.name]:
                    field.type === "checkbox"
                      ? e.target.checked
                      : e.target.value,
                }))
              }
            />
          </div>
        );
      })}
    </div>
  );
};
