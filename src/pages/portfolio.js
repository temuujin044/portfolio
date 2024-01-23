import { useState } from "react";
import {
  About,
  Contactme,
  Experience,
  Footer,
  Header,
  Hero,
  Skills,
  Work,
} from "@/components";

export const Portfolio = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-col w-[100vw] mx-auto">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Experience />
    </div>
  );
};
