import React, { useState } from "react";
import "./CalendarCheckbox.css";

const CalendarCheckbox = (props) => {
  const setObject=props.setObject;
  const months = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];

  const [checkedMonths, setCheckedMonths] = useState(
    Array(months.length).fill(false)
  );
 
  const handleCheckboxChange = (index) => {
    setCheckedMonths((prevCheckedMonths) => {
      const newCheckedMonths = [...prevCheckedMonths];
      newCheckedMonths[index] = !newCheckedMonths[index];
  
      // עדכון ה-state של studentEducationClub
      setObject((prevState) => {
        const newCalendar = [...prevState.calendar];
        newCalendar[index] = newCheckedMonths[index]; // עדכון הערך המתאים
        return { ...prevState, calendar: newCalendar };
      });
  
      return newCheckedMonths;
    });
  };

  return (
    <div className="month-calendar-container">
      <table className="month-calendar-table">
        <tbody>
          <tr>
            <td className="month-calendar-td">חודש</td>
            {months.map((month, index) => (
              <td key={index}>{month}</td>
            ))}
          </tr>
          <tr>
            <td className="month-calendar-td">תשלום</td>
            {months.map((_, index) => (
              <td className="month-calendar-td" key={index}>
                <input
                  type="checkbox"
                  checked={checkedMonths[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarCheckbox;
