"use client";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-gray-200 py-16 px-8 md:px-16"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I&apos;m always interested in conversations about technology, AI
            systems, platform engineering, and building impactful products.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:sarathvadlamannati@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Send Email
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:sarathvadlamannati@gmail.com"
                className="text-gray-700 hover:text-purple-600 transition font-medium"
              >
                sarathvadlamannati@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/sarath-vadlamannati"
                className="text-gray-700 hover:text-purple-600 transition font-medium"
              >
                linkedin.com/in/sarath-vadlamannati
              </a>
              <a
                href="https://github.com/sarathvad1811"
                className="text-gray-700 hover:text-purple-600 transition font-medium"
              >
                github.com/sarathvad1811
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/sarath-vadlamannati"
                className="text-gray-600 hover:text-purple-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/sarathvad1811"
                className="text-gray-600 hover:text-purple-600 transition"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-sm">
                © 2026 Sarath Vadlamannati. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
