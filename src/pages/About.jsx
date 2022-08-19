
const About = () => {
  let about = "about"
  let center = "center"
  let title = "title"
  let centerLeft = "center__left"
  let centerRight = "center__right"
  let clipImg = "clipImg"
 
    return (

      <section className={`${about} section`} id="about">
        <div className={title}>
          <h1>À-propos de moi</h1>
          <h2>Introduction</h2>
        </div>
        <div className={center}>
          <div className={centerLeft}>
            <div className={clipImg}></div>
          </div>
          <div className={centerRight}>
            <p>Maitrisant le développement web et ayant des affinités avec le webdesign, je suis actuellement à la recherche d'une alternance pour le mois de septembre 2022 à raison de 3 semaines en entreprise et 1 en formation.</p>
            <a href="./pdf/CV Clément Plançon - développeur web.pdf" target="_blank">Télécharger mon CV</a>
            {/* <a href="#">Télécharger ma lettre de motivation</a> */}
          </div>
        </div>
      </section>

    );
  }
  
  export default About;