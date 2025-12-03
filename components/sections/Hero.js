import { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiSend, FiCode } from "react-icons/fi";
import { CONTACT } from "./data"; // put your data.js next to sections

function TypewriterText({ text: fullText }) {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const speed = 18;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [fullText]);

return (
  <p className="hero-description text-lg leading-relaxed max-w-9xl">
      <span className="neon-typewriter inline-block">{text}</span>
      {!done && <span className="cursor ml-1 dark:bg-[#7c3aed]" />}
  </p>
);
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#ec4899]/60 dark:bg-[#ec4899]/40 sparkle-sine-dot"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            "--i": i,
          }}
        />

        ))}
      </div>

      <div className="hero-aurora" aria-hidden />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-[4fr,2fr] gap-10 items-center">
          <Reveal>
            <div className="hero-content space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight animate-float">
                <span className="hero-name-gradient">Pritish Panda</span>
              </h1>

              <TypewriterText text="QA Automation Architect with 11+ years of expertise in scalable automation frameworks, CI/CD, Linux, big data validation, and hardware-level QA engineering." />

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-700 dark:text-[#7c3aed]">
                <div className="flex items-center gap-2">📞 <span className="dark:text-[#7c3aed]">{CONTACT.phone}</span></div>
                <div className="flex items-center gap-2">✉️ <span className="dark:text-[#7c3aed]">{CONTACT.email}</span></div>
                <div className="flex items-center gap-2">📍 <span className="dark:text-[#7c3aed]">{CONTACT.location}</span></div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <motion.a href="#experience" whileHover={{ scale: 1.06 }} className="btn-premium">
                  <FiCode /> <span>View Experience</span>
                </motion.a>
                <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="btn-premium-outline">
                  <FiSend /> <span>Contact</span>
                </motion.a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a className="social-premium text-gray-800 dark:text-[#7c3aed] hover:scale-110 transition" href={CONTACT.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /></a>
                <a className="social-premium text-gray-800 dark:text-[#7c3aed] hover:scale-110 transition" href={CONTACT.github} target="_blank" rel="noreferrer"><FiGithub /></a>
                <a className="social-premium text-gray-800 dark:text-[#7c3aed] hover:scale-110 transition" href={`mailto:${CONTACT.email}`}><FiMail /></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex justify-center">
              <motion.div className="hero-photo-wrapper" whileHover={{ scale: 1.03 }}>
                <Image src="/profile.jpg" alt="Pritish Kumar Panda" width={200} height={260} className="hero-photo" priority />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
