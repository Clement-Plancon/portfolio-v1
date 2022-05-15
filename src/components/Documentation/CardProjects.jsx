import React from "react";
const CardProjects = ({element, modifier, titles, text}) => {
console.log(text)
  return (
    <div className={`${element} ${element}${modifier}`}>
      <h3>{titles}</h3>
      <p>{JSON.stringify(text)}</p>
    </div>
  );
};

export default CardProjects;
