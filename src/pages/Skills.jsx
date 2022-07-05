import { Fragment, useState } from "react";
import HardSkillsCard from "../components/HardSkillsCard";
import PersonalInterestCard from "../components/PersonalInterestCard";
import SoftSkillsCard from "../components/SoftSkillsCard";

const Skills = () => {
  let skills = "skills";
  let title = "title";
  let center = "center";
  let card = "card";

const changeColor = () =>{
  if(document.querySelector("body").classList.contains("darkModeBody")){
    alert('test')
    document.querySelectorAll(".cardContainer__top").forEach(function(i){
      (i.classList.add('darkModeRemoveYellow'));
      });         
  }else{
    document.querySelectorAll(".cardContainer__top").forEach(function(i){
      (i.classList.remove('darkModeRemoveYellow'));
      });   
  }
}

  const hardSkillsFront = (
    <Fragment>
      <img src="./img/dev/front-end/html.svg" alt="" />
      <img src="./img/dev/front-end/css.svg" alt="" />
      <img src="./img/dev/front-end/javascript.svg" alt="" />
      <img src="./img/dev/front-end/react.svg" alt="" />
      <img src="./img/dev/front-end/pug.svg" alt="" />
      <img src="./img/dev/front-end/sass.svg" alt="" />
      <img src="./img/dev/front-end/bootstrap.svg" alt="" />
      <img src="./img/dev/front-end/jquery.svg" alt="" />
      <img src="./img/dev/front-end/tailwind.svg" alt="" />
      <img src="./img/dev/front-end/chartjs.svg" alt="" />
    </Fragment>
  );
  const hardSkillsBack = (
    <Fragment>
      <img src="./img/dev/back-end/php.svg" alt="" />
      <img src="./img/dev/back-end/nodejs.svg" alt="" />
      <img src="./img/dev/back-end/mysql.svg" alt="" />
    </Fragment>
  );
  const hardSkillsDesign = (
    <Fragment>
      <img src="./img/design/figma.svg" alt="" />
      <img src="./img/design/adobexd.svg" alt="" />
      <img src="./img/design/balsamiq.svg" alt="" />
      <img src="./img/design/photoshop.svg" alt="" />
    </Fragment>
  );
  const hardSkillsOther = (
    <Fragment>
      <img src="./img/dev/outil/github.svg" alt="" />
      <img src="./img/dev/outil/heroku.svg" alt="" />
      <img src="./img/autre/tagmanager.svg" alt="" />
      <img src="./img/autre/analytics.svg" alt="" />
      <img src="./img/autre/datastudio.svg" alt="" />
      <img src="./img/autre/webflow.svg" alt="" />
      <img src="./img/autre/wordpress.svg" alt="" />
      <img src="./img/autre/elementor.svg" alt="" />
      <img src="./img/autre/seo.svg" alt="" />
      <img src="./img/autre/bem.svg" alt="" />
      <img src="./img/autre/scrum.svg" alt="" />
      <img src="./img/autre/accessibilite.svg" alt="" />
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
          text={"Rigoureux et organisé dans ma méthodologie et dans mon travail, j’aime planifier mes taches et mon emploi du temps, je reste tout de même flexible et m’adapte rapidement aux changements brusques ou aux imprévus."}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/teamwork.svg"}
          title={"Esprit d'équipe"}
          text={"Travailler en équipe est pour moi une occasion de m’enrichir personnellement autant de façon personnelle que professionnel, la mutualisation des compétences est la clé de la réussite, car tout seul on va plus vite, ensemble on va plus loin."}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/dialogue.svg"}
          title={"Empathie"}
          text={"Comprendre son interlocuteur, se mettre à sa place, et penser à travers lui tout en ressortant une interprétation se rapprochant de sa volonté est pas essence une compétence essentielle à la résolution des conflits et des problématiques."}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/emotional.svg"}
          title={"Intelligence émotionnelle"}
          text={"Savoir gérer ses émotions, prendre du recul sur les problèmes sans se laisser submerger par la pression et par le stress permet de se concentrer sur les solutions et d’apporter une réponse efficace et concise."}
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

  
/*   const darkModeComponent = () =>{
    document.querySelectorAll(".cardContainer__top").forEach(function(i){
      (i.classList.add('darkModeRemoveYellowColor'));
      }); 
  } */

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
