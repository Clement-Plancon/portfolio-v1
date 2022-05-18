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
            titles={"Marquerie.co"}
            text={jsonDatasPro.text1}
          />
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={"Etienne services"}
            text={jsonDatasPro.text1}
          />
        </div>
      </section>
    </main>
  );
};

export default ProfessionalProject;
