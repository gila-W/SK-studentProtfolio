import React from "react";
import "./StudentEducation.css";

export const StudentEducationCommitteePreparing = (props) => {
    const setObject = props.object;

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
        return (
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
    </div>
  );
};
