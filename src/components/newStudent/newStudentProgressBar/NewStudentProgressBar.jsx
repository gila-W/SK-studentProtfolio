import React, { useState, useEffect } from "react";
import "./NewStudentProgressBar.css";
import { Training } from "../training/Training";
import { Accessbility } from "../accessbility/Accessbility";
import { Audiology } from "../audiology/Audiology";
import { StudentPersonalDetails } from "../studentPersonalDetails/StudentPersonalDetails";
import { StudentEducationDetails } from "../studentEducation/StudentEducationDetails";
import { useNavigate, Outlet } from "react-router-dom";
import { useStudents } from "../../../utils/UseLists";
import { StudentEducationClub } from "../studentEducation/StudentEducationClub";
import {StudentEducationCommitteePreparing} from '../studentEducation/StudentEducationCommitteePreparing'
import {SpeechTherapist} from '../audiology/SpeechTherapist'
import {StudentEducationSegmentationHours} from '../studentEducation/StudentEducationSegmentationHours'
export const NewStudentProgressBar = () => {
  const [uniqueCode, setUniqueCode] = useState(null);
  const { data: students } = useStudents(); // Call the hook to get the students data
  const generateUniqueCode = () => {
    const existingCodes = new Set(
      students.map((student) => student.studentCode)
    );
    let newCode;
    do {
      newCode = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); // ייצור קוד אקראי בטווח בלתי מוגבל
    } while (existingCodes.has(newCode));

    return newCode;
  };
  useEffect(() => {
    if (students) {
        const code = generateUniqueCode(students);
        setUniqueCode(code);
    }
}, []);

  const [studentPersonalDetails, setStudentPersonalDetails] = useState({
    studentCode: uniqueCode,
    cityCode: "",
    firstName: "",
    lastName: "",
    tz: "",
    dateOfBirth: "",
    age: "",
    city: "",
    address: "",
    class: "",
    telephone: "",
    email: "",
    fatherName: "",
    motherName: "",
    gender: "",
    healthFund: "",
    newspaper: false,
    allowance: false,
  });
  const [studentEducationDetails, setStudentEducationDetails] = useState({
    studentCode: uniqueCode,
    audioTeacher: "",
    cordinator: "",
    cordinatorEmail: "",
    cordinatorPhone: "",
    educationStatus: "",
    educationType: "",
    institutionAdress: "",
    institutionCity: "",
    institutionName: "",
    institutionPhone: "",
    institutionSymbol: "",
    institutionType: "",
  });
  const [studentEducationCommitteePreparing, setStudentEducationCommitteePreparing] = useState({
    studentCode: uniqueCode,
    parentsConversation: "",
    committeeDate: "",
    disabilitySeverityFormDate: "",
    teacherConversation: "",

  });
  const [studentEducationClub, setStudentEducationClub] = useState({
    studentCode: uniqueCode,
    calendar: "",
    clubDocumentation: "",
    clubInvoicesURL: "",
    clubMember: false,
    cost: 0,
    leavingDate: "",
    paymentType: "",
    private: false,
    startDate: "",
    theCommittee: false,
    theCommitteeDate: "",
  });

  console.log("studentEducationCommitteePreparing",studentEducationCommitteePreparing);
  console.log("studentEducationDetails",studentEducationDetails);
  console.log("studentPersonalDetails",studentPersonalDetails);
  console.log("studentEducationClub",studentEducationClub);

  useEffect(() => {
    if (uniqueCode !== null) {
      setStudentPersonalDetails((prev) => ({
            ...prev,
            studentCode: uniqueCode,
        }));
      setStudentEducationDetails((prev) => ({
          ...prev,
          studentCode: uniqueCode,
      }));
      setStudentEducationCommitteePreparing((prev) => ({
        ...prev,
        studentCode: uniqueCode,
    }));
    setStudentEducationClub((prev) => ({
      ...prev,
      studentCode: uniqueCode,
  }));
    }
}, [uniqueCode]); 

  const navigate = useNavigate();
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  // const [currentNestedStep, setCurrentNestedStep] = useState();
  const [currentNestedStep, setCurrentNestedStep] = useState(null); // Initialize as null

  const steps = [
    {
      title: "פרטים אישיים",
      component: StudentPersonalDetails,
      object:setStudentPersonalDetails
    },
    {
      title: "חינוך",
      component: StudentEducationDetails,
      object:setStudentEducationDetails,
      additionalComponents: [
        { title: "פילוח שעות", component: StudentEducationSegmentationHours },
        { title: "הערכות לועדה", component: StudentEducationCommitteePreparing , object:setStudentEducationCommitteePreparing},
        { title: "מועדונית", component: StudentEducationClub , object:setStudentEducationClub },
      ],
    },
    {
      title: "אודיאולוגיה",
      component: Audiology,
      additionalComponents: [{ title: "טיפולי דיבור", component: SpeechTherapist }],
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
  // const CurrentNestedComponent = steps[currentStep].additionalComponents[currentNestedStep].component;
  const CurrentNestedComponent = currentNestedStep !== null ? steps[currentStep].additionalComponents[currentNestedStep]?.component : null;

  const nextStep = () => {
    setIsNestedOpen(false);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    setCurrentNestedStep(null); // Reset nested step when moving to previous step

  };
  const previousStep = () => {
    setIsNestedOpen(false);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setCurrentNestedStep(null); // Reset nested step when moving to previous step

  };
  
  const handleNestedComponent = (index) => {
    setIsNestedOpen(true);
    setCurrentNestedStep(index)
    // navigate(nav);
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
            <CurrentComponent object={steps[currentStep].object}/>
            <br/>
            {steps[currentStep].additionalComponents &&
              steps[currentStep].additionalComponents.map((additional,index) => (
                <button  key={index} className="outlet-button" onClick={() => handleNestedComponent(index)}>
                  {additional.title}
                </button>
              ))}
            {/* {isNestedOpen && <CurrentNestedComponent object={steps[currentStep].additionalComponents[currentNestedStep].object}/>} */}
            {CurrentNestedComponent && <CurrentNestedComponent object={steps[currentStep].additionalComponents[currentNestedStep]?.object} />}

            <br/>
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
