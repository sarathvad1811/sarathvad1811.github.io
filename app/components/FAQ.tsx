"use client";

export default function About() {
  return (
    <section className="py-20 px-8 md:px-16 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          About Me.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* My Journey */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a software engineer and technology leader who enjoys
                solving complex engineering problems and building systems that
                impact real users.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My career began with building full-stack SaaS applications and
                has since evolved into designing enterprise-grade systems,
                intelligent automation platforms, and AI-enabled tools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, I focus on combining software engineering, data systems,
                and AI technologies to create products that improve productivity
                and decision-making.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe great engineering is about clarity, simplicity, and
                scalability.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Engineering Philosophy
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Build for scale
                </h4>
                <p className="text-gray-700">
                  Design systems that handle growth without constant rewrites.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Keep systems simple
                </h4>
                <p className="text-gray-700">
                  Complexity is the biggest enemy of maintainable software.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Measure impact</h4>
                <p className="text-gray-700">
                  Engineering decisions should always connect to real outcomes.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Share knowledge
                </h4>
                <p className="text-gray-700">
                  Mentoring and collaboration are essential for strong teams.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Summary */}
          <div className="bg-white rounded-lg p-8 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900">Associate Director</p>
                <p className="text-purple-600">UBS</p>
                <p className="text-sm text-gray-600">Present</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">
                  Senior Software Engineer
                </p>
                <p className="text-purple-600">Franklin Templeton</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Lead Engineer</p>
                <p className="text-purple-600">Hitachi Vantara</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Senior Engineer</p>
                <p className="text-purple-600">Vaave</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
