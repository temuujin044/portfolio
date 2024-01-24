import React from "react";
import { PhoneIcon, CopyIcon, Message, Figma, Git, Twitter } from "./icons";

export const Contactme = () => {
  return (
    <div className=" flex flex-col self-center gap-[48px] py-[96px]">
      <div className=" flex flex-col items-center gap-[16px]">
        <h2 className=" w-[122px] bg-gray-200 text-gray-600 rounded-xl flex justify-center">
          Get in touch
        </h2>
        <p className="text-xl text-[#4B5563] w-[576px]">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center gap-[20px] pb-[16px]">
          <Message />
          <p className="text-4xl">reachsagarshah@gmail.com</p>
          <CopyIcon />
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <PhoneIcon />
          <p className="text-4xl font-semibold text-gray-900">+91 8980500565</p>
          <CopyIcon />
        </div>
      </div>
      <div className="flex flex-col  items-center justify-center">
        <p className="text-[#4B5563] text-base">
          You may also find me on these platforms!
        </p>
        <div className="flex font-semibold text-gray-900">
          <Git />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
};
