import React, { useState, useEffect } from "react";
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
        <img src="/logo.png" />
      </div>
      <div class="icon nav-icon" onClick={toggleMobileMenu}>
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
          <a href="#">Inicio</a>
          <div className="menu__container">
            <ul className="submenu">
              <li>
                <a href="#">Submenú 1</a>
              </li>
              <li>
                <a href="#">Submenú 2</a>
              </li>
              <li>
                <a href="#">Submenú 3</a>
              </li>
            </ul>
          </div>
        </li>
        {/* Dropdown */}
        <li className="menu__item">
          <a href="#">Categorias</a>
          {/* Dropdown content */}
          <div className="menu__container">
            <ul className="submenu">
              <li>
                <a href="#">Submenú 1</a>
              </li>
              <li>
                <a href="#">Submenú 2</a>
              </li>
              <li>
                <a href="#">Submenú 3</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
