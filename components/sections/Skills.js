import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";
import { SKILLS } from "./data";

const SkillBadge = ({ children }) => (
  <span className="tech-badge">{children}</span>
);

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-6 lg:px-20 py-16">
      <Reveal>
        <h2 className="section-title hero-name-gradient text-2xl md:text-3xl font-bold mb-6">Technical Skills</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILLS.map((s, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="bg-glass p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <h4 className="font-semibold mb-3">{s.title}</h4>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it, idx) => <SkillBadge key={idx}>{it}</SkillBadge>)}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
