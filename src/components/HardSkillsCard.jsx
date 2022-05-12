import React from "react";

const HardSkillsCard = ({ content, title }) => {
  return (
    <div class="cardHardSkills">
      <div class="cardHardSkills__title">
        <h3>{title}</h3>
      </div>
      <div class="cardHardSkills__icon">{content}</div>
    </div>
  );
};

export default HardSkillsCard;
