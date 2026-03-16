"use client";

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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Selected Projects.
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-lg p-8 hover:shadow-lg transition"
            >
              <div className="mb-4">
                <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                <span className="font-semibold">Tech Stack:</span>{" "}
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
