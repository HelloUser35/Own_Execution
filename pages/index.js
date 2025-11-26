import Hero from "../components/sections/Hero";
import Summary from "../components/sections/Summary";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
