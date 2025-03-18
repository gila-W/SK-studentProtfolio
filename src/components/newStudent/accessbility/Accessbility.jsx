import React, { useState } from "react";
import "../audiology/Audiology.css";

export const Accessbility = () => {
  const [sections, setSections] = useState([
    { id: Date.now(), isAccessible: false, institutionName: "" },
  ]);

  const fields = [
    { label: "הנגשה בתאריך", type: "date" },
    { label: "סיור חוזר", type: "checkbox" },
    { label: "כיתה מונגשת במוסד", type: "checkbox" },
  ];

  const addSection = (e) => {
    e.preventDefault();
    setSections([
      ...sections,
      { id: Date.now(), isAccessible: false, institutionName: "" },
    ]);
  };

  const handleCheckboxChange = (id, label) => {
    if (label === "כיתה מונגשת במוסד")
      setSections(
        sections.map((section) =>
          section.id === id
            ? { ...section, isAccessible: !section.isAccessible }
            : section
        )
      );
  };

  const handleInstitutionNameChange = (id, value) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, institutionName: value } : section
      )
    );
  };

  return (
    <div className="div-utef2">
      {sections.map((section) => (
        <div
          key={section.id}
          style={{
            // alignContent: "center",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          {fields.map((field, index) => (
            <div
              key={index}
              className="unique-div"
            >
              <label>{field.label}</label>
              {field.type === "date" ? (
                <input type="date" className="date-input" />
              ) : field.type === "checkbox" ? (
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(section.id, field.label)}
                />
              ) : null}
            </div>
          ))}
          {section.isAccessible && (
            <div className="unique-div" style={{ marginTop: "10px" }}>
              <label>שם המוסד:</label>
              <input
                type="text"
                value={section.institutionName}
                onChange={(e) =>
                  handleInstitutionNameChange(section.id, e.target.value)
                }
              />
            </div>
          )}
        </div>
      ))}
      <button onClick={addSection}>+</button>
    </div>
  );
};
