import React, { useState, useEffect } from "react";
import "./Nav.css";

export default function Navbar() {
  const [isMobileMenuVisible, SetIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => SetIsMobileMenuVisible(!isMobileMenuVisible);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <nav className={`navbar`}>
      <div className="navbar__logo">
        <img src="/logo.png" />
      </div>
      <button className="mobile__button" onClick={toggleMobileMenu}>
        mobile
      </button>
      <ul className={`menu ${isMobileMenuVisible ? "menu--visible" : ""}`}>
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
