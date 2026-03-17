"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "AI Knowledge Assistant",
    category: "RAG System",
    description:
      "A Retrieval-Augmented Generation system designed to provide contextual answers from large document collections. Features document indexing using vector databases, semantic search with embeddings, and LLM-powered contextual responses.",
    tech: "Python, LangChain, ChromaDB, FastAPI, OpenAI"
  },
  {
    title: "Portfolio Analytics Platform",
    category: "Financial Analytics",
    description:
      "A financial analytics tool used by advisors to simulate portfolio performance under different investment scenarios. Includes portfolio simulations, risk analysis, and data-driven decision tools.",
    tech: "Python, FastAPI, PostgreSQL, React"
  },
  {
    title: "Enterprise Recommendation Engine",
    category: "AI System",
    description:
      "An intelligent system designed to recommend enterprise storage solutions based on infrastructure needs. Features requirement-based recommendations, automated product matching, and performance-cost analysis.",
    tech: "Python, Node.js, MongoDB"
  },
  {
    title: "LLM-Powered Infrastructure Assistant",
    category: "AI Chatbot",
    description:
      "An AI chatbot designed to help manage cloud and storage infrastructure with capabilities for infrastructure queries, system diagnostics, and automated assistance.",
    tech: "Python, OpenAI APIs, REST APIs"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-8 md:px-16 bg-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
        >
          Selected Projects.
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group border border-gray-200 rounded-lg p-8 hover:shadow-lg transition relative overflow-hidden"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut"
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -10px rgba(168, 85, 247, 0.15)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="mb-4 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                <motion.span
                  className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block"
                  whileHover={{ scale: 1.12, backgroundColor: "#ede9fe" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {project.category}
                </motion.span>
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-3 relative z-10"
                whileHover={{ color: "#a855f7", x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-700 mb-4 leading-relaxed relative z-10"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
              >
                {project.description}
              </motion.p>
              <motion.p
                className="text-sm text-gray-600 mb-6 relative z-10"
                whileHover={{ color: "#a855f7", x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-semibold">Tech Stack:</span>{" "}
                {project.tech}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
