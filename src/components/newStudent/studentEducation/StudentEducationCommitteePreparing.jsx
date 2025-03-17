import React from "react";
import "./StudentEducation.css";

export const StudentEducationCommitteePreparing = () => {
  const fields = [
    { name: "committeeDate", placeholder: "תאריך ועדה", type: "date" },
    {
      name: "disabilitySeverityFormDate",
      placeholder: "תאריך שליחת טופס חומרת מוגבלות",
      type: "date",
    },
    { name: "teacherConversation", placeholder: "תעוד שיחה", type: "text" },
    {
      name: "parentsConversation",
      placeholder: "תעוד שיחה עם ההורים",
      type: "text",
    },
  ];

  return (
    <div className="div-utef">
      {fields.map((field, index) => {
        return field.name === "committeeDate" ||
          field.name === "disabilitySeverityFormDate" ? (
          <div
            className="unique-div"
            style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
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
  );
};
