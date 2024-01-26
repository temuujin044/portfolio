import { Location, Git, Twitter, Figma } from "@/components/icons/index";

export const Hero = ({ isDarkMode }) => {
  const iconColor = isDarkMode ? "dark:text-[#FFF]" : "";
  return (
    <div
      className={` py-[74px] flex items-center flex-col-reverse sm:flex-row  sm:py-[96px]  sm:gap-[48px] justify-center ${
        isDarkMode ? "dark:bg-[#030712]" : ""
      }`}
    >
      <div className="w-[343px] sm:w-[768px] ">
        <div className="gap-[8px] pb-[48px] sm:flex sm:flex-col sm:gap-[10px] ">
          <h2
            className={`text-4xl pb-[8px] sm:text-6xl sm:font-bold ${
              isDarkMode ? "dark:text-[#F9FAFB]" : "text-gary-900"
            }`}
          >
            Hi, I’m Sagar 👋
          </h2>
          <p
            className={`text-base  sm:font-normal sm:text-base ${
              isDarkMode ? "dark:text-[#D1D5DB]" : "text-gray-600"
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
          className={`text-base  sm:text-base pb-[48px] ${
            isDarkMode ? "dark:text-[#D1D5DB]" : " text-gray-600"
          }`}
        >
          <div className="flex pb-[8px]">
            <Location />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex ">
            <img src="/greenDot.png" alt="" className=" sm:self-center" />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex">
          <Git color={iconColor} />
          <Twitter color={iconColor} />
          <Figma color={iconColor} />
        </div>
      </div>
      <div className="flex items-center justify-center w-[343px] h-[300px] pb-[48px] sm:w-[400px] sm:h-[360px] sm:flex-[1 0 0] sm:self-stretch sm:relative">
        <div
          className={`absolute mb-[30px] border-r-[7px] w-[240px] h-[280px]  sm:z-[1]  sm:w-[280px] sm:h-[320px] sm:shrink-0  sm:mb-[0px] sm:object-fill  sm:bottom-[40px] sm:right-[40px]
          bg-[url(/Pic.jpg)]
          bg-cover ${isDarkMode ? "border-[#030712]" : "border-[#FFF]"}`}
        ></div>
        <div
          className={` h-[280px] w-[270px]  sm:h-[320px] sm:shrink-0 sm:border-8 sm:absolute sm:bottom-0 sm:right-0 ${
            isDarkMode
              ? "bg-[#374151] border-[#030712]"
              : " border-[#FFF] bg-[#E5E7EB]"
          }`}
        ></div>
      </div>
    </div>
  );
};
