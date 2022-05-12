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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          doloribus architecto esse eaque ex voluptatem nostrum eligendi a nihil
          ipsa.
        </p>
      </div>
    </div>
  );
};

export default SoftSkillsCard;
