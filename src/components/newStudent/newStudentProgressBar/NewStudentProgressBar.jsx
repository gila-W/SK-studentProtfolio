import React, { useState, useEffect } from "react";
import "./NewStudentProgressBar.css";
import { Training } from "../training/Training";
import { Accessbility } from "../accessbility/Accessbility";
import { Audiology } from "../audiology/Audiology";
import { StudentPersonalDetails } from "../studentPersonalDetails/StudentPersonalDetails";
import { StudentEducationDetails } from "../studentEducation/StudentEducationDetails";
import { useNavigate, Outlet } from "react-router-dom";

export const NewStudentProgressBar = () => {
  const navigate = useNavigate();
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "פרטים אישיים",
      component: StudentPersonalDetails,
    },
    {
      title: "חינוך",
      component: StudentEducationDetails,
      additionalComponents: [
        { name: "פילוח שעות", nav: "StudentEducationSegmentationHours" },
        { name: "הערכות לועדה", nav: "StudentEducationCommitteePreparing" },
        { name: "מועדונית", nav: "StudentEducationClub" },
      ],
    },
    {
      title: "אודיאולוגיה",
      component: Audiology,
      additionalComponents: [{ name: "טיפולי דיבור", nav: "SpeechTherapist" }],
    },
    {
      title: "הנגשה",
      component: Accessbility,
    },
    {
      title: "הדרכה",
      component: Training,
    },
  ];
  const CurrentComponent = steps[currentStep].component;
  const nextStep = () => {
    setIsNestedOpen(false);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };
  const previousStep = () => {
    setIsNestedOpen(false);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  const handleNestedComponent = (nav) => {
    setIsNestedOpen(true);
    navigate(nav);
  };

  return (
    <div className="new-student-progress-bar">
      <div id="msform">
        <ul id="progressbar">
          {steps.map((step, index) => (
            <li key={index} className={index === currentStep ? "active" : ""}>
              {step.title}
            </li>
          ))}
        </ul>
        <fieldset>
          <h2 className="fs-title">{steps[currentStep].title}</h2>
          <section className="NewStudentProgressBar-section">
            <CurrentComponent />
            {steps[currentStep].additionalComponents &&
              steps[currentStep].additionalComponents.map((additional) => (
                <button onClick={() => handleNestedComponent(additional.nav)}>
                  {additional.name}
                </button>
              ))}
            {isNestedOpen && <Outlet />}
            <input
              type="button"
              name="קודם"
              className="previous action-button-previous"
              value="Previous"
              onClick={previousStep}
              disabled={currentStep === 0}
            />
            <input
              type="button"
              name="הבא"
              className="next action-button"
              value="Next"
              onClick={nextStep}
            />
          </section>
        </fieldset>
      </div>
    </div>
  );
};
