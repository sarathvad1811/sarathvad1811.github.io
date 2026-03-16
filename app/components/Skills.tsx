"use client";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["FastAPI", "Django", "Node.js", "React"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Vector Databases"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Docker", "CI/CD", "Git"]
    },
    {
      title: "AI Stack",
      skills: ["OpenAI APIs", "RAG systems", "LangChain", "LLM integrations"]
    },
    {
      title: "Core Competencies",
      skills: [
        "Backend Systems & Microservices",
        "AI & LLM Integrations",
        "Developer Platforms & APIs",
        "Data Systems & Analytics",
        "Full Stack Web Applications"
      ]
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Technology Stack.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-600 inline-block">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-lg text-gray-700 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
