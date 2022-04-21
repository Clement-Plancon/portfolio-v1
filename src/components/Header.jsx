import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const scrollPos = () =>{
  const headerPos = document.querySelector('.header')
  if(headerPos.offsetTop > 0){
    headerPos.style.boxShadow = "0 -1px 4px rgb(0 0 0 / 15%)";
  } else {
    headerPos.style.boxShadow = "0 0px 0px rgb(0 0 0 / 0%)"
  }
}
  window.addEventListener('scroll', scrollPos)
  return (
    <div className="header">
      <div className="logoTitle">
          <h1>Clément</h1>
      </div>
      <div className="link">
        <a href="#top">Accueil</a>
        <a href="#about">À-propos</a>
        <a href="#skills">Compétences</a>
        <a href="#degree">Qualifications</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19H8a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Zm9-4h-1.16A8.18 8.18 0 0 0 20 12.05a1 1 0 0 0-.34-.93a1 1 0 0 0-1-.19a6 6 0 0 1-1.92.32a6.06 6.06 0 0 1-6.06-6a6.93 6.93 0 0 1 .1-1a1 1 0 0 0-.35-.92a1 1 0 0 0-1-.18A8.06 8.06 0 0 0 4 10.68A8 8 0 0 0 5.27 15H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm-3.72 0H7.83a6 6 0 0 1 .88-9.36a8.06 8.06 0 0 0 8.05 7.61a7 7 0 0 0 .79 0A6.08 6.08 0 0 1 16.28 15ZM16 19h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z"/></svg>
      </div>    
    </div>
  );
}

export default Header;