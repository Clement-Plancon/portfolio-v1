import { useState } from "react"

const Skills = () => {
  let skills = "skills"
  let title = "title"
  let center = "center"
  let card = "card"
  let cardSquare = "cardSquare"
  const hardSkillsTab = (<div className="skillsCard">    
  <div className={card}>
    <h3>Front-end</h3>
    <div className="skillsIcon">
      <img src="./icon_dev/react-2.svg" alt="icon react" />                
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/javascript.svg" alt="icon javascripthtml" />  
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/html.svg" alt="icon html" />               
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/css3.svg" alt="icon css" />               
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/bootstrap4.svg" alt="icon bootstrap" />            
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/sass.svg" alt="icon sass" />          
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/tailwind-css-2.svg" alt="icon tailwind" />           
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/jquery-4.svg" alt="icon jquery" />           
    </div>
  
  </div>
  <div className={card}>
    <h3>Back-end</h3>
    <div className="skillsIcon">
      <img src="./icon_dev/symfony.png" alt="icon react" />                
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/php.svg" alt="icon javascript" />  
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/nodejs.png" alt="icon html" />               
    </div>
    <div className="skillsIcon">
      <img src="./icon_dev/mysql.svg" alt="icon css" />               
    </div>
   
  </div>
  <div className={card}>
    <h3>UI/UX</h3>
    <div className="skillsIcon">
      <img src="./icon_design/figma.png" alt="icon figma" />                
    </div>
    <div className="skillsIcon">
      <img src="./icon_design/xd.svg" alt="icon adobe xd" />  
    </div>
    <div className="skillsIcon">
      <img src="./icon_design/balsamiq.png" alt="icon balsamiq" />               
    </div>
    <div className="skillsIcon">
      <img src="./icon_design/photoshop.svg" alt="icon adobe photoshop" />               
    </div>
  </div>
  <div className={card}>
    <h3>Utilitaire</h3>           
    <div className="skillsIcon">
      <img src="./icon_utilitaire/google-tag-manager.svg" alt="icon google tag manager" />                
    </div>
    <div className="skillsIcon">
      <img src="./icon_utilitaire/google-analytics-4.svg" alt="icon google analytics" />  
    </div>
    <div className="skillsIcon">
      <img src="./icon_utilitaire/google-data-studio.svg" alt="icon google data studio" />               
    </div>
    <div className="skillsIcon">
      <img src="./icon_utilitaire/wordpress.svg" alt="icon wordpress" />               
    </div>
    <div className="skillsIcon">
      <img src="./icon_utilitaire/webflow.png" alt="icon webflow" />               
    </div>
    <div className="skillsIcon">
      <img src="./icon_utilitaire/icon-agile-nuxly.png" alt="icon agile" />               
    </div>
    <div className="skillsIcon">
      <img src="./icon_utilitaire/BEM-1.png" alt="icon bem" />               
    </div>
  </div>
</div>);
  const softSkillsTab = (<div className="skillsCard">
    <div className="cardSquareContainer"> 
  <div className={cardSquare}>
  <span><img src="./icon_soft_skills/rigueur.png" alt="" /></span> <h3>Adaptabilité et rigueur</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquam optio vel magnam, repudiandae veritatis obcaecati sapiente aperiam similique. Dolor accusamus fuga laborum eligendi omnis molestias doloremque magni libero consequatur.</p>
  
  </div>
  <div className={cardSquare}>
  <span><img src="./icon_soft_skills/equipe.png" alt="" /></span><h3>Esprit d'équipe</h3>

   
  </div>
  <div className={cardSquare}>
  <span><img src="./icon_soft_skills/intelligence.png" alt="" /></span><h3>Intelligence émotionelle</h3>

  </div>
  <div className={cardSquare}>
  <span><img src="./icon_soft_skills/empathie.png" alt="" /></span><h3>Empathie</h3>           

  </div>
  </div>   
</div>);
  const [TabValue, setTabValue] = useState(hardSkillsTab)

  const changeText = (param) =>{
    if(param === 1){
    setTabValue(hardSkillsTab)
    }else if(param === 2){
    setTabValue(softSkillsTab)
    }else if(param === 3){
    setTabValue(hardSkillsTab)
    }
  }
    return (
      <section className={`${skills} section`} id="skills">
        <div className={title}>
          <h1>Compétences</h1>
          <h2>Hard et soft skills</h2>
        </div>
        <div className={center}>
        <div className="skillsTab">
            <div className="skillsTab__buttonStudy skillsButton" onClick={() => changeText(1)} >
              <i class="uil uil-fire"></i> Hard skills
            </div>
            <div className="skillsTab__buttonExperience skillsButton" onClick={() => changeText(2)} >
              <i class="uil uil-brain"></i> Soft skills
            </div>
            <div className="skillsTab__buttonExperience skillsButton" onClick={() => changeText(3)} >
            <i class="uil uil-nerd"></i> personal interest
            </div>
          </div>
          {TabValue}
        </div>
      </section>
    );
  }
  
  export default Skills;