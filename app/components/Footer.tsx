"use client";
import { Linkedin, Github } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-gray-200 py-16 px-8 md:px-16"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-16 py-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-purple-50 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 relative z-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
          >
            I&apos;m always interested in conversations about technology, AI
            systems, platform engineering, and building impactful products.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <motion.a
              href="mailto:sarathvadlamannati@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition relative overflow-hidden"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 25px 30px -5px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.92 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.2 }}
              />
              Send Email
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition"
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                borderColor: "#a855f7",
                color: "#a855f7"
              }}
              whileTap={{ scale: 0.92 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-gray-200 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Contact Info */}
            <motion.div
              className="flex flex-col gap-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              {[
                {
                  href: "mailto:sarathvadlamannati@gmail.com",
                  text: "sarathvadlamannati@gmail.com"
                },
                {
                  href: "https://linkedin.com/in/sarath-vadlamannati",
                  text: "linkedin.com/in/sarath-vadlamannati"
                },
                {
                  href: "https://github.com/sarathvad1811",
                  text: "github.com/sarathvad1811"
                }
              ].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-600 transition font-medium cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, x: -25 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 8, color: "#a855f7" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              <motion.a
                href="https://linkedin.com/in/sarath-vadlamannati"
                className="text-gray-600 hover:text-purple-600 transition"
                aria-label="LinkedIn"
                variants={{
                  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
                  visible: { opacity: 1, scale: 1, rotate: 0 }
                }}
                whileHover={{
                  scale: 1.4,
                  rotate: 15,
                  color: "#a855f7",
                  y: -4
                }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/sarathvad1811"
                className="text-gray-600 hover:text-purple-600 transition"
                aria-label="GitHub"
                variants={{
                  hidden: { opacity: 0, scale: 0.5, rotate: 20 },
                  visible: { opacity: 1, scale: 1, rotate: 0 }
                }}
                whileHover={{
                  scale: 1.4,
                  rotate: -15,
                  color: "#a855f7",
                  y: -4
                }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Github size={24} />
              </motion.a>
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <motion.p
                className="text-gray-600 text-sm cursor-default"
                whileHover={{ color: "#a855f7", letterSpacing: "0.05em" }}
                transition={{ duration: 0.3 }}
              >
                © 2026 Sarath Vadlamannati. All Rights Reserved.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
