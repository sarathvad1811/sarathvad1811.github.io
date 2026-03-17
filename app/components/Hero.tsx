"use client";

import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  const scaleRotateVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  return (
    <section
      className="min-h-screen flex items-center px-8 md:px-16 pt-32 pb-20 bg-white"
      id="home"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.p
              className="text-xl text-gray-600 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hey, I&apos;m 👋🏻
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Sarath Vadlamannati
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-purple-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Associate Director | Software Engineer | AI & Platform Builder
            </motion.p>
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 max-w-3xl mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I build scalable systems, intelligent applications, and
            developer-focused platforms that solve real-world problems.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed"
            variants={itemVariants}
          >
            With 7+ years of experience in software engineering, I specialize in
            designing backend architectures, building modern full-stack
            applications, and integrating AI-powered capabilities into
            real-world products. My work spans financial technology, enterprise
            platforms, developer tools, and intelligent automation systems.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Currently, I work as an Associate Director at UBS, where I
            contribute to building robust financial technology platforms that
            power analytics, decision-making, and scalable infrastructure.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Image Placeholder */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="w-full max-w-sm"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div
              className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-2xl"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.span
                    className="text-6xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    👨‍💻
                  </motion.span>
                </motion.div>
                <motion.p
                  className="text-gray-600 mt-6 text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Sarath Vadlamannati
                </motion.p>
                <motion.p
                  className="text-purple-600 mt-2 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  AI & Platform Builder
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
