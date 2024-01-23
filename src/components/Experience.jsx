export const Experience = () => {
  return (
    <div
      className="flex w-[100%] h-fit px-[80px] py-[96px] justify-between items-start self-stretch bg-[#F9FAFB] delay-1000"
      id="experience"
    >
      <div className="flex w-[100%] px-[32px] py-0 flex-col items-start justify-center gap-[48px]">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex w-[100%] justify-center items-center self-stretch">
            <button className="flex px-[20px] py-[4px] justify-center items-center rounded-[12px] bg-[#E5E7EB] font-sans text-[14px] not-italic font-medium leading-5 text-[#4B5563]">
              Experience
            </button>
          </div>
          <div className="flex w-[100%] justify-center items-center self-stretch">
            <p className="max-w-[576px] self-stretch text-[#4B5563] text-center font-sans text-[20px] not-italic font-normal leading-[28px]">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
        </div>
        <div className="flex w-[100%] flex-col justify-center items-center">
          {/* <ExperienceCard /> */}
        </div>
      </div>
    </div>
  );
};
