import React from 'react'
import './StudentEducation.css'

export const StudentEducationDetails=() =>{
    const fields = [
        { name: "email", placeholder: "Email", type: "text" },
        { name: "pass", placeholder: "Password", type: "password" },
        { name: "cpass", placeholder: "Confirm Password", type: "password" },
      ];
    
      return (
        <>
          {fields.map((field, index) => (
            <input key={index} type={field.type} name={field.name} placeholder={field.placeholder} />
          ))}
        </>
      );
}
