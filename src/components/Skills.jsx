import IconsSkill from "./IconsSkill";
export const Skills = () => {
  return (
    <div className="flex flex-col items-start self-stretch px-[80px] py-[96px]">
      <div className="flex flex-col self-center  items-center gap-[16px] pb-[48px]">
        <h3 className="flex w-[75px] h-[28px] bg-[#E5E7EB] text-[#4B5563] rounded-xl  justify-center">
          Skills
        </h3>
        <p className="text-xl font-normal text-[#4B5563]">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex">
        <IconsSkill />
      </div>
    </div>
  );
};
