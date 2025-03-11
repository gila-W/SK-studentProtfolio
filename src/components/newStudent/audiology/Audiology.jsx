import React from "react";
import "./Audiology.css";
import { useNavigate } from "react-router-dom";

export const Audiology = () => {

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // כאן תוכל לכתוב את הלוגיקה להעלאת הקובץ לשרת
  };

  const fields2 = [
    {
      name: "hearingLossType",
      placeholder: "סוג הירידה",
      options: ["הולכתי", "מעורב", "ת'ע", "תקין"],
    },
    {
      name: "hearingLossTypeLevel",
      placeholder: "רמת ירידה",
      options: ["קל", "בינוני", "חמורה", "עמוקה"],
    },
    { name: "PermanentOrProlonged", placeholder: "קבועה או ממושכת" },
    { name: "SRT", placeholder: "SRT" },
    {
      name: "associatedFactorLeft",
      placeholder: "גורמ/ים נלוים",
      options: ["נוזלים", "דלקות", "מחלות", "נוירופטיה"],
    },
    {
      name: "hearingAidLeft",
      placeholder: "עזר שמיעתי",
      options: ["מכשיר", "שתל", "בהה"],
    },
    { name: "modifiedOn", placeholder: "הותאם בתאריך" },
    { name: "intermidateFrequencies", placeholder: "תדירויות ביניים" },
    { name: "highFrequencies", placeholder: "תדירויות גבוהות" },
  ];

  const fields = [
    {
      name: "qualifyingHearingTest",
      placeholder: "2 בדיקות שמיעה מזכות מתאריך ",
      type: "text",
    },
    {
      name: "recentHearingTest",
      placeholder: "ערכים מהקולגרף ע י בדיקת שמיעה מתאריך",
      type: "text",
    },
    { name: "hearingLoss", placeholder: "חד צידי", type: "text" },
    {
      name: "hearingTestPdfURL",
      placeholder: "העלאת בדיקת שמיעה",
      type: "text",
    },

    {
      name: "hearingLossType",
      placeholder: "סוג הירידה",
      options: ["הולכתי", "מעורב", "ת'ע", "תקין"],
    },
    {
      name: "hearingLossTypeLevel",
      placeholder: "רמת ירידה",
      options: ["קל", "בינוני", "חמורה", "עמוקה"],
    },
    { name: "PermanentOrProlonged", placeholder: "קבועה או ממושכת" },
    { name: "SRT", placeholder: "SRT" },
    {
      name: "associatedFactorLeft",
      placeholder: "גורמ/ים נלוים",
      options: ["נוזלים", "דלקות", "מחלות", "נוירופטיה"],
    },
    {
      name: "hearingAidLeft",
      placeholder: "עזר שמיעתי",
      options: ["מכשיר", "שתל", "בהה"],
    },
    { name: "modifiedOn", placeholder: "הותאם בתאריך" },
    { name: "intermidateFrequencies", placeholder: "תדירויות ביניים" },
    { name: "highFrequencies", placeholder: "תדירויות גבוהות" },
    { name: "FM", placeholder: "FM", type: "text" },

    {
      name: "isHearingLossInFamily",
      placeholder: "האם יש לקות שמיעה במשפחה",
      type: "checkbox",
    },
    {
      name: "hearingLossInFamily",
      placeholder: "מי לקוי שמיעה במשפחה?",
      type: "text",
    },
    {
      name: "hearingImpairmentLevel",
      placeholder: "רמת מוגבלות בשמיעה",
      type: "text",
    },
    { name: "AAGReferralURL", placeholder: "הפנית אאג", type: "file" },
    {
      name: "futureDateCommitee",
      placeholder: "תאריך ועדת זכאות ואפיון",
      type: "date",
    },
    {
      name: "lastDateCommittee",
      placeholder: "תאריך ועדת זכאות ואפיון אחרונה",
      type: "date",
    },
  ];

  return (
    <div style={{ direction: "rtl" }}>
      <div style={{ display: "flex", flexWrap: "wrap", marginRight: "7vw" }}>
        {fields.map((field, index) => {
          const divStyle = {
            display: "inline-flex",
            height: "7vh",
            alignItems: "center",
            margin: "1.1%",
          }; // הוספת מרווח

          if (field.name === "qualifyingHearingTest") {
            return (
              <div key={index} className="unique-div" style={divStyle}>
                <label>{field.placeholder}</label>
                <div
                  className="unique-div date-input-container"
                  style={{ width: "10vw" }}
                >
                  <input type="date" className="date-input" />
                </div>
                <div
                  className="unique-div date-input-container"
                  style={{ width: "10vw" }}
                >
                  <input type="date" className="date-input" />
                </div>
              </div>
            );
          }

          if (field.name === "recentHearingTest") {
            return (
              <div key={index} className="unique-div" style={divStyle}>
                <label>{field.placeholder}</label>
                <input type="date" className="date-input" />
              </div>
            );
          }

          if (field.name === "hearingLoss") {
            return (
              <div key={index} className="unique-div" style={divStyle}>
                <label>סוג ירידת שמיעה:</label>
                <input type="radio" name="side" value="חד צידי" />
                <label>חד צידי</label>
                <input type="radio" name="side" value="דו צידי" />
                <label>דו צידי</label>
                <input type="radio" name="side" value="אחר" />
                <label>אחר</label>
              </div>
            );
          }

          if (field.name === "hearingTestPdfURL") {
            return (
              <div key={index} className="unique-div" style={divStyle}>
                <label>{field.placeholder}</label>
                <input type="file" onChange={handleFileChange} />
              </div>
            );
          }

          return null;
        })}
      </div>
      <div style={{ margin: "20px 0" }}></div> {/* רווח בין הדיבים לטבלה */}
      <table className="left-right-table">
        <thead>
          <tr>
            <th>ימין</th>
            <th>שמאל</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => {
            if (index > 3 && index < 13) {
              return (
                <tr key={index}>
                  <td>
                    {field.options ? (
                      <select
                        className="unique-select"
                        name={`${field.name}-right`}
                      >
                        <option value="" disabled selected>
                          {field.placeholder}
                        </option>
                        {field.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        className="unique-input"
                        type="text"
                        name={`${field.name}-right`}
                        placeholder={field.placeholder}
                      />
                    )}
                  </td>
                  <td>
                    {field.options ? (
                      <select
                        className="unique-select"
                        name={`${field.name}-left`}
                      >
                        <option value="" disabled selected>
                          {field.placeholder}
                        </option>
                        {field.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        className="unique-input"
                        type="text"
                        name={`${field.name}-left`}
                        placeholder={field.placeholder}
                      />
                    )}
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <div style={{ margin: "20px 0" }}></div>{" "}
      {/* רווח בין הטבלה לדיבים האחרים */}
      <div className="last-fields">
        {fields.slice(13).map((field, index) => {
          return field.name === "isHearingLossInFamily" ? (
            <div
              className="unique-div"
              style={{
                display: "inline-flex",
                direction: "rtl",
                gap: "30px",
                margin: "1.1%",
              }}
            >
              <label>{field.placeholder}</label>
              <input type={field.type} />
            </div>
          ) : field.name === "AAGReferralURL" ? (
            <div
              className="unique-div"
              style={{
                display: "inline-flex",
                direction: "rtl",
                gap: "30px",
                margin: "1.1%",
              }}
            >
              <label>{field.placeholder}</label>
              <input type={field.type} onChange={handleFileChange} />
            </div>
          ) : field.name === "futureDateCommitee" ||
            field.name === "lastDateCommittee" ? (
            <div
              className="unique-div"
              style={{
                display: "inline-flex",
                direction: "rtl",
                gap: "30px",
                margin: "1.1%",
              }}
            >
              {" "}
              <label>{field.placeholder}</label>
              <input type="date" className="date-input" />
            </div>
          ) : (
            <input
              className="unique-input"
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              style={{ margin: "1.1%" }} // שווה לרוחב של הדיבים הקודמים
            />
          );
        })}
      </div>
    </div>
  );
};
