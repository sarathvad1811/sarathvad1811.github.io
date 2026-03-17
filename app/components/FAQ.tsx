"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-20 px-8 md:px-16 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
        >
          About Me.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* My Journey */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              whileHover={{ color: "#a855f7", paddingLeft: 8, x: 5 }}
              transition={{ duration: 0.3 }}
            >
              My Journey
            </motion.h3>
            <motion.div
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              {[
                "I am a software engineer and technology leader who enjoys solving complex engineering problems and building systems that impact real users.",
                "My career began with building full-stack SaaS applications and has since evolved into designing enterprise-grade systems, intelligent automation platforms, and AI-enabled tools.",
                "Today, I focus on combining software engineering, data systems, and AI technologies to create products that improve productivity and decision-making.",
                "I believe great engineering is about clarity, simplicity, and scalability."
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  className="text-lg text-gray-700 leading-relaxed cursor-default"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ paddingLeft: 12, color: "#5b7280", x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-gray-900 mt-12 mb-6"
              whileHover={{ color: "#a855f7", paddingLeft: 8, x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Engineering Philosophy
            </motion.h3>
            <motion.div
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              {[
                {
                  title: "Build for scale",
                  desc: "Design systems that handle growth without constant rewrites."
                },
                {
                  title: "Keep systems simple",
                  desc: "Complexity is the biggest enemy of maintainable software."
                },
                {
                  title: "Measure impact",
                  desc: "Engineering decisions should always connect to real outcomes."
                },
                {
                  title: "Share knowledge",
                  desc: "Mentoring and collaboration are essential for strong teams."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ paddingLeft: 12, x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.h4
                    className="font-bold text-gray-900 mb-2"
                    whileHover={{ color: "#a855f7" }}
                  >
                    {item.title}
                  </motion.h4>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Summary */}
          <motion.div
            className="bg-white rounded-lg p-8 h-fit relative overflow-hidden"
            initial={{ opacity: 0, x: 40, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{
              boxShadow: "0 25px 50px -10px rgba(168, 85, 247, 0.2)",
              y: -8
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6 relative z-10"
              whileHover={{ color: "#a855f7", x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Experience
            </motion.h3>
            <motion.div
              className="space-y-6 relative z-10"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              {[
                {
                  position: "Associate Director",
                  company: "UBS",
                  time: "Present"
                },
                {
                  position: "Senior Software Engineer",
                  company: "Franklin Templeton",
                  time: ""
                },
                {
                  position: "Lead Engineer",
                  company: "Hitachi Vantara",
                  time: ""
                },
                { position: "Senior Engineer", company: "Vaave", time: "" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    paddingLeft: 12,
                    backgroundColor: "#f3e8ff",
                    x: 6,
                    boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded px-0 py-2 cursor-default"
                >
                  <motion.p
                    className="font-bold text-gray-900"
                    whileHover={{ color: "#a855f7", scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.position}
                  </motion.p>
                  <motion.p
                    className="text-purple-600"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.company}
                  </motion.p>
                  {item.time && (
                    <p className="text-sm text-gray-600">{item.time}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
