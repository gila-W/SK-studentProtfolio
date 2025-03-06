import React, { useState } from 'react';
import './NewStudentProgressBar.css'
import { Training } from '../training/Training';
import { Accessbility } from '../accessbility/Accessbility';
import { Audiology } from '../audiology/Audiology';
import { StudentPersonalDetails } from '../studentPersonalDetails/StudentPersonalDetails';
import { StudentEducationDetails } from '../studentEducation/StudentEducationDetails';

export const NewStudentProgressBar = () => {
  
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "פרטים אישיים",
      component: StudentPersonalDetails,
    },
    {
      title: "חינוך",
      component: StudentEducationDetails,
    },
    {
      title: "אודיאולוגיה",
      component: Audiology,
    },
    {
      title: "הנגשה",
      component: Accessbility,
    },
    {
      title: "הדרכה",
      component: Training,
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <form id="msform">
      <ul id="progressbar">
        {steps.map((step, index) => (
          <li key={index} className={index === currentStep ? 'active' : ''}>{step.title}</li>
        ))}
      </ul>
      <fieldset>
        <h2 className="fs-title">{steps[currentStep].title}</h2>
        <CurrentComponent />
        <input type="button" name="קודם" className="previous action-button-previous" value="Previous" onClick={previousStep} disabled={currentStep === 0} />
        <input type="button" name="הבא" className="next action-button" value="Next" onClick={nextStep} />
      </fieldset>
    </form>
  );
};

