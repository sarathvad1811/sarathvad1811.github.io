"use client";

export default function Experience() {
  const experiences = [
    {
      company: "UBS",
      position: "Associate Director",
      duration: "Present",
      descriptions: [
        "Building scalable financial platforms and engineering systems that support analytics, data workflows, and enterprise-level applications",
        "Architecture decisions and system optimization for high-performance trading platforms",
        "Mentoring engineers while building high-quality software solutions"
      ]
    },
    {
      company: "Franklin Templeton",
      position: "Senior Software Engineer",
      duration: "Previous Role",
      descriptions: [
        "Worked on the Portfolio Analytics Tool (PAT) which helps financial advisors simulate and analyze portfolio performance under various scenarios",
        "Migrated a portfolio statistics service from Java to Python, improving maintainability and performance",
        "Designed backend APIs for analytics workflows and introduced automated testing frameworks to improve reliability"
      ]
    },
    {
      company: "Hitachi Vantara",
      position: "Lead Engineer",
      duration: "Previous Role",
      descriptions: [
        "Led development of intelligent enterprise tools and AI-powered chatbot integrated with LLMs to manage storage and cloud assets",
        "Built recommendation engine that helped customers identify optimal storage solutions",
        "Developed real-time monitoring platforms for enterprise infrastructure, improving operational efficiency by up to 50%"
      ]
    },
    {
      company: "Vaave",
      position: "Senior Engineer",
      duration: "Previous Role",
      descriptions: [
        "Built scalable alumni networking platforms used by universities worldwide supporting 50k+ daily active users",
        "Developed mobile applications using React Native and implemented push notification systems that increased engagement 5x"
      ]
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Experience.
        </h2>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {exp.position} @ {exp.company}
                </h3>
                <p className="text-gray-600">{exp.duration}</p>
              </div>
            </div>
            <div className="space-y-3">
              {exp.descriptions.map((desc, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
