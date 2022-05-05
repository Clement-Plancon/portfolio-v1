import variables from '../style/index.scss';

const Home = () => {
  let svgSize = variables.smallSvgSize;
  const iconLinkedin = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={svgSize} height={svgSize} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z" clip-rule="evenodd"/></svg>
  const iconGithub = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={svgSize} height={svgSize} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822c0 5.277-3.002 6.824-5.823 7.279c.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187c0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185c0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728a.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092c-.455-.546-.819-1.001-1.274-1.092c-.09-.091-.364-.455-.273-.819c.091-.364.455-.637.82-.455c.91.182 1.455.91 2 1.547c.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093c-2.73-.546-5.914-2.093-5.914-7.279c0-1.456.455-2.73 1.365-3.822c-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"/></svg>
  const iconDribbble = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={svgSize} height={svgSize} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12c6.612 0 12-5.375 12-12S18.612 0 12 0Zm7.926 5.531a10.202 10.202 0 0 1 2.317 6.378c-.338-.065-3.722-.755-7.132-.325c-.079-.17-.144-.352-.222-.534a30.53 30.53 0 0 0-.676-1.484c3.774-1.536 5.492-3.748 5.713-4.035ZM12 1.771c2.603 0 4.985.975 6.794 2.576c-.182.26-1.731 2.33-5.375 3.696c-1.68-3.084-3.54-5.61-3.827-6A10.424 10.424 0 0 1 12 1.77Zm-4.36.962c.273.365 2.095 2.903 3.8 5.922c-4.79 1.276-9.02 1.25-9.475 1.25c.664-3.176 2.812-5.818 5.675-7.172Zm-5.896 9.28v-.312c.443.013 5.414.078 10.53-1.458c.299.573.572 1.158.832 1.744c-.13.039-.273.078-.403.117c-5.284 1.705-8.096 6.364-8.33 6.755a10.226 10.226 0 0 1-2.629-6.846ZM12 22.256a10.18 10.18 0 0 1-6.286-2.16c.182-.378 2.264-4.387 8.043-6.404c.026-.013.04-.013.065-.026c1.445 3.735 2.03 6.872 2.187 7.77c-1.237.534-2.59.82-4.009.82Zm5.714-1.757c-.104-.625-.651-3.618-1.992-7.302c3.215-.507 6.026.326 6.378.443c-.443 2.85-2.083 5.31-4.386 6.859Z" clip-rule="evenodd"/></svg>
  const iconBehance = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={svgSize} height={svgSize} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#svgIDa)"><path fill="currentColor" d="M22 7h-7V5h7v2Zm1.726 10c-.442 1.297-2.029 3-5.101 3c-3.074 0-5.564-1.729-5.564-5.675c0-3.91 2.325-5.92 5.466-5.92c3.082 0 4.964 1.782 5.375 4.426c.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168Zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219c-1.466 0-2.277.768-2.488 2.219Zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906c3.461 1.26 3.577 8.061-3.207 8.061ZM3 11h3.584c2.508 0 2.906-3-.312-3H3v3Zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016Z"/></g><defs><clipPath id="svgIDa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
  const iconInstagram = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={svgSize} height={svgSize} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z" clip-rule="evenodd"/></svg>

  const linkLinkedin = "https://www.linkedin.com/in/cl%C3%A9ment-plan%C3%A7on-502b1b195/"
  const linkGithub = "https://github.com/Clement-Plancon"
  const linkDribbble= "https://dribbble.com/Clement_Plancon"
  const linkBehance = "https://www.behance.net/clmentplanon"
  const linkInstagram = "https://www.instagram.com/clem_creative_development"
  let home = "home"
  let socialIcons = "home__socialIcons"
  let centerText = "home__centerText"
  let rightImg = "home__rightImg"
  let clipImg = "clipImg"

    return (
      <section className={`${home} section`} id="home">
        <div className={socialIcons}>
          <a href={linkLinkedin}>{iconLinkedin}</a>
          <a href={linkGithub}>{iconGithub}</a>
          <a href={linkDribbble}>{iconDribbble}</a>
          <a href={linkBehance}>{iconBehance}</a>
          <a href={linkInstagram}>{iconInstagram}</a>

        </div>
        <div className={centerText}>
          <h1>Moi c'est <br/>Clément</h1>
          <p>Développeur web</p>
          <p>Etudiant en 3eme année analyste en génie informatique à l'Institut National Supérieur des Technologies Avancée</p>
          <a href="#contact"> Contactez Moi</a>
        </div>

        <div className={rightImg}>
          <div className={clipImg}></div>
        </div>
      </section>
    );
  }
  
  export default Home;