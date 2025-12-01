// app/page.tsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <main className="mx-auto max-w-5xl">
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
