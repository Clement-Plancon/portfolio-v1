import {Link} from "react-router-dom";
import ProfessionalProject from "./Documentation/ProfessionalProject"

const Portfolio = () => {
  let portfolio = "portfolio";
  let title = "title";
  let center = "center";
  let left = "left";
  let right = "right";
  return (
    <section className={`${portfolio} section`} id="portfolio">
      <div className={title}>
        <h1>Portfolio</h1>
        <h2>Travail le plus récent</h2>
      </div>
      <div className={center}>
        <div className={left}></div>
        <div className={right}>
          <h1>Portfolio</h1>
          <p>
            Vous pouvez directement accéder à mon portfolio et consulter mes
            créations ou mes projets en cours.
          </p>

         <Link to="/professionalproject">Accéder au portfolio</Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
