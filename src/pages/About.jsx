
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
            <div className={clipImg}>
              <img src="./img_photo/photo_portfolio_deux.png" alt="photo Clément de profil" />
            </div>
          </div>
          <div className={centerRight}>
            <p>Maitrisant le développement web et ayant des affinités avec le webdesign, je suis actuellement en alternance au seins du Laboratoire de transformation du ministère des finances pour une durée de 2 ans.</p>
            <a href="./pdf/CV Clément Plançon - développeur web.pdf" target="_blank">Télécharger mon CV</a>
            {/* <a href="#">Télécharger ma lettre de motivation</a> */}
          </div>
        </div>
      </section>

    );
  }
  
  export default About;