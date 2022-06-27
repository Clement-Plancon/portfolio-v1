import React, { useState } from "react";
import { useEffect } from "react";
import variables from "../style/index.scss";

const Header = () => {
  /* useEffect(() =>{

const headerColor = () =>{
 
  const headerContainer = document.querySelector('.header')
  const aboutContainer = document.querySelector('.about')
  const homeContainer = document.querySelector('.home')
  const homeTitle = document.querySelector('.link a[href="#top"]')
  const aboutTitle = document.querySelector('.link a[href="#about"]')
  const skillsTitle = document.querySelector('.link a[href="#skills"]')
  const degreeTitle = document.querySelector('.link a[href="#degree"]')
  const portfolioTitle = document.querySelector('.link a[href="#portfolio"]')
  const contactTitle = document.querySelector('.link a[href="#contact"]')
  // Measure section size
  const headerSize = headerContainer.offsetTop + headerContainer.offsetHeight
  const homeSize = homeContainer.offsetTop + homeContainer.offsetHeight
  // Condition for color title
  if(headerSize >= (homeContainer.offsetTop - 100) && headerSize <= homeSize){
    homeTitle.style.color = `${colorTitle}`
  }else{
    homeTitle.style.color = ""
  }
}
  window.addEventListener('scroll', headerColor)
},[]) */

  /*==================== SCROLL SHADOW HEADER ====================*/
  const scrollPos = () => {
    const headerPos = document.querySelector(".header");
    if (window.pageYOffset > 0) {
      headerPos.style.boxShadow = "0 -1px 4px rgb(0 0 0 / 15%)";
    } else {
      headerPos.style.boxShadow = "0 0px 0px rgb(0 0 0 / 0%)";
    }
  };
  window.addEventListener("scroll", scrollPos);

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let colorTitle = variables.firstColor;
    function scrollActive() {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(
            `.link a[href="#${sectionId}"]`
          ).style.color = `${colorTitle}`;
        } else {
          document.querySelector(`.link a[href="#${sectionId}"]`).style.color =
            "";
        }
      });
    }
    window.addEventListener("scroll", scrollActive);
  }, []);
const changeMenuText = () =>{
  document.querySelector('.header .logoTitle').classList.add('showMenu')
  document.querySelector('.header .logoTitle').style.display = "none"
  document.querySelector('.header .link svg').style.display = "none"
  document.querySelector('.header .link svg').style.display = "none"
  document.querySelector('.header').style.height = "120px"
  document.querySelector('.header').style.flexWrap = "wrap"
  document.querySelectorAll('.header .link a').forEach((current) =>{
    current.style.fontSize = "10px"
  })
  document.querySelector('.header .link').classList.add('showMenu')
  document.querySelector('.mobileNavbar').classList.add('removeMenu')
  document.querySelector('#exit-menu').style.display = ""
}

const removeMenuText = () =>{
  document.querySelector('.header .logoTitle').classList.remove('showMenu')
  document.querySelector('.header .logoTitle').style.display = ""
  document.querySelector('.header .link svg').style.display = ""
  document.querySelector('.header .link svg').style.display = ""
  document.querySelector('.header').style.height = "74px"
  document.querySelector('.header .link').classList.remove('showMenu')
  document.querySelector('.mobileNavbar').classList.remove('removeMenu')
  document.querySelector('#exit-menu').style.display = "none"
}
  /*==================== DARK MODE ====================*/
const DarkLightMode = () =>{
document.querySelector("body").classList.toggle('darkModeBody')
document.querySelector(".header").classList.toggle('darkModeBody')
document.querySelector(".header").classList.toggle('darkModeBody')
document.querySelector(".header").classList.toggle('darkModeBody')
document.querySelectorAll("h1, h2, p,.link a,.about .center .center__right a,.cardHardSkills__title h3").forEach(function(i){
(i.classList.toggle('darkModeText'));
});
document.querySelectorAll(".about, .degree, .contact").forEach(function(i){
(i.classList.toggle('darkModeBackground'));
});
document.querySelectorAll(".home__centerText a, .clipImg, .portfolio .center .right a, .about .center .center__right a, .cardContainer__top").forEach(function(i){
(i.classList.toggle('darkModeRemoveYellow'));
});
document.querySelectorAll(".home__socialIcons svg, .header .link svg, .skills .center .skillsButton").forEach(function(i){
(i.classList.toggle('darkModeRemoveYellowColor'));
});

}
  return (
    <div className="header">
      <div className="logoTitle">
        <h1>Clément</h1>
      </div>
      <div className="link">
        <a href="#home" style={{ color: "rgb(224, 192, 87)" }}>
          Accueil
        </a>
        <a href="#about">À-propos</a>
        <a href="#skills">Compétences</a>
        <a href="#degree">Qualifications</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <div id="exit-menu"  onClick={() => removeMenuText()}>X</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          onClick={() => DarkLightMode()}>
          <path
            fill="currentColor"
            d="M11 19H8a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Zm9-4h-1.16A8.18 8.18 0 0 0 20 12.05a1 1 0 0 0-.34-.93a1 1 0 0 0-1-.19a6 6 0 0 1-1.92.32a6.06 6.06 0 0 1-6.06-6a6.93 6.93 0 0 1 .1-1a1 1 0 0 0-.35-.92a1 1 0 0 0-1-.18A8.06 8.06 0 0 0 4 10.68A8 8 0 0 0 5.27 15H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm-3.72 0H7.83a6 6 0 0 1 .88-9.36a8.06 8.06 0 0 0 8.05 7.61a7 7 0 0 0 .79 0A6.08 6.08 0 0 1 16.28 15ZM16 19h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z"
          />
        </svg>
      </div>
      <div className="mobileNavbar">
        <div className="titleMobile">
          <h1>Clément</h1>
        </div>
        <div className="logoMobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 19H8a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Zm9-4h-1.16A8.18 8.18 0 0 0 20 12.05a1 1 0 0 0-.34-.93a1 1 0 0 0-1-.19a6 6 0 0 1-1.92.32a6.06 6.06 0 0 1-6.06-6a6.93 6.93 0 0 1 .1-1a1 1 0 0 0-.35-.92a1 1 0 0 0-1-.18A8.06 8.06 0 0 0 4 10.68A8 8 0 0 0 5.27 15H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm-3.72 0H7.83a6 6 0 0 1 .88-9.36a8.06 8.06 0 0 0 8.05 7.61a7 7 0 0 0 .79 0A6.08 6.08 0 0 1 16.28 15ZM16 19h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z"
            />
          </svg>
          <img
            src="./icon_global/menu-mobile.svg"
            alt=""
            onClick={() => changeMenuText()}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
