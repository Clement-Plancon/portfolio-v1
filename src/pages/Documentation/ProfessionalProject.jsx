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

        <div class="project-grid">
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title1}
            text={jsonDatasPro.text1}
            logoModal={"./icon_brands/marquerie.png"}
            linkModal={"https://marquerie.co/"}
          />
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title2}
            text={jsonDatasPro.text2}
            logoModal={"./icon_brands/etienne.jpg"}
            linkModal={"https://www.etienne-services.fr/"}
          />
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title2}
            text={jsonDatasPro.text2}
            logoModal={"./icon_brands/etienne.jpg"}
            linkModal={"https://www.etienne-services.fr/"}
          />
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title2}
            text={jsonDatasPro.text2}
            logoModal={"./icon_brands/etienne.jpg"}
            linkModal={"https://www.etienne-services.fr/"}
          />
        </div>
      </section>
    </main>
  );
};

export default ProfessionalProject;
