import React from "react";
import { skillsIcon, SecSkillsIcon } from "@/utils/dummyData";

export const IconsSkill = () => {
  return (
    <div className="   flex justify-between pb-[48px] gap-[70px]">
      {skillsIcon.map((skill, index) => (
        <div key={index}>
          <p>{skill.icon}</p>
          <p className="flex justify-center">{skill.iconName}</p>
        </div>
      ))}
    </div>
  );
};

export const IconsSecSkill = () => {
  return (
    <div className="flex  justify-between">
      {SecSkillsIcon.map((skill, index) => (
        <div key={index}>
          <p>{skill.icon}</p>
          <p className="flex justify-center">{skill.iconName}</p>
        </div>
      ))}
    </div>
  );
};
