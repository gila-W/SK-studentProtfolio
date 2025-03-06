
// import React from "react";
// import {Routing} from "../../utils/Routing"
// import { useNavigate } from "react-router-dom";
// import "./HomePage.css"

// export const HomePage = () => {
//   const navigate = useNavigate();
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="">מקבלי שרות/שמות הילדים</a>
//         </li>
//         <li>
//           <a href="">עובדים</a>
//         </li>
//         <li>
//           <a href="">עיריות</a>
//         </li>
//         <li>
//           <a href="">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
//   <Routing></Routing>;
// };
import React from "react";
import { Routing } from "../../utils/Routing";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleNavigation('/students-details-list')}>מקבלי שרות / שמות הילדים</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/employees')}>עובדים</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/municipalities')}>עיריות</button>
        </li>
       
      </ul>
      {/* <Routing /> */}
    </nav>
  );
};


