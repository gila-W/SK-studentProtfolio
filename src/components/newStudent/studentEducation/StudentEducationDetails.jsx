import React from "react";
import "./StudentEducation.css";

export const StudentEducationDetails = () => {
  const fields = [
    { name: "institutionType", placeholder: "סוג המסגרת", type: "text" },
    { name: "institutionName", placeholder: "שם המוסד", type: "text" },
    { name: "institutionSymbol", placeholder: "סמל מוסד", type: "text" },
    { name: "institutionPhone", placeholder: "טלפון המוסד", type: "text" },
    { name: "institutionCity", placeholder: "עיר המוסד", type: "text" },
    { name: "institutionAdress", placeholder: "כתובת המוסד", type: "text" },
    { name: "cordinator", placeholder: "רכזת שילוב", type: "text" },
    { name: "cordinatorPhone", placeholder: "טלפון רכזת שילוב", type: "text" },
    { name: "cordinatorEmail", placeholder: "מייל רכזת שילוב", type: "text" },
    { name: "audioTeacher", placeholder: "מורת שמע", type: "text" },
    { name: "educationType", placeholder: "סוג חינוך", type: "text" },
    { name: "educationStatus", placeholder: "מעמד", type: "text" },
  ];

  const optionsList = {
    institutionType: ["גן", "מעון", "בית ספר", "תיכון", "ישיבה"],
    educationType: [
      "בית ספר חינוך מיוחד",
      "כיתה מקדמת",
      "גן לקויי שמיעה",
      "גן רגיל",
      "גן שפה",
    ],
    educationStatus: ["מוכש'ר", "פטור", "תרבותי יחודי", "ממ'ח"],
  };

  return (
    <div className="div-utef">
      {fields.map((field, index) => {
        return field.name === "educationStatus" ||
          field.name === "educationType" ||
          field.name === "institutionType" ? (
          <select className="unique-select" name={`${field.name}-right`}>
            <option value="" disabled selected>
              {field.placeholder}
            </option>
            {optionsList[field.name].map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
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
