"use client";

import { motion } from "motion/react";

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
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
        >
          Experience.
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-16 last:mb-0 relative"
            initial={{ opacity: 0, x: -40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 cursor-pointer group"
              whileHover={{ paddingLeft: 12 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  whileHover={{ color: "#a855f7", x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {exp.position} @{" "}
                  <motion.span
                    className="text-purple-600"
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 8px rgba(168, 85, 247, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.company}
                  </motion.span>
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, color: "#a855f7" }}
                  transition={{ duration: 0.2 }}
                >
                  {exp.duration}
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="space-y-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              {exp.descriptions.map((desc, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 group cursor-default relative"
                  variants={{
                    hidden: { opacity: 0, x: -25 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 12, paddingRight: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.8, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <motion.p
                    className="text-gray-700 leading-relaxed"
                    whileHover={{ color: "#a855f7" }}
                    transition={{ duration: 0.2 }}
                  >
                    {desc}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
