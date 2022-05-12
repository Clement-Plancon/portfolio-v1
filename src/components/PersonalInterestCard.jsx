import React from "react";

const PersonalInterestCard = ({img, title, subtitle, text}) => {
  return (
    <div class="cardPersonalInterest">
      <div class="leftPart">
        <img src={img} alt="" />
      </div>
      <div class="topPart">
        <h3>
         {title} <span>{subtitle}</span>
        </h3>
      </div>
      <div class="bottomPart">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default PersonalInterestCard;
