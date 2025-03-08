import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">Adrian Hjert</div>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/qualifications" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Qualifications
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/prog-exp" 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Programming Experience
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
