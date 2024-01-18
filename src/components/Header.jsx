import { ThemeIcon, ThemeDayIcon } from "./icons/icons";
export const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div
      className={`flex w-[1440px] px-[110px] py-[16px] mx-auto ${
        isDarkMode ? "dark:bg-[#030712]" : ""
      }`}
    >
      <div className="flex self-center text-3xl font-bold ">
        <p className={`${isDarkMode ? "dark:text-gray-50" : "text-gray-900"}`}>
          &lt;SS /&gt;
        </p>
        <div
          className={`flex pl-[596px] self-center text-gray-600 text-base font-medium gap-[24px] ${
            isDarkMode ? "dark:text-[#D1D5DB]" : ""
          }`}
        >
          <h3>About</h3>
          <h3>Work</h3>
          <h3>Testimonials</h3>
          <h3 className="pr-[24px]">Contact</h3>
        </div>
      </div>
      <div
        className="flex"
        onClick={() => {
          toggleDarkMode();
        }}
      >
        <img
          src={isDarkMode ? <ThemeDayIcon /> : <ThemeIcon />}
          alt=""
          className="h-[24px] self-center pr-[16px] pl-[24px] cursor-pointer"
        />
        <button
          className={`py-1.5 px-4 rounded-xl ${
            isDarkMode
              ? "dark:bg-[#F9FAFB] text-[#111827] "
              : "bg-gray-900 text-gray-50"
          }`}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};
