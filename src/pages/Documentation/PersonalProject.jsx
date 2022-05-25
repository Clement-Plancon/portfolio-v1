import React from "react";
import CardProjects from "../../components/Documentation/CardProjects";
import Navbar from "../../components/Documentation/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const PersonalProject = () => {
  const [jsonDatasPro, setjsonDatasPro] = useState("");

  useEffect(() => {
    getDatasPro();
  }, []);

  const getDatasPro = () => {
    axios.get("data/text.json").then((res) => {
      const jsonGlobal = res.data.textPersonnalProject;
      setjsonDatasPro(jsonGlobal);
    });
    
  };
  let blockProfessionalProjectGlobal = "professional-project-global";
  let blockProfessionalProjectContainer = "professional-project-container";
  let blockProfessionalProjectComponents = "professional-project-components";
  let blockCard = "professional-project-components-card";
  let elementCarousel = "professional-project-components-card__carousel";
  let modifierShadow = "--shadow-black";
  const textModal1 = ( <p>
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
  const iFrameModal1 = (<div className="iFrame-container"><iframe class="responsive-iframe"
  title="Password Maker Application"
  width="100%"
  height="400px"
  src="https://clement-plancon.github.io/passwordMaker/">
</iframe></div>)
  const iFrameModal2 = (<div className="iFrame-container"><iframe class="responsive-iframe"
  title="Form Checker Application"
  width="100%"
  height="400px"
  src="https://clement-plancon.github.io/formChecker/">
</iframe></div>)
  return (
    <main id={blockProfessionalProjectGlobal}>
      <Navbar />
      <section id={blockProfessionalProjectContainer}>
        <h2>Projets Personnels</h2>
        <p>
          Vous pouvez voir ici mes projets personnels que j’ai pu accomplir
          dernièrement, et si disponible, des aperçus de ces projets.
        </p>
        <div className={blockProfessionalProjectComponents}>
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title1}
            text={jsonDatasPro.text1}
            logoModal={"./icon_brands/password_maker.png"}
            textModal={''}
            iFrameModal={iFrameModal1}
            linkModal={"https://clement-plancon.github.io/passwordMaker/"}
          />
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title2}
            text={jsonDatasPro.text2}
            logoModal={"./icon_brands/password_maker.png"}
            textModal={''}
            iFrameModal={iFrameModal2}
            linkModal={"https://clement-plancon.github.io/formChecker/"}
          />
        </div>
      </section>
    </main>
  )
}

export default PersonalProject