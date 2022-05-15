import React from "react";
import CardProjects from "../../components/Documentation/CardProjects";
import Navbar from "../../components/Documentation/Navbar";
import { UserContext } from "../../components/Context/Context";
import { useState } from "react";
import axios from "axios";
const ProfessionalProject = () => {
  let text1 = null;
  let blockProfessionalProjectGlobal = "professional-project-global";
  let blockProfessionalProjectContainer = "professional-project-container";
  let blockProfessionalProjectComponents = "professional-project-components";
  let blockCard = "professional-project-components-card";
  let elementCarousel = "professional-project-components-card__carousel";
  let modifierShadow = "--shadow-black";

  if (text1 != null) {
    return (
      <UserContext.Consumer>
        {(jsonDatas) => {
          return (
            <main id={blockProfessionalProjectGlobal}>
              <Navbar />
              <section id={blockProfessionalProjectContainer}>
                <h2>Projets Professionnels</h2>
                <p>
                  Vous pouvez voir ici mes projets professionnels que j’ai pu
                  accomplir dernièrement, et si disponible, des aperçus de ces
                  projets.
                </p>
                <div className={blockProfessionalProjectComponents}>
                  <CardProjects
                    block={blockCard}
                    element={elementCarousel}
                    modifier={modifierShadow}
                    titles={"Marquerie.co"}
                    text={jsonDatas.textProfessionalProject.text1}
                  />
                  <CardProjects
                    block={blockCard}
                    element={elementCarousel}
                    modifier={modifierShadow}
                    titles={"Etienne services"}
                    text={jsonDatas.textProfessionalProject.text1}
                  />
                </div>
              </section>
            </main>
          );
        }}
      </UserContext.Consumer>
    );
  } else {
   
    return (
      <UserContext.Consumer>
        {(jsonDatas) => {
          return (
            <main id={blockProfessionalProjectGlobal}>
              <Navbar />
              <section id={blockProfessionalProjectContainer}>
                <h2>Projets Professionnels</h2>
                <p>
                  Vous pouvez voir ici mes projets professionnels que j’ai pu
                  accomplir dernièrement, et si disponible, des aperçus de ces
                  projets.
                </p>
                <div className={blockProfessionalProjectComponents}>
                  <CardProjects
                    block={blockCard}
                    element={elementCarousel}
                    modifier={modifierShadow}
                    titles={"Marquerie.co"}
                    text={jsonDatas.textProfessionalProject.text1}
                  />
                  <CardProjects
                    block={blockCard}
                    element={elementCarousel}
                    modifier={modifierShadow}
                    titles={"Etienne services"}
                    text={jsonDatas.textProfessionalProject.text1}
                  />
                </div>
              </section>
            </main>
          );
        }}
      </UserContext.Consumer>
    );
  }
};

export default ProfessionalProject;
