import React from "react";
import "./Audiology.css";
export const Audiology = () => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // כאן תוכל לכתוב את הלוגיקה להעלאת הקובץ לשרת
    };

    const fields2 = [
        { name: "city", placeholder: "סוג הירידה",options: ["הולכתי", "מעורב", "ת'ע","תקין"]  },
        { name: "class", placeholder: "רמת ירידה" ,options: ["קל", "בינוני","חמורה","עמוקה"] },
        { name: "class", placeholder: "קבועה או ממושכת" },
        { name: "fatherName", placeholder: "SRT" },
        { name: "motherName", placeholder: "גורמ/ים נלוים" ,options: ["נוזלים", "דלקות","מחלות","נוירופטיה"]},
        { name: "fatherPhone", placeholder: "עזר שמיעתי" ,options: ["מכשיר", "שתל","בהה"]},
        { name: "motherPhone", placeholder: "הותאם בתאריך" },
        { name: "healthFund", placeholder: "תדירויות ביניים" },
        { name: "healthFund", placeholder: "תדירויות גבוהות" },
    ];

  const fields = [
    { name: "gender", placeholder: "FM", type: "text" },

    {
      name: "healthFund",
      placeholder: "האם יש לקות שמיה במשפחה",
      type: "text",
    },
    { name: "healthFund", placeholder: "מי לקוי שמיעה במשפחה", type: "text" },
    { name: "healthFund", placeholder: "רמת מוגבלות בשמיעה", type: "text" },
    { name: "healthFund", placeholder: "הפנית אאג", type: "text" },
    {
      name: "healthFund",
      placeholder: "תאריך ועדת זכאות ואפיון",
      type: "text",
    },
    {
      name: "healthFund",
      placeholder: "תאריך ועדת זכאות ואפיון אחרונה",
      type: "text",
    },
  ];

  return (
    <div className="div-utef">
      <div
        className="unique-div"
        style={{ display: "inline-flex", direction: "rtl" }}
      >
        <label>2 בדיקות שמיעה מזכות מתאריך </label>
        <div className="unique-div" style={{ width: "15vw" }}>
          <input type="date" className="date-input" />{" "}
        </div>
        <div className="unique-div" style={{ width: "15vw" }}>
          <input type="date" className="date-input" />{" "}
        </div>
      </div>
      <div
        className="unique-div"
        style={{ display: "inline-flex", direction: "rtl", gap: "30px" }}
      >
        <label>ערכים מהקולגרף ע"י בדיקת שמיעה מתאריך</label>
        <input type="date" className="date-input" />{" "}
      </div>
      <div
        className="unique-div"
        style={{ display: "inline-flex", direction: "rtl", gap: "20px" }}
      >
        <input
          type="radio"
          name="side"
          value="חד צידי"
        />
        <label>חד צידי</label>
        <input
          type="radio"
          name="side"
          value="דו צידי"
        />
        <label>דו צידי</label>
        <input
          type="radio"
          name="side"
          value="דו צידי"
        />
        <label>אחר</label>
      </div>
      <div
        className="unique-div"
        style={{ display: "inline-flex", direction: "rtl", gap: "20px" }}

      >
        <label>העלאת בדיקת שמיעה</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <table>
            <thead>
                <tr>
                    <th>ימין</th>
                    <th>שמאל</th>
                </tr>
            </thead>
            <tbody>
                {fields2.map((field, index) => (
                    <tr key={index}>
                        <td>
                            {field.options ? (
                                <select className="unique-select" name={`${field.name}-right`}>
                                <option value="" disabled selected>{field.placeholder}</option>
                                    {field.options.map((option, optionIndex) => (
                                        <option key={optionIndex} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <input className="unique-input" type="text" name={`${field.name}-right`} placeholder={field.placeholder} />
                            )}
                        </td>
                        <td>
                            {field.options ? (
                                <select className="unique-select" name={`${field.name}-left`}>
                                <option value="" disabled selected>{field.placeholder}</option>
                                    {field.options.map((option, optionIndex) => (
                                        <option key={optionIndex} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <input className="unique-input" type="text" name={`${field.name}-left`} placeholder={field.placeholder} />
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};
