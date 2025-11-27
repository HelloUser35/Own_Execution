import { useState, useEffect } from "react";
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

// Typewriter Component
function TypewriterText() {
  const fullText =
    "QA Automation Architect with 11+ years of expertise in scalable automation frameworks, CI/CD, Linux, big data validation, and hardware-level QA engineering.";

  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const speed = 20;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="
        text-base md:text-lg
        leading-relaxed tracking-wide
        max-w-2xl
        text-gray-700
        dark:text-[#7c3aed]
        font-normal
      "
    >
      {text}
      {!done && <span className="animate-pulse">|</span>}
    </p>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20pt-16pt-12"
    >
      {/* Flash particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-flash"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-aurora" aria-hidden></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <Reveal>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight animate-float">
                <span className="hero-name-gradient">Pritish Panda</span>
              </h1>

              {/* TYPEWRITER */}
              <TypewriterText />

              {/* CONTACT INFO */}
              <div
                className="
                  mt-4 flex flex-wrap gap-4 text-sm
                  text-gray-700 dark:text-[#7c3aed]
                "
              >
                <div>📞 {CONTACT.phone}</div>
                <div>✉️ {CONTACT.email}</div>
                <div>📍 {CONTACT.location}</div>
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.06 }}
                  className="
                    btn-premium
                    shadow-[0_0_20px_rgba(168,85,247,0.5)]
                    hover:shadow-[0_0_40px_rgba(245,0,221,0.6)]
                    transition-all
                  "
                >
                  <FiCode /> <span>View Experience</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="btn-premium-outline"
                >
                  <FiSend /> <span>Contact</span>
                </motion.a>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="
                    text-gray-700 dark:text-[#7c3aed]
                    hover:drop-shadow-[0_0_10px_#7c3aed]
                    transition-all
                  "
                  href={CONTACT.linkedin}
                  target="_blank"
                >
                  <FiLinkedin size={28} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="
                    text-gray-700 dark:text-[#7c3aed]
                    hover:drop-shadow-[0_0_10px_#7c3aed]
                    transition-all
                  "
                  href={CONTACT.github}
                  target="_blank"
                >
                  <FiGithub size={28} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="
                    text-gray-700 dark:text-[#7c3aed]
                    hover:drop-shadow-[0_0_10px_#7c3aed]
                    transition-all
                  "
                  href={`mailto:${CONTACT.email}`}
                >
                  <FiMail size={28} />
                </motion.a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.12}>
            <div className="flex justify-center">
              <motion.div className="hero-photo-wrapper">
                <Image
                  src="/profile.jpg"
                  alt="Pritish Kumar Panda"
                  width={230}
                  height={310}
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
