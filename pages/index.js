import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Summary from "../components/sections/Summary";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import { SKILLS } from "../components/sections/data";
import Awards from "../components/sections/Awards"
import Hobbies from "../components/sections/Hobbies";


export default function Home() {
  return (
    <Layout>

      {/* === MAIN TOP SECTION: HERO + FIXED SKILL SIDEBAR === */}
    {/* FIXED RIGHT SIDEBAR SKILL PANEL (B1-A) */}
<section className="container mx-auto px-5 lg:px-16 pt-4 pb-10">
  <div className="grid lg:grid-cols-[3fr,1.2fr] gap-16 items-start">

    {/* HERO LEFT */}
    <div className="hero-wrapper">
      <Hero />
    </div>

    
    {/* RIGHT FIXED SKILL SIDEBAR */}
    <aside className="sticky top-28 max-h-[78vh] overflow-y-auto pr-2 custom-scroll">
      <h2 className="section-title">Skills</h2>

      <div className="space-y-6">
        {SKILLS.map((c, i) => (
          <div key={i}>
            <h3 className="skill-category">{c.title}</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {c.items.map((skill, idx) => (
              <span key={idx} className="skill-text">
                {skill}
              </span>
            ))}
          </div>
          </div>
        ))}
      </div>
    </aside>

  </div>
</section>


      {/* PROFESSIONAL SUMMARY (MOVED UP) */}
      <div className="mt-[-30px]">
        <Summary />
      </div>
      <Experience />
      <Awards />
      <Hobbies />
      <section className="container mx-auto px-6 lg:px-20 py-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Thank you for taking the time to review my profile.<br />
          I’m always open to discussing opportunities where I can contribute through my 
          expertise in automation, quality engineering, and scalable frameworks.<br />
          If my experience aligns with your requirement, I’d be happy to connect.
        </p>
      </section>
      <Contact />

    </Layout>
  );
}
