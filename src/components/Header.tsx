import React from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu.tsx";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="logo">Adrian Hjert</div>
        <HamburgerMenu />
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
