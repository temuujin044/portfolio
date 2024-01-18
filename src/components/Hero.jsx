import { Location, Git, Twitter, Figma } from "@/components/icons/icons";

export const Hero = ({ isDarkMode }) => {
  const iconColor = isDarkMode ? "#D1D5DB" : "";
  return (
    <div
      className={`flex px-[112px] py-[96px]  gap-[48px] ${
        isDarkMode ? "dark:bg-[#030712]" : ""
      }`}
    >
      <div className="w-[768px]">
        <div className="pb-[48px] flex flex-col gap-[10px] ">
          <h2
            className={`text-gary-900 text-6xl font-bold ${
              isDarkMode ? "dark:text-[#F9FAFB]" : ""
            }`}
          >
            Hi, I’m Sagar 👋
          </h2>
          <p
            className={`text-gray-600 font-normal text-base ${
              isDarkMode ? "dark:text-[#D1D5DB]" : ""
            }`}
          >
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div
          className={`text-base text-gray-600 pb-[48px] ${
            isDarkMode ? "dark:text-[#D1D5DB]" : ""
          }`}
        >
          <div className="flex pb-[8px]">
            <Location />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex ">
            <img src="/greenDot.png" alt="" className=" self-center" />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex">
          <Git color={iconColor} />
          <Twitter color={iconColor} />
          <Figma color={iconColor} />
        </div>
      </div>
      <div className="flex w-[400px] h-[360px] flex-[1 0 0] self-stretch relative">
        <div
          className={`w-[280px] h-[320px] shrink-0 border-8 border-[#FFF] object-fill z-[1] absolute bottom-[40px] right-[40px]
          bg-[url(/Pic.jpg)]
          bg-cover ${isDarkMode ? "border-[#030712]" : ""}`}
        ></div>
        <div
          className={`w-[280px] h-[320px] shrink-0 border-8 border-[#FFF] bg-[#E5E7EB] absolute bottom-0 right-0 ${
            isDarkMode ? "bg-[#374151] border-[#030712]" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};
