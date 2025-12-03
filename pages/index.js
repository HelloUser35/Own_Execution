import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Summary from "../components/sections/Summary";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { SKILLS } from "../components/sections/data";
import SkillsMini from "../components/sections/SkillsMini"; // 🔥 NEW mini-skill block

export default function Home() {
  return (
    <Layout>
<section className="container mx-auto px-5 lg:px-16 py-7">
  <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
    <Hero />

    <div id="skills" className="space-y-6">
      <h2 className="section-title">Skills</h2>

      <div className="skill-grid">
        {SKILLS.map((c, i) => (
          <div key={i} className="space-y-1">
            <h3 className="skill-category">{c.title}</h3>
            {c.items.map((skill, idx) => (
              <div key={idx} className="skill-chip">{skill}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<Summary />
<Experience />
<Contact />

    </Layout>
  );
}
