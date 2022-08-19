import React from "react";
import {Link} from "react-router-dom";
const Navarbar = () => {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/professionalproject">Projets professionnels</Link>
        </li>
        <li>
          <Link to="/personalproject">Projets personnels</Link>
        </li>
        <li>
          <Link to="/challenge">Challenges</Link>
        </li>
        <li>
          <Link to="/resources">Ressources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navarbar;
