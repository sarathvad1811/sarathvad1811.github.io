"use client";

import { motion } from "motion/react";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-8 md:px-16 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
        >
          Technology Stack.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
                rotateY: 15
              }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: "easeOut"
              }}
              viewport={{ once: false, margin: "-50px" }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent rounded-lg opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h3
                className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-600 inline-block relative z-10"
                whileHover={{ color: "#a855f7", paddingRight: "8px", x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {category.title}
              </motion.h3>
              <motion.ul
                className="space-y-3 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="text-lg text-gray-700 flex items-center cursor-default"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{
                      x: 12,
                      color: "#a855f7",
                      paddingRight: "8px"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"
                      whileHover={{ scale: 1.8, rotate: 180 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
