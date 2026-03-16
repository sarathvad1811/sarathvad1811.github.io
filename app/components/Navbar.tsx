"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-white/80 backdrop-blur-md">
      {/* Logo */}
      <a
        href="#"
        className="text-xl font-bold text-gray-900 hover:text-purple-600 transition"
      >
        Sarath.
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-12">
        <a
          href="#home"
          className="text-gray-700 font-medium hover:text-purple-600 transition"
        >
          Home
        </a>
        <a
          href="#projects"
          className="text-gray-700 font-medium hover:text-purple-600 transition"
        >
          Projects
        </a>
        <a
          href="#about"
          className="text-gray-700 font-medium hover:text-purple-600 transition"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-700 font-medium hover:text-purple-600 transition"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-900">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}
