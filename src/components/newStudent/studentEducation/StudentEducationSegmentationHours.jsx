import React from "react";
import "./StudentEducation.css";
import "../newStudentProgressBar/NewStudentProgressBar.css";

export const StudentEducationSegmentationHours = (props) => {
  const fields = [
    { name: "hearingLevel", placeholder: "רמת שמיעה", type: "text" },
    { name: "committeeDecision", placeholder: "החלטת ועדה", type: "text" },
    { name: "segmentationStatus", placeholder: "סטטוס", type: "text" },
    { name: "segmentationCode", placeholder: "קוד", type: "text" },
    { name: "fieldExpert", placeholder: "מומחית תחום", type: "text" },
    { name: "speatchTherapist", placeholder: "קלינאית תקשורת", type: "text" },
    { name: "emotional", placeholder: "רגשי", type: "text" },
    { name: "skills", placeholder: "מיומנויות", type: "text" },
    { name: "adeptedTeacher", placeholder: "מורה מתאמת", type: "text" },
    { name: "therapeutic", placeholder: "טיפולי", type: "text" },
    { name: "emotionalHome", placeholder: "רגשי בית", type: "text" },
    { name: "assistant", placeholder: "סייעת", type: "text" },
    { name: "behavionalAnalysis", placeholder: "ניתוח התנהגות", type: "text" },
    { name: "artTherapist", placeholder: "מטפל באומנות", type: "text" },
    { name: "approvedForAYear", placeholder: "אושר לשנה?", type: "checkbox" },
  ];
  const status = [
    "הועבר לתיקצוב",
    "ממתין לאישור האגף",
    "ממתין לעידכון",
    "אושר",
  ];
  const setObject = props.object;

  return (
    <div className="div-utef">
      <>
        {fields.map((field, index) => {
          return field.name === "segmentationCode" ? (
            <div
              className="unique-div"
              style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
            >
              <label>{field.placeholder}</label>
              <input
                className="code-input"
                type={field.type}
                onChange={(e) =>
                  setObject((prevState) => ({
                    ...prevState,
                    segmentationCodeA: e.target.value,
                  }))
                }
              />
              <input
                className="code-input"
                type={field.type}
                onChange={(e) =>
                  setObject((prevState) => ({
                    ...prevState,
                    segmentationCodeB: e.target.value,
                  }))
                }
              />
              <input
                className="code-input"
                type={field.type}
                onChange={(e) =>
                  setObject((prevState) => ({
                    ...prevState,
                    segmentationCodeC: e.target.value,
                  }))
                }
              />
            </div>
          ) : field.name === "segmentationStatus" ? (
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
              {status.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <div
              className="unique-div"
              style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
            >
              <label>{field.placeholder}</label>
              <input className="unique-input2" type={field.type} onChange={(e) =>
              setObject((prevState) => ({
                ...prevState,
                [field.name]: e.target.value,
              }))
            }/>
            </div>
          );
        })}
      </>
    </div>
  );
};
