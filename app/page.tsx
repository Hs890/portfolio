import ShaderBackground from "./components/ShaderBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import TechMarquee from "./components/TechMarquee";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-16">
        <Hero />
        <Projects />
        <About />
        <TechMarquee />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
