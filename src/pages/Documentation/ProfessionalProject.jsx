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

        <div className="project-grid">
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title1}
            text={jsonDatasPro.text1}
            logoModal={"./icon_brands/marquerie.png"}
            linkModal={"https://marquerie.co/"}
            skills1={"SASS"}
            skills2={"Jquery"}
            skills3={"React"}
            githubLinkOn={false}
          />
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title2}
            text={jsonDatasPro.text2}
            logoModal={"./icon_brands/etienne.jpg"}
            linkModal={"https://www.etienne-services.fr/"}
            skills1={"Wordpress"}
            skills2={"Javascript"}
            skills3={"PHP"}
            githubLinkOn={false}
          />
          <CardProjects
            block={blockCard}
            element={elementCarousel}
            modifier={modifierShadow}
            titles={jsonDatasPro.title3}
            text={jsonDatasPro.text3}
            logoModal={"./icon_brands/etienne.jpg"}
            linkModal={"https://clement-plancon.github.io/card_game_limite_limite/"}
            githubLink={"https://github.com/Clement-Plancon/card_game_limite_limite"}
            skills1={"HTML"}
            skills2={"CSS"}
            skills3={"Javascript"}
            githubLinkOn={true}
          />
        </div>
      </section>
    </main>
  );
};

export default ProfessionalProject;
