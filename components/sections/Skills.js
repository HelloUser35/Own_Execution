import Reveal from "../../components/Reveal";
import { SKILLS } from "./data";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-6 lg:px-20 py-16">
      <Reveal><h2 className="section-title text-2xl md:text-3xl font-bold mb-6 hero-name-gradient">Technical Skills</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {SKILLS.map((s, i) => (
          <div key={i} className="bg-glass p-6 rounded-xl">
            <h4 className="font-semibold mb-3">{s.title}</h4>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it, idx) => <span key={idx} className="tech-badge">{it}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
