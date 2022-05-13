import React from "react";

const SoftSkillsCard = (props) => {
  return (
    <div class="cardContainer">
      <div class="cardContainer__top">
        <img src={props.img} alt="" />
        <p>{props.title}</p>
      </div>
      <div class="cardContainer__bottom">
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SoftSkillsCard;
