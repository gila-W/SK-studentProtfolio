import React from 'react'
import './Accessbility.css'
export const Accessbility=() =>{
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
