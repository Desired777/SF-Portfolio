import React, { useState, useEffect } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-500">
      <nav className="fixed top-0 left-0 w-full flex justify-between p-4 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 z-50 rounded-b-xl">
        <div className="font-bold text-xl">Desired777</div>
        <div className="space-x-4">
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("experience")}>Experience</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-1 border rounded-lg"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      <div className="pt-24 space-y-32 px-4 md:px-16">
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
