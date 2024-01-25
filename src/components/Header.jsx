import { Menu } from "./icons";

export const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div
      className={`flex sm:py-[16px] sm:justify-center ${
        isDarkMode ? "dark:bg-[#030712]" : ""
      }`}
    >
      <div className="flex">
        <div className="flex self-center text-3xl font-bold ">
          <p
            className={`${isDarkMode ? "dark:text-gray-50" : "text-gray-900"}`}
          >
            &lt;SS /&gt;
          </p>

          <div
            className={`hidden sm:flex sm:pl-[596px] sm:self-center sm:text-base sm:font-medium sm:gap-[24px] ${
              isDarkMode ? "dark:text-[#D1D5DB]" : "text-gray-600 "
            }`}
          >
            <h3>About</h3>
            <h3>Work</h3>
            <h3>Testimonials</h3>
            <h3 className="sm:pr-[24px]">Contact</h3>
          </div>
        </div>
        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
      <div
        className="hidden sm:flex"
        onClick={() => {
          toggleDarkMode();
        }}
      >
        <img
          src={isDarkMode ? "/IconButton.svg" : "/Icon1.svg"}
          alt=""
          className=" sm:h-[24px] sm:self-center sm:pr-[16px] sm:pl-[24px] cursor-pointer "
        />
        <button
          className={` sm:py-1.5 sm:px-4 sm:rounded-xl ${
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
