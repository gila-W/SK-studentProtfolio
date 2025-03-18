import React, { useState } from "react";
import "../audiology/Audiology.css";

export const Training = () => {
  const [sections, setSections] = useState([
    { id: Date.now(), isAccessible: false },
  ]);

  const fields = [
    { name: "date", placeholder: "תאריך", type: "date" },
    { name: "instructor", placeholder: "המדריכה", type: "text" },
    { name: "institution", placeholder: "מוסד", type: "text" },
    { name: "documantation", placeholder: "תעוד ההדרכה", type: "text" },
  ];

  const addSection = (e) => {
    e.preventDefault();
    setSections([
      ...sections,
      { id: Date.now(), isAccessible: false, institutionName: "" },
    ]);
  };

  return (
    <div className="div-utef">
      {sections.map((section) => (
        <div
          key={section.id}
          style={{
            alignContent: "center",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          {fields.map((field, index) => {
            return field.name === "date" ? (
              <div
                className="unique-div"
                style={{
                  display: "inline-flex",
                  direction: "rtl",
                  gap: "30px",
                }}
              >
                <label>{field.placeholder}</label>
                <input type={field.type} className="date-input" />{" "}
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
        </div>
      ))}
      <button onClick={addSection}>+</button>
    </div>
  );
};
