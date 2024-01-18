export const About = ({ isDarkMode }) => {
  return (
    <div
      className={` flex flex-col justify-center align-center bg-gray-50 pt-[96px] ${
        isDarkMode ? "dark:bg-[#111827]" : ""
      }`}
    >
      <div className="flex direction-col justify-center align-center  pb-[48px] ">
        <h2
          className={`flex justify-center rounded-xl w-[105px] h-[28px] px-[4px]  bg-gray-200  text-gray-600 ${
            isDarkMode ? "bg-[#374151] text-[#D1D5DB]" : ""
          }`}
        >
          About me
        </h2>
      </div>
      <div className="px-[80px] pb-[96px]">
        <div className="flex justify-between px-[32px]">
          <div className="flex relative w-[584px] ">
            <div
              className={`w-[400px] h-[480px] border-[8px] border-[#F9FAFB] bg-[url(/heroPic.jpg)] absolute bg-cover left-10 top-0 z-[1] ${
                isDarkMode ? "border-[#111827] " : ""
              }`}
            ></div>
            <div
              className={`w-[400px] h-[480px] border-[8px] border-[#F9FAFB] bg-[#E5E7EB] absolute left-0 top-10 ${
                isDarkMode ? "border-[#111827] bg-[#374151]" : ""
              }`}
            ></div>
          </div>
          <div className="flex flex-col w-[584px] border-red-100 gap-[16px] ">
            <h2
              className={`text-3xl text-gray-900 font-semibold tracking-[-0.6px] pb-[24px] ${
                isDarkMode ? "text-[#F9FAFB]" : ""
              }`}
            >
              Curious about me? Here you have it:
            </h2>
            <p
              className={`text-base font-normal text-gray-600 ${
                isDarkMode ? "text-[#D1D5DB]" : ""
              }`}
            >
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p
              className={`text-base font-normal text-gray-600 ${
                isDarkMode ? "text-[#D1D5DB]" : ""
              }`}
            >
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p
              className={`text-base font-normal text-gray-600 ${
                isDarkMode ? "text-[#D1D5DB]" : ""
              }`}
            >
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p
              className={`text-base font-normal text-gray-600 ${
                isDarkMode ? "text-[#D1D5DB]" : ""
              }`}
            >
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p
              className={`text-base font-normal text-gray-600 ${
                isDarkMode ? "text-[#D1D5DB]" : ""
              }`}
            >
              Finally, some quick bits about me.
            </p>
            <div className="flex gap-[10px]">
              <div>
                <li
                  className={`text-base font-normal text-gray-600 ${
                    isDarkMode ? "text-[#D1D5DB]" : ""
                  }`}
                >
                  B.E. in Computer Engineering
                </li>
                <li
                  className={`text-base font-normal text-gray-600 ${
                    isDarkMode ? "text-[#D1D5DB]" : ""
                  }`}
                >
                  Full time freelancer
                </li>
              </div>
              <div>
                <li
                  className={`text-base font-normal text-gray-600 ${
                    isDarkMode ? "text-[#D1D5DB]" : ""
                  }`}
                >
                  Avid learner
                </li>
                <li
                  className={`text-base font-normal text-gray-600 ${
                    isDarkMode ? "text-[#D1D5DB]" : ""
                  }`}
                >
                  Aspiring indie hacker
                </li>
              </div>
            </div>
            <p
              className={`text-base font-normal text-gray-600 ${
                isDarkMode ? "text-[#D1D5DB]" : ""
              }`}
            >
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
