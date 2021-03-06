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
    "Passion?? par la litt??rature et l'??criture, une partie de mes journ??es sont d??di??es ?? la d??couverte de nouvoux ouvrages et de nouvelles fa??on de penser.";
  const personalInterestTabText2 =
    "Actif, sportif et motiv?? je tiens ?? avoir une activit?? physique r??guli??re plus ou moins intense pour conserver un esprit r??actif.";
  const personalInterestTabText3 =
    "De niveau B1 en anglais, je renforce chaque jour ma capacit?? ?? communiquer dans la langue de Shakespeare, et ?? la maitriser de fa??on acceptable dans un futur proche.";
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
          title={"Adaptabilit?? et rigueur"}
          text={"Rigoureux et organis?? dans ma m??thodologie et dans mon travail, j???aime planifier mes taches et mon emploi du temps, je reste tout de m??me flexible et m???adapte rapidement aux changements brusques ou aux impr??vus."}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/teamwork.svg"}
          title={"Esprit d'??quipe"}
          text={"Travailler en ??quipe est pour moi une occasion de m???enrichir personnellement autant de fa??on personnelle que professionnel, la mutualisation des comp??tences est la cl?? de la r??ussite, car tout seul on va plus vite, ensemble on va plus loin."}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/dialogue.svg"}
          title={"Empathie"}
          text={"Comprendre son interlocuteur, se mettre ?? sa place, et penser ?? travers lui tout en ressortant une interpr??tation se rapprochant de sa volont?? est pas essence une comp??tence essentielle ?? la r??solution des conflits et des probl??matiques."}
        />
        <SoftSkillsCard
          img={"./icon_soft_skill/emotional.svg"}
          title={"Intelligence ??motionnelle"}
          text={"Savoir g??rer ses ??motions, prendre du recul sur les probl??mes sans se laisser submerger par la pression et par le stress permet de se concentrer sur les solutions et d???apporter une r??ponse efficace et concise."}
        />
      </div>
    </div>
  );
  const personalInterestTab = (
    <div className="skillsCard">
      <div className="cardSquareContainer">
        <PersonalInterestCard
          img={"./icon_personal_interest/pencil.png"}
          title={"??criture"}
          subTitle={"et litt??rature"}
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
          subTitle={"et pers??v??rance"}
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
        <h1>Comp??tences</h1>
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
