import React from "react";
import { WorkCard } from "./Cards";

export const Work = () => {
  return (
    <div className="py-[96px]">
      <div className="flex flex-col  pb-[48px]">
        <h2 className="bg-gray-200 w-[75px] h-[28px] flex justify-center text-gray-600 self-center rounded-xl ">
          Work
        </h2>
        <p className="text-gray-600 flex justify-center pt-[16px] ">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <WorkCard />
    </div>
  );
};
