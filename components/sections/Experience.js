import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";
import { EXPERIENCE } from "./data";
import { SKILLS as DUMMY } from "./data"; // not used — just to avoid linter false positives

const SkillBadge = ({ children }) => <span className="tech-badge">{children}</span>;

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-6 lg:px-20 py-16 relative">
      <div className="timeline-line" aria-hidden></div>

      <Reveal>
        <h2 className="section-title hero-name-gradient text-3xl font-bold mb-10">Professional Experience</h2>
      </Reveal>

      <div className="space-y-8">
        {EXPERIENCE.map((c, idx) => (
          <Reveal key={idx} delay={idx * 0.06}>
            <motion.article whileHover={{ translateY: -4 }} className="lux-panel">
              <div className="relative pl-10">
                <div className="timeline-dot absolute -left-1 top-4" />
                <h3 className="text-xl font-semibold">{c.company} — <span className="font-normal">{c.role}</span></h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{c.period}</p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {c.projects.map((p, i) => (
                    <motion.div key={i} whileHover={{ translateY: -2 }} className="bg-glass p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                      <h4 className="font-semibold mb-2">{p.title}</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.tech.map((t, j) => <SkillBadge key={j}>{t}</SkillBadge>)}
                      </div>
                      <ul className="list-disc ml-5 text-sm space-y-1">
                        {p.bullets.map((b, n) => <li key={n}>{b}</li>)}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
