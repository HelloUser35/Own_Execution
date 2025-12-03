import Reveal from "../../components/Reveal";
import { EXPERIENCE } from "./data";

function ExperienceCompany({ company, role, period, projects }) {
  return (
    <div className="lux-panel mb-8">
      <div className="relative pl-8">
        <div className="timeline-dot absolute -left-2 top-2"></div>
        <h3 className="text-xl font-semibold">{company} <span className="font-normal">— {role}</span></h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{period}</p>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-glass p-4 rounded-xl">
            <h4 className="font-semibold mb-2">{p.title}</h4>

            {/* Updated tech badges */}
            <div className="flex flex-wrap gap-2 mb-2">
              {p.tech.map((t, i) => (
                <span key={i} className="exp-tech-aura">{t}</span>
              ))}
            </div>

            <ul className="list-disc ml-5 text-sm space-y-1">
              {p.bullets.map((b, n) => <li key={n}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-6 lg:px-20 py-16 relative">
      <div className="timeline-line" />
      <Reveal><h2 className="section-title hero-name-gradient text-3xl font-bold mb-8">Professional Experience</h2></Reveal>
      {EXPERIENCE.map((c, idx) => <Reveal key={idx}><ExperienceCompany {...c} /></Reveal>)}
    </section>
  );
}
