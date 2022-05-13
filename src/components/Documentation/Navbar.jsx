import React from "react";
import {Link} from "react-router-dom";
const Navarbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/professionalproject">Projet professionnel</Link>
        </li>
        <li>
          <Link to="/personalproject">Projet personnel</Link>
        </li>
        <li>
          <Link to="/challenge">Challenge</Link>
        </li>
        <li>
          <Link to="/resources">Ressources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navarbar;
