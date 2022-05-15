import React from "react";

const CardProjects = ({ block, element, modifier, titles, text }) => {
  return (
    <div className={`${block} ${block}${modifier}`}>
      <h3>{titles}</h3>
      <p>{text}</p>
    </div>
  );
};

export default CardProjects;
