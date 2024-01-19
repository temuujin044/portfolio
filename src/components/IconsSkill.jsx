import React from "react";
import { skillsIcon } from "@/utils/dummyData";

const IconsSkill = () => {
  return (
    <div>
      {skillsIcon.map((skill, index) => {
        return <div key={index}>{skill.icon}</div>;
      })}
    </div>
  );
};

export default IconsSkill;
