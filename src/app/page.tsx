import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GameJams from "@/components/GameJams";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Achievements />
        <Skills />
        <Experience />
        <Projects />
        <GameJams />
        <CurrentlyPlaying />
        <Education />
      </main>
      <Footer />
    </>
  );
}
