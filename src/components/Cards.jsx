import React from "react";
import { experienceData } from "@/utils/dummyDataCards";
import { FiskilIcon, UpWork } from "./icons";
import { workData } from "@/utils/dummyDataCards";
import Image from "next/image";

export const ExperienceCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[48px] ">
      {experienceData.map((element) => (
        <div className="flex max-w-[896px] p-[32px] items-start justify-center rounded-[12px] bg-[#FFF] shadow-md">
          <div className="flex w-[100%] justify-between gap-12 self-stretch">
            <div className="flex items-start flex-[1 0 0]">
              <UpWork width={102} height={28} />
            </div>
            <div className="flex max-w-[384px] flex-col items-start gap-4">
              <h2 className="text-[#111827] font-sans text-[20px] not-italic font-semibold leading-7">
                {element.position}
              </h2>
              <ul className="list-disc pl-[25px]">
                {element.responsible.map((rep) => (
                  <li className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                    {rep}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#374151] font-sans text-[16px] not-italic font-normal leading-6">
                {element.posDate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const WorkCard = () => {
  return (
    <div className="flex flex-col items-center gap-[48px]">
      {workData.map((work) => (
        <div className=" flex max-w-[1152px] h-[480px] shadow-xl rounded-xl ">
          <div className="flex w-[50%] justify-center items-center bg-[#F9FAFB] rounded-l-xl">
            <Image
              src={work.Image}
              width={480}
              height={384}
              objectFit="cover"
              style={{
                borderRadius: "12px",
              }}
            />
          </div>
          <div className="flex flex-col gap-[24px] w-[50%] p-[48px]">
            <h2 className="text-[#111827] text-xl font-semibold">
              {work.Title}
            </h2>
            <p className="text-[#4B5563]  font-normal  ">{work.Description}</p>
            <div className="flex flex-wrap gap-[8px]">
              {work.Experience.map((experiences) => (
                <p className="flex justify-center items-center rounded-xl bg-[#E5E7EB] text-[#4B5563] fans text-[14px] font-medium leading-5 px-[20px] py-[4px]">
                  {experiences}
                </p>
              ))}
            </div>
            <FiskilIcon />
          </div>
        </div>
      ))}
    </div>
  );
};
