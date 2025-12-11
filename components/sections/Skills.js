import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Summary from "../components/sections/Summary";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { SKILLS } from "../components/sections/data";

export default function Home() {
  return (
    <Layout>

      {/* === MAIN TOP SECTION: HERO + FIXED SKILL SIDEBAR === */}
      <section className="container mx-auto px-6 lg:px-20 py-10 relative">

        <div className="grid lg:grid-cols-[70%_30%] gap-10 relative">

          {/* LEFT SIDE — ULTRA HERO */}
          <div className="hero-column">
            <Hero />
          </div>

          {/* RIGHT SIDE — FIXED SKILLS SIDEBAR */}
          <div className="skills-fixed-wrapper sticky top-28 h-fit">
            <h2 className="section-title mb-4">Skills</h2>

            <div className="skill-grid">
              {SKILLS.map((cat, i) => (
                <div key={i} className="mb-4">
                  <h3 className="skill-category">{cat.title}</h3>

                  <div className="space-y-1 mt-2">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="skill-chip">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* PROFESSIONAL SUMMARY (MOVED UP) */}
      <div className="mt-[-30px]">
        <Summary />
      </div>

      <Experience />
      <Projects />
      <Contact />

    </Layout>
  );
}
