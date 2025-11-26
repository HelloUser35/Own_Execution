import Reveal from "../Reveal";
import { motion } from "framer-motion";

const SkillBadge = ({ children }) => (
  <span className="px-2 py-1 text-xs rounded bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-600 dark:text-pink-300 border border-purple-500/30">
    {children}
  </span>
);

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        whileHover={{ scale: 1.02, translateY: -4 }}
        transition={{ type: "spring", stiffness: 260 }}
        className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
      >
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
          {project.short}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <SkillBadge key={i}>{t}</SkillBadge>
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const PROJECTS = [
    {
      title: "OS Quality Validation Automation",
      short:
        "Enterprise BDD framework integrating GUI, API, OS and full CI/CD automation.",
      tech: ["Python", "Selenium", "BDD", "Jenkins", "VMware"],
    },
    {
      title: "REST API CI Framework",
      short:
        "Groovy + SoapUI based API automation integrated with Jenkins scripted pipelines.",
      tech: ["Groovy", "SoapUI", "Jenkins", "Maven", "Git"],
    },
  ];

  return (
    <section id="projects" className="section-wrapper">
      <Reveal>
        <h2 className="section-heading">Highlighted Projects</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
