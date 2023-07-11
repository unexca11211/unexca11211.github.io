import React, { useState, useEffect } from 'react';
import './Nav.css';

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'navbar--sticky' : ''} ${isMenuVisible ? 'navbar--is-visible' : ''}`}>
      <div className="navbar__logo" >
        <img src="/logo.png" style={{ width: '100px', height: 'auto' }}/>
      </div>
      <ul className="menu">
        <li className={`menu__item ${selectedItem === 1 ? 'menu__item--is-selected' : ''}`}>
          <a href="#" >Inicio</a>
          <div className="menu__container">
            <ul className="submenu">
              <li><a href="#">Submenú 1</a></li>
              <li><a href="#">Submenú 2</a></li>
              <li><a href="#">Submenú 3</a></li>
            </ul>
          </div>
        </li>
        <li className={`menu__item ${selectedItem === 2 ? 'menu__item--is-selected' : ''}`}>
          <a href="#">Acerca de nosotros</a>
          <div className="menu__container">
            <ul className="submenu">
              <li><a href="#">Submenú 1</a></li>
              <li><a href="#">Submenú 2</a></li>
              <li><a href="#">Submenú 3</a></li>
            </ul>
          </div>
        </li>
        <li className={`menu__item ${selectedItem === 3 ? 'menu__item--is-selected' : ''}`}>
          <a href="#">Servicios</a>
          <div className="menu__container">
            <ul className="submenu">
              <li><a href="#">Submenú 1</a></li>
              <li><a href="#">Submenú 2</a></li>
              <li><a href="#">Submenú 3</a></li>
            </ul>
          </div>
        </li>
        <li className={`menu__item ${selectedItem === 4 ? 'menu__item--is-selected' : ''}`}>
          <a href="#">Contacto</a>
          <div className="menu__container">
            <ul className="submenu">
              <li><a href="#">Submenú 1</a></li>
              <li><a href="#">Submenú 2</a></li>
              <li><a href="#">Submenú 3</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

// TODO
// Agregar info de Supabase