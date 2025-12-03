import Reveal from "../../components/Reveal";
import { SKILLS } from "./data";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-6 lg:px-20 py-16">
      <Reveal>
        <h2 className="section-title hero-name-gradient">Skills</h2>
      </Reveal>

      {/* New Slim Premium Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {SKILLS.map((cat, i) => (
          <Reveal key={i}>
            <div>
              <h3 className="skill-category">{cat.title}</h3>

              <div className="skill-grid mt-3">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="skill-chip">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
