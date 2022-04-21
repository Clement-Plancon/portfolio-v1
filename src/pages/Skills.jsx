
const Skills = () => {
  let skills = "skills"
  let title = "title"
  let center = "center"
  let card = "card"
    return (
      <div className={skills} id="skills">
        <div className={title}>
          <h1>Compétences</h1>
          <h2>Hard et soft skills</h2>
        </div>
        <div className={center}>
          <div className={card}></div>
          <div className={card}></div>
          <div className={card}></div>
          <div className={card}></div>
        </div>
      </div>
    );
  }
  
  export default Skills;