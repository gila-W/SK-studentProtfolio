import React, { useState } from "react";
import "../audiology/Audiology.css";


export const Accessbility = () => {
  const [sections, setSections] = useState([{ id: Date.now(), isClassAccessible: false }]);

  const fields = [
    { label: "הנגשה בתאריך", type: "date" },
  ];

  const addSection = (e) => {
    e.preventDefault();
    setSections([...sections, { id: Date.now(), isClassAccessible: false }]);
  };

  const handleCheckboxChange = (id, fieldType) => {
    if (fieldType === "classAccessible") {
      setSections(sections.map(section => section.id === id ? { ...section, isClassAccessible: !section.isClassAccessible } : section));
    }
  };

  return (
    <div className="div-utef">
      {sections.map((section) => (
        <div key={section.id} className="unique-div" style={{ display: "flex", flexDirection: "column", direction: "rtl", marginBottom: "20px" }}>
          {fields.map((field, index) => {
            if (field.type === "date") {
              return (
                <div key={index}>
                  <label>{field.label}</label>
                  <input type="date" className="date-input" />
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
      {sections.map((section) => (
        <div key={section.id} className="unique-div" style={{ marginTop: "10px" }}>
          <label>סיור חוזר</label>
          <input type="checkbox" />
        </div>
      ))}
      {sections.map((section) => (
        <div key={section.id} className="unique-div" style={{ marginTop: "10px" }}>
          <label>כיתה מונגשת במוסד</label>
          <input type="checkbox" checked={section.isClassAccessible} onChange={() => handleCheckboxChange(section.id, "classAccessible")} />
          {section.isClassAccessible && (
            <input className="unique-input" type="text" placeholder="שם המוסד" style={{ marginTop: "10px",width:"100px" }} />
          )}
        </div>
      ))}
      <button onClick={addSection}>+</button>
    </div>
  );
};




// import React from 'react'
// import './Accessbility.css'
// export const Accessbility=() =>{
//     const fields = [
//         { name: "email", placeholder: "Email", type: "text" },
//         { name: "accessedOn", placeholder: "הנגשה בתאריך", type: "date" },
//         { name: "accessedOn", placeholder: "סיור חוזר", type: "date" },
//         { name: "accessedOn", placeholder: "כיתה מונגשת במוסד", type: "date" },
//       ];
    
//       return (
//         <>
//           {fields.map((field, index) => (
//             <input key={index} type={field.type} name={field.name} placeholder={field.placeholder} />
//           ))}
//           <div className="unique-div">סיור חוזר<input type="checkbox" /></div>
//      <div className="unique-div">כיתה מונגשת במוסד<input type="checkbox" /></div>
//         </>
//       );
// }
