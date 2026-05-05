import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";

function Header() {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li><button className="login-btn" onClick={() => {
            setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
            console.log(loginBtn);
          } }>{loginBtn}</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
