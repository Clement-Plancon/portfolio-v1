import React, { Fragment } from "react";
import { useRef } from "react";

const CardProjects = ({
  block,
  element,
  modifier,
  titles,
  text,
  logoModal,
  textModal,
  iconModal,
  linkModal,
  iFrameModal,
}) => {

  return (
    <div class="container-project-card">
    <h3>Marquerie</h3>
    <p>
      Marquerie.co est un site B2B de vente de produits français et locaux qui
      met en relation marque et point de vente en facilitant le dialogue et les
      échanges.
    </p>
    <ul class="container-project-card__techno">
      <li>SASS</li>
      <li>Jquery</li>
      <li>React</li>
    </ul>
    <div class="container-project-card__link">
      <a href="https://github.com" aria-label="source code">
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
        </svg>
      </a>
      <a href="https://github.com" aria-label="live preview">
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
        </svg>
      </a>
    </div>
  </div>
  );
};

export default CardProjects;
