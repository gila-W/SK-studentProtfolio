import React from "react";
import "./Audiology.css";
import { HebrewCalendar } from "./MyCalender";

export const SpeechTherapist = () => {
  const fields = [
    { name: "therapistName", placeholder: "שם הקלינאית", type: "text" },
    {
      name: "documantationConverstions",
      placeholder: "תיעוד שיחות",
      type: "text",
    },
    {
      name: "speechTherapistInvoicesURL",
      placeholder: "צרוף קבלות",
      type: "file",
    },
  ];
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div
            className="unique-div"
            style={{ display: "inline-flex", direction: "rtl", gap: "30px", margin: "1.1%" }}
          >
            <label>{field.placeholder}</label>
            <input type={field.type} className="date-input" />{" "}
          </div>
        );
      })}
      <div
        className="unique-div"
        style={{ display: "inline-flex", direction: "rtl", gap: "30px" , margin: "1.1%"}}
      >
        <label>סיום טיפולים?</label>
        <input type="checkbox" className="date-input" />{" "}
        <input type="date" className="date-input" />{" "}
      </div>
      <HebrewCalendar />
    </div>
  );
};
