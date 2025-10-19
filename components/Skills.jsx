import React from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Lua"];
  return (
    <section id="skills" className="space-y-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div key={skill} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full glow">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
