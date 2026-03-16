"use client";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-8 md:px-16 pt-32 pb-20 bg-white"
      id="home"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <div className="mb-8">
            <p className="text-xl text-gray-600 mb-4">Hey, I&apos;m 👋🏻</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Sarath Vadlamannati
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-purple-600 mb-8">
              Associate Director | Software Engineer | AI & Platform Builder
            </p>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mb-8 leading-relaxed">
            I build scalable systems, intelligent applications, and
            developer-focused platforms that solve real-world problems.
          </p>

          <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
            With 7+ years of experience in software engineering, I specialize in
            designing backend architectures, building modern full-stack
            applications, and integrating AI-powered capabilities into
            real-world products. My work spans financial technology, enterprise
            platforms, developer tools, and intelligent automation systems.
          </p>

          <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
            Currently, I work as an Associate Director at UBS, where I
            contribute to building robust financial technology platforms that
            power analytics, decision-making, and scalable infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right: Image Placeholder */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <p className="text-gray-600 mt-6 text-lg font-semibold">
                  Sarath Vadlamannati
                </p>
                <p className="text-purple-600 mt-2 text-sm">
                  AI & Platform Builder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
