import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="hamburger" onClick={toggleMenu}>
      {isMenuOpen ? (
        <span>&#10005;</span> // Close icon
      ) : (
        <span>&#9776;</span> // Hamburger icon
      )}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
      <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/qualifications"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Qualifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/prog-exp"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Program Experience
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
