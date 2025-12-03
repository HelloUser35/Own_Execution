import Reveal from "../../components/Reveal";
import { PROJECTS } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 lg:px-20 py-16">
      <Reveal><h2 className="section-title hero-name-gradient text-3xl font-bold mb-8">Highlighted Projects</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={i}><article className="project-card">
            <h4 className="font-semibold text-lg mb-2">{p.title}</h4>
            <div className="flex flex-wrap gap-2 mb-3">{p.tech.map((t,idx)=><span key={idx} className="tech-badge">{t}</span>)}</div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{p.short}</p>
          </article></Reveal>
        ))}
      </div>
    </section>
  );
}
