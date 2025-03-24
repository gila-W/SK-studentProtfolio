import React from "react";
import "./Audiology.css";
import { data } from "react-router-dom";

export const Audiology = (props) => {
  const setObject = props.object;

  const handleFileChange = (e, name) => {
    const file = e.target.files[0];
    setObject((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };
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
          };

          if (field.name === "qualifyingHearingTest") {
            return (
              <div key={index} className="unique-div" style={divStyle}>
                <label>{field.placeholder}</label>
                <input
                  type="date"
                  className="date-input-container"
                  onChange={(e) =>
                    setObject((prevState) => ({
                      ...prevState,
                      qualifyingHearingTestA: e.target.value,
                    }))
                  }
                />
                <input
                  type="date"
                  className="date-input-container"
                  onChange={(e) =>
                    setObject((prevState) => ({
                      ...prevState,
                      qualifyingHearingTestB: e.target.value,
                    }))
                  }
                />
              </div>
            );
          }

          if (field.name === "recentHearingTest") {
            return (
              <div key={index} className="unique-div" style={divStyle}>
                <label>{field.placeholder}</label>
                <input
                  type="date"
                  className="date-input"
                  onChange={(e) =>
                    setObject((prevState) => ({
                      ...prevState,
                      [field.name]: e.target.value,
                    }))
                  }
                />
              </div>
            );
          }

          if (field.name === "hearingLoss") {
            return (
              <div key={index} className="unique-div" style={divStyle}>
                <label>סוג ירידת שמיעה:</label>
                <input
                  type="radio"
                  name="side"
                  value="חד צידי"
                  onChange={(e) =>
                    setObject((prevState) => ({
                      ...prevState,
                      hearingLoss: e.target.value,
                    }))
                  }
                />
                <label>חד צידי</label>
                <input
                  type="radio"
                  name="side"
                  value="דו צידי"
                  onChange={(e) =>
                    setObject((prevState) => ({
                      ...prevState,
                      hearingLoss: e.target.value,
                    }))
                  }
                />
                <label>דו צידי</label>
                <input
                  type="radio"
                  name="side"
                  value="אחר"
                  onChange={(e) =>
                    setObject((prevState) => ({
                      ...prevState,
                      hearingLoss: e.target.value,
                    }))
                  }
                />
                <label>אחר</label>
              </div>
            );
          }

          if (field.name === "hearingTestPdfURL") {
            return (
              <div key={index} className="unique-div" style={divStyle}>
                <label>{field.placeholder}</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, field.name)}
                />
              </div>
            );
          }

          return null;
        })}
      </div>
      <div style={{ margin: "20px 0" }}></div>
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
                        onChange={(e) =>
                          setObject((prevState) => ({
                            ...prevState,
                            [`${field.name}Right`]: e.target.value,
                          }))
                        }
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
                    ) : field.name === "modifiedOn" ? (
                      <div className="unique-div">
                        <label>{field.placeholder}</label>
                        <input
                          className="unique-input2"
                          type="date"
                          onChange={(e) =>
                            setObject((prevState) => ({
                              ...prevState,
                              [`${field.name}Right`]: e.target.value,
                            }))
                          }
                        />
                      </div>
                    ) : (
                      <input
                        className="unique-input"
                        type="text"
                        name={`${field.name}-right`}
                        placeholder={field.placeholder}
                        onChange={(e) =>
                          setObject((prevState) => ({
                            ...prevState,
                            [`${field.name}Right`]: e.target.value,
                          }))
                        }
                      />
                    )}
                  </td>
                  <td>
                    {field.options ? (
                      <select
                        className="unique-select"
                        name={`${field.name}-left`}
                        onChange={(e) =>
                          setObject((prevState) => ({
                            ...prevState,
                            [`${field.name}Left`]: e.target.value,
                          }))
                        }
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
                    ): field.name === "modifiedOn" ? (
                      <div className="unique-div">
                        <label>{field.placeholder}</label>
                        <input
                          className="unique-input2"
                          type="date"
                          onChange={(e) =>
                            setObject((prevState) => ({
                              ...prevState,
                              [`${field.name}Left`]: e.target.value,
                            }))
                          }
                        />
                      </div>
                    ) : (
                      <input
                        className="unique-input"
                        type="text"
                        name={`${field.name}-left`}
                        placeholder={field.placeholder}
                        onChange={(e) =>
                          setObject((prevState) => ({
                            ...prevState,
                            [`${field.name}Left`]: e.target.value,
                          }))
                        }
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
              <input
                type={field.type}
                onChange={(e) =>
                  setObject((prevState) => ({
                    ...prevState,
                    isHearingLossInFamily: e.target.checked,
                  }))
                }
              />
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
              <input
                type={field.type}
                onChange={(e) => handleFileChange(e, field.name)}
              />
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
              <input
                type="date"
                className="date-input"
                onChange={(e) =>
                  setObject((prevState) => ({
                    ...prevState,
                    [field.name]: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <input
              className="unique-input"
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              style={{ margin: "1.1%" }}
              onChange={(e) =>
                setObject((prevState) => ({
                  ...prevState,
                  [field.name]:
                    field.type === "checkbox"
                      ? e.target.checked
                      : e.target.value,
                }))
              }
            />
          );
        })}
      </div>
    </div>
  );
};
