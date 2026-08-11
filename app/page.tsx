import ShaderBackground from "./components/ShaderBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <Hero />
        <TechMarquee />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <Footer />
      </div>
    </>
  );
}
