import Image from "next/image";
import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiSend,
  FiCode,
} from "react-icons/fi";
import { CONTACT } from "./data";

export default function Hero() {

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="absolute w-2 h-2 bg-white rounded-full animate-flash" style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 2}s`
            }} />
          ))}
        </div>
      <div className="hero-aurora" aria-hidden></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <Reveal>
            <div className="space-y-6">
              
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight animate-float">
                <span className="hero-name-gradient">Pritish Kumar Panda</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl">
                <span className="typewriter-neon">
                  QA Automation Architect with 11+ years of expertise in scalable automation frameworks,
                  CI/CD, Linux, big data validation, and hardware-level QA engineering.
                </span>
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-[#f500dd] dark:drop-shadow-[0_0_6px_#f500dd]">
                <div>📞 {CONTACT.phone}</div>
                <div>✉️ {CONTACT.email}</div>
                <div>📍 {CONTACT.location}</div>
              </div>

              {/* Buttons section */}
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(245,0,221,0.6)] transition-all"
                >
                  <FiCode /> <span>View Experience</span>
                </motion.a>

                <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="btn-premium-outline">
                  <FiSend /> <span>Contact</span>
                </motion.a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a className="social-premium" href={CONTACT.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /></a>
                <a className="social-premium" href={CONTACT.github} target="_blank" rel="noreferrer"><FiGithub /></a>
                <a className="social-premium" href={`mailto:${CONTACT.email}`}><FiMail /></a>
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex justify-center">
        <motion.div className="hero-photo-wrapper">
          <Image
            src="/profile.jpg"
            alt="Pritish Kumar Panda"
            width={260}      // match new wrapper
            height={350}     // proportional height
            className="hero-photo"
            priority
          />
          </motion.div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
