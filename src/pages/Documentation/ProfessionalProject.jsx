import React from "react";
import CardProjects from "../../components/Documentation/CardProjects";
import Navbar from "../../components/Documentation/Navbar";

const ProfessionalProject = ({ items }) => {
  let blockProfessionalProjectGlobal = "professional-project-global";
  let blockProfessionalProjectContainer = "professional-project-container";
  let blockProfessionalProjectComponents = "professional-project-components";
  let elementCard = "professional-project-components__card";
  let modifierShadow = "--shadow-black";

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
            element={elementCard}
            modifier={modifierShadow}
            titles={"Marquerie.co"}
            text={items}
          />
          <CardProjects
            element={elementCard}
            modifier={modifierShadow}
            titles={"Marquerie.co"}
          />
        </div>
      </section>
    </main>
  );
};

export default ProfessionalProject;
