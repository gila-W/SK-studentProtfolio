
import React, { useState } from "react";
import "./LogIn.css"; // ייבא את קובץ ה-CSS שלך כאן
import { useQuery } from "react-query";
import { fetchUsers } from "../../utils/Services";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const { data: users = [] } = useQuery("systemUsers", fetchUsers);

  const LoginSecurity = () => {
    const isUser = users.find(
      (u) => u.userName == userName && u.password == password
    );
    // if (isUser) {
    //   navigate("/home-page");
    // }
    navigate("/home-page")
  };
  return (
    <div className="login">
      <input
        type="text"
        placeholder="שם משתמש"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="סיסמא"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={LoginSecurity}>כניסה</button>
    </div>
  );
};
