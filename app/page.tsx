import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Testimonials";
import About from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Footer />
    </main>
  );
}
