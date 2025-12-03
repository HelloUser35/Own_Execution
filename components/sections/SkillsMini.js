import { SKILLS } from "./data";
import Reveal from "../../components/Reveal";

export default function SkillsMini() {
  return (
    <section className="space-y-6 px-4 lg:px-0">
      <Reveal>
        <h2 className="text-2xl font-bold hero-name-gradient mb-3">
          Core Skills
        </h2>
      </Reveal>
        <div className="skill-grid">
        {SKILLS.map((c, i) => (
            <div key={i}>
            <h3 className="skill-category">{c.title}</h3>
            <div className="flex flex-wrap gap-2">
                {c.items.map((skill, idx) => (
                <span key={idx} className="skill-chip">
                    {skill}
                </span>
                ))}
            </div>
            </div>
        ))}
        </div>
    </section>
  );
}
