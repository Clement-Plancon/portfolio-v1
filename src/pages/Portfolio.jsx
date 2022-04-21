
const Portfolio = () => {
  let portfolio = "portfolio"
  let title = "title"
  let center = "center"
  let left = "left"
  let right = "right"
    return (
      <div className={portfolio} id="portfolio">
        <div className={title}>
          <h1>Portfolio</h1>
          <h2>Travail le plus récent</h2>
        </div>
        <div className={center}>
          <div className={left}>

          </div>
          <div className={right}>
            <h1>Portfolio</h1>
            <p>Vous pouvez directement accéder à mon portfolio et consulter mes créations ou mes projets en cours.</p>
            <a href="">Accéder au portfolio</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;