import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logoTitle">
        <NavLink to="/Home">
          <h1>Clément</h1>
        </NavLink>
      </div>
      <ul>
        <NavLink to="/Home">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/About">
          <li>À-propos</li>
        </NavLink>
        <NavLink to="/Skills">
          <li>Compétences</li>
        </NavLink>
        <NavLink to="/Degree">
          <li>Qualifications</li>
        </NavLink>
        <NavLink to="/Portfolio">
          <li>Portfolio</li>
        </NavLink>
        <NavLink to="/Contact">
          <li>Contact</li>
        </NavLink>
      </ul>
      <i class="uil uil-moonset change-theme" id="theme-button"></i>
    </div>
  );
}

export default Header;