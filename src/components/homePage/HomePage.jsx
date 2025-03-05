import React from "react";
import { Routing } from "../../utils/Routing ";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate=useNavigate()
  return (
    <div style={{ width:"100%",backgroundColor: "red",height:"100%" }}>
      home page
      {/* <button onClick={()=>{navigate("/student-details")}}> </button> */}
      <Routing></Routing>
    </div>
  );
};
