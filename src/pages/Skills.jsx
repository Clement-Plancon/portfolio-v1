import { Fragment, useState } from "react";
import HardSkillsCard from "../components/HardSkillsCard";
import PersonalInterestCard from "../components/PersonalInterestCard";
import SoftSkillsCard from "../components/SoftSkillsCard";

const Skills = () => {
  let skills = "skills";
  let title = "title";
  let center = "center";
  let card = "card";
  const hardSkillsFront = (
    <Fragment>
      <img src="./icon_dev/react-2.svg" alt="" />
      <img src="./icon_dev/javascript.svg" alt="" />
      <img src="./icon_dev/html.svg" alt="" />
      <img src="./icon_dev/css3.svg" alt="" />
      <img src="./icon_dev/bootstrap_logo.svg" alt="" />
      <img src="./icon_dev/sass.svg" alt="" />
      <img src="./icon_dev/tailwind-css-2.svg" alt="" />
      <img src="./icon_dev/jquery-4.svg" alt="" />
    </Fragment>
  );
  const hardSkillsBack = (
    <Fragment>
      <img src="./icon_dev/symfony.svg" alt="" />
      <img src="./icon_dev/php.svg" alt="" />
      <img src="./icon_dev/nodejs.svg" alt="" />
      <img src="./icon_dev/mysql.svg" alt="" />
    </Fragment>
  );
  const hardSkillsDesign = (
    <Fragment>
      <img src="./icon_design/figma.svg" alt="" />
      <img src="./icon_design/xd.svg" alt="" />
      <img src="./icon_design/balsamiq-icon.svg" alt="" />
      <img src="./icon_design/photoshop.svg" alt="" />
    </Fragment>
  );
  const hardSkillsOther = (
    <Fragment>
      <img src="./icon_utilitaire/google-tag-manager.svg" alt="" />
      <img src="./icon_utilitaire/google-analytics-4.svg" alt="" />
      <img src="./icon_utilitaire/google-data-studio.svg" alt="" />
      <img src="./icon_utilitaire/wordpress.svg" alt="" />
      <img src="./icon_utilitaire/webflow.svg" alt="" />
      <img src="./icon_utilitaire/agile.svg" alt="" />
      <img src="./icon_utilitaire/bem.svg" alt="" />
    </Fragment>
  );
  const personalInterestTabText1 =
    "Passioné par la littérature et l'écriture, une partie de mes journées sont dédiées à la découverte de nouvoux ouvrages et de nouvelles façon de penser.";
  const personalInterestTabText2 =
    "Actif, sportif et motivé je tiens à avoir une activité physique régulière plus ou moins intense pour conserver un esprit réactif.";
  const personalInterestTabText3 =
    "De niveau B1 en anglais, je renforce chaque jour ma capacité à communiquer dans la langue de Shakespeare, et à la maitriser de façon acceptable dans un futur proche.";
  const hardSkillsTab = (
    <div className="skillsCard">
      <div className={card}>
      <HardSkillsCard content={hardSkillsFront} title={"Front-end"}/>
      <HardSkillsCard content={hardSkillsBack} title={"Back-end"}/>
      <HardSkillsCard content={hardSkillsDesign} title={"UI/UX"}/>  
      <HardSkillsCard content={hardSkillsOther} title={"Autre"}/>  
      </div>
    </div>
  );
  const softSkillsTab = (
    <div className="skillsCard">
      <div className="cardSquareContainer">
        <SoftSkillsCard
          img={"./icon_soft_skill/adaptation.svg"}
          title={"Adaptabilité et rigueur"}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/teamwork.svg"}
          title={"Esprit d'équipe"}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/dialogue.svg"}
          title={"Empathie"}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/emotional.svg"}
          title={"Intelligence émotionnelle"}
        />
      </div>
    </div>
  );
  const personalInterestTab = (
    <div className="skillsCard">
      <div className="cardSquareContainer">
        <PersonalInterestCard
          img={"./icon_personal_interest/pencil.png"}
          title={"Écriture"}
          subTitle={"et littérature"}
          text={personalInterestTabText1}
        />
        <PersonalInterestCard
          img={"./icon_personal_interest/sport.png"}
          title={"Sport"}
          subTitle={"et motivation"}
          text={personalInterestTabText2}
        />
        <PersonalInterestCard
          img={"./icon_personal_interest/translation.png"}
          title={"Langue"}
          subTitle={"et persévérance"}
          text={personalInterestTabText3}
        />
      </div>
    </div>
  );
  const [TabValue, setTabValue] = useState(hardSkillsTab);

  const changeText = (param) => {
    if (param === 1) {
      setTabValue(hardSkillsTab);
    } else if (param === 2) {
      setTabValue(softSkillsTab);
    } else if (param === 3) {
      setTabValue(personalInterestTab);
    }
  };
  return (
    <section className={`${skills} section`} id="skills">
      <div className={title}>
        <h1>Compétences</h1>
        <h2>Hard et soft skills</h2>
      </div>
      <div className={center}>
        <div className="skillsTab">
          <div
            className="skillsTab__buttonStudy skillsButton"
            onClick={() => changeText(1)}
          >
            <i class="uil uil-fire"></i> Hard skills
          </div>
          <div
            className="skillsTab__buttonExperience skillsButton"
            onClick={() => changeText(2)}
          >
            <i class="uil uil-brain"></i> Soft skills
          </div>
          <div
            className="skillsTab__buttonExperience skillsButton"
            onClick={() => changeText(3)}
          >
            <i class="uil uil-nerd"></i> personal interest
          </div>
        </div>
        {TabValue}
      </div>
    </section>
  );
};

export default Skills;
