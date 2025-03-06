import React from 'react'
import './Training.css'
export const Training=() =>{
    const fields = [
        { name: "email", placeholder: "Email", type: "text" },
      
      ];
    
      return (
        <>
          {fields.map((field, index) => (
            <input key={index} type={field.type} name={field.name} placeholder={field.placeholder} />
          ))}
        </>
      );
}
