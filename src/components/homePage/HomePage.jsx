import React from "react";
import { Routing } from "../../utils/Routing ";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <a href="">מקבלי שרות/שמות הילדים</a>
        </li>
        <li>
          <a href="">עובדים</a>
        </li>
        <li>
          <a href="">עיריות</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
  <Routing></Routing>;
};
