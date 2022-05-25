import React from "react";
import CardProjects from "../../components/Documentation/CardProjects";
import Navbar from "../../components/Documentation/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
const ProfessionalProject = () => {
  const [jsonDatasPro, setjsonDatasPro] = useState("");

  useEffect(() => {
    getDatasPro();
  }, []);

  const getDatasPro = () => {
    axios.get("data/text.json").then((res) => {
      const jsonGlobal = res.data.textProfessionalProject;
      setjsonDatasPro(jsonGlobal);
    });
  };

  let blockProfessionalProjectGlobal = "professional-project-global";
  let blockProfessionalProjectContainer = "professional-project-container";
  let blockProfessionalProjectComponents = "professional-project-components";
  let blockCard = "professional-project-components-card";
  let elementCarousel = "professional-project-components-card__carousel";
  let modifierShadow = "--shadow-black";
  const textModal1 = ( <p id="test">
  Marquerie.co est une start-up qui a pour vocation de mettre en
  relation les commerces locaux et les marques Française à travers une
  plateforme web en BtoB, permettant aux commerçants d’améliorer la
  gestion de leurs commerces et aux marques de développer leurs
  ventes. En apprentissage au sein de la start-up en tant que
  développeur full stack, j’ai pu participer au développement de la
  solution web :
  <span>
    - Maquettage et prototypage d’une carte dédiée à la
    géolocalisation des marques présentent sur la plateforme l’aide de
    Balsamiq et Figma.
  </span>
  <span>
    - Conception d’une carte dédiée à la géolocalisation des marques
    avec les langages Sass | Javascript | Json | Liquid.
  </span>
  <span>
    - Maintenance et développement de la plateforme web et des
    différents modules à l’aide de React et NodeJs.
  </span>
  <span>
    - Mise en place de Google Tag Manager | Analytics 4 | Data Studio
    pour analyser et traiter les données.
  </span>
</p>)
 const textModal2 = ( <p>
  Ayant faits un stage de 2 mois dans le pôle informatique de l'entreprise Etienne services, j'ai eu pour mission de mettre en place un site web pour une de leurs activités : 

<span>- Conception du cahier des charges.</span>
<span>- Maquettage et wireframe à l’aide de Balsamiq et Axure.</span>
<span>- Prototypage à l’aide d’adobe XD et Figma.</span>
<span>- Conception du site web via Wordpress | Elementor en utilisant les langages PHP | Mysql côté back et javascript coté front.</span>
</p>)
const iconModal1 = (
  <div className="iconModal">
    <img src="./icon_dev/html.svg" alt="" />
    <img src="./icon_dev/css3.svg" alt="" />
    <img src="./icon_dev/sass.svg" alt="" />
    <img src="./icon_dev/javascript.svg" alt="" />
    <img src="./icon_dev/jquery-4.svg" alt="" />
    <img src="./icon_dev/react-2.svg" alt="" />
    <img src="./icon_dev/nodejs.svg" alt="" />
    <img src="./icon_design/figma.svg" alt="" />
    <img src="./icon_utilitaire/google-tag-manager.svg" alt="" />
    <img src="./icon_utilitaire/google-analytics-4.svg" alt="" />
    <img src="./icon_utilitaire/google-data-studio.svg" alt="" />
  </div> )
const iconModal2 = (
    <div className="iconModal">
      <img src="./icon_dev/html.svg" alt="" />
      <img src="./icon_dev/css3.svg" alt="" />
      <img src="./icon_dev/javascript.svg" alt="" />
      <img src="./icon_design/balsamiq-icon.svg" alt="" />
      <img src="./icon_design/figma.svg" alt="" />
      <img src="./icon_dev/php.svg" alt="" />
      <img src="./icon_dev/mysql.svg" alt="" />
      <img src="./icon_utilitaire/wordpress.svg" alt="" />
    </div> )
  return (
    <main id={blockProfessionalProjectGlobal}>
      <Navbar />
      <section id={blockProfessionalProjectContainer}>
        <h2>Projets Professionnels</h2>
        <p>
          Vous pouvez voir ici mes projets professionnels que j’ai pu accomplir
          dernièrement, et si disponible, des aperçus de ces projets.
        </p>
        <div className={blockProfessionalProjectComponents}>
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title1}
            text={jsonDatasPro.text1}
            logoModal={"./icon_brands/marquerie.png"}
            textModal={textModal1}
            iconModal={iconModal1}
            linkModal={"https://marquerie.co/"}
          />
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title2}
            text={jsonDatasPro.text2}
            logoModal={"./icon_brands/etienne.jpg"}
            textModal={textModal2}
            iconModal={iconModal2}
            linkModal={"https://www.etienne-services.fr/"}
         
          />
        </div>
      </section>
    </main>
  );
};

export default ProfessionalProject;
