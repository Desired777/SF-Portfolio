import React from "react";

export default function Experience() {
  const experiences = [
    { title: "Crunchy Orc Community Developer", year: "2023-2024", icon: "👾" },
    { title: "Roblox LUA Developer", year: "2022-Present", icon: "🟩" },
    { title: "Co-Founder of Axiom Interactive", year: "2025-Present", icon: "🚀" },
  ];

  return (
    <section id="experience" className="space-y-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="border-l-2 border-gray-300 dark:border-gray-700 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-8 pl-8">
            <div className="absolute -left-6 top-0 w-12 h-12 flex items-center justify-center text-xl glow rounded-full bg-gray-200 dark:bg-gray-800">
              {exp.icon}
            </div>
            <h3 className="font-semibold">{exp.title}</h3>
            <span className="text-gray-500 dark:text-gray-400">{exp.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
