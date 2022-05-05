import { useState } from "react"

const Degree = () => {

  const degreesPara = (<div className="qualificationCorps">
  <div className="qualificationData">
    <div className="qualificationData__text">
    <h3>Analyste en génie informatique</h3>
    <h4>Paris -  Institut National Supérieur des Technologies Avancée</h4>
    <i className="uil uil-calendar-alt"></i> 2021 - 2022
    </div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>

  </div>

  <div className="qualificationData">
    <div></div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
    <div className="right">
      <h3>Bts Sio Slam</h3>
      <h4>Paris -  Institut National Supérieur des Technologies Avancée</h4>
      <i className="uil uil-calendar-alt"></i> 2019 - 2021
    </div>
   
  </div>

  <div className="qualificationData">
    <div className="qualificationData__text">
      <h3>Licence d'Histoire & Science politique</h3>
      <h4>Lorient - Faculté de lettres, langues, sciences humaines et sociales</h4>
      <i className="uil uil-calendar-alt"></i> 2015 - 2018
    </div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>        
  </div>        
</div>);

const experiencesPara = (<div className="qualificationCorps">
  <div className="qualificationData">
    <div className="qualificationData__text">
    <h3>Développeur full-stack</h3>
    <h4>Marquerie.co - Paris</h4>
    <i className="uil uil-calendar-alt"></i> alternance - 2021 - 2022
    </div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>

  </div>

  <div className="qualificationData">
    <div></div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
    <div className="right">
      <h3>Développeur front end</h3>
      <h4>Etienne Service - Noisy-le-Sec</h4>
      <i className="uil uil-calendar-alt"></i> 2 mois de stage - 2020
    </div>  
  </div>     
</div>);

const certificationsPara = (<div className="qualificationCorps">
  <div className="qualificationData">
    <div className="qualificationData__text">
    <h3>Responsive Web Design Certification</h3>
    <h4>FreeCodeCamp</h4>
    <i className="uil uil-calendar-alt"></i> 2022
    </div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
  </div>
</div>);

  let degree = "degree"
  let title = "title"
  let center = "center"
  const [tabValue, setTabValue] = useState(degreesPara);

  
  const changeText = (param) =>{
   if(param === 1){
    setTabValue(degreesPara)
   }else if(param === 2){
    setTabValue(experiencesPara)
   }else if(param === 3){
    setTabValue(certificationsPara)
   }
  }
  
    return (
      <section className={`${degree} section`} id="degree">
        <div className={title}>
          <h1>Qualifications</h1>
          <h2>Diplômes et expériences professionnelles</h2>
        </div>
        <div className={center}>
          <div className="qualificationTab">
            <div className="qualificationTab__buttonStudy qualificationButton" onClick={() => changeText(1)}>
              <i className="uil uil-graduation-cap qualification__icon"></i> Études
            </div>
            <div className="qualificationTab__buttonExperience qualificationButton" onClick={() => changeText(2)}>
              <i className="uil uil-briefcase-alt qualification__icon"></i> Éxpériences
            </div>
            <div className="qualificationTab__buttonExperience qualificationButton" onClick={() => changeText(3)}>
              <i className="uil uil-postcard"></i> Certifications
            </div>
          </div>       
          {tabValue}
        </div>
      </section>
    );
  }
  
  export default Degree;