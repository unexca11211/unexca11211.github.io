import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  const [isMobileMenuVisible, SetIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    SetIsMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    const iconMobile = document.querySelector(".icon.nav-icon");

    const handleButtonMobile = () => {
      iconMobile.classList.toggle("open");
    };
    iconMobile.addEventListener("click", handleButtonMobile);

    return () => {
      iconMobile.removeEventListener("click", handleButtonMobile);
    };
  }, []);

  return (
    <nav className={`navbar`}>
      <div className="navbar__logo">
        <img src="/logo.png" alt="logo"/>
      </div>
      <div className="icon nav-icon" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`menu ${
          isMobileMenuVisible ? "menu--visible" : "menu--invisible"
        }`}
      >
        <li className="menu__item">
          <Link to={"/"}>Index</Link>
        </li>
        <li className="menu__item">
          <Link to={"/posts"}>Posts</Link>
        </li>
        <li className="menu__item">
          <Link to={"/homeworks"}>Homework</Link>
        </li>
      </ul>
    </nav>
  );
}
