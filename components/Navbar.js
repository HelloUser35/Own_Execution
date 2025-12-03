import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[80%]">
        <div
          className="
            flex items-center justify-between px-6 py-3
            rounded-2xl backdrop-blur-xl
            bg-white/10 dark:bg-black/10
            border border-white/20 dark:border-white/10
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          "
        >
          <Link href="#hero" className="nav-brand text-2xl font-bold tracking-wide text-gray-900 dark:text-[#7c3aed]">
            Hi, It's Me Pritish
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <Link href="#hero" className="nav-premium">Home</Link>
            <Link href="#summary" className="nav-premium">Summary</Link>
            <Link href="#skills" className="nav-premium">Skills</Link>
            <Link href="#experience" className="nav-premium">Experience</Link>
            <Link href="#projects" className="nav-premium">Projects</Link>
            <Link href="#contact" className="nav-premium">Contact</Link>

            <a
              href="/cv/Pritish_CV.docx"
              download
              className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#ec4899] shadow-md hover:shadow-xl transition-all"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/10 dark:bg-transparent"
              aria-label="toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5 text-[#f500dd]" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-900" />
              )}
            </button>

            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden p-2 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20"
            >
              <span className="block w-5 h-[2px] bg-current mb-1" />
              <span className="block w-5 h-[2px] bg-current mb-1" />
              <span className="block w-5 h-[2px] bg-current" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] rounded-xl backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/10 shadow-xl p-5 space-y-3 z-40">
          <Link href="#hero" className="menu-link" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#summary" className="menu-link" onClick={() => setOpen(false)}>Summary</Link>
          <Link href="#skills" className="menu-link" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="#experience" className="menu-link" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="#projects" className="menu-link" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#contact" className="menu-link" onClick={() => setOpen(false)}>Contact</Link>
          <a href="/cv/Pritish_CV.docx" download className="block px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white text-center">Download CV</a>
        </div>
      )}
    </>
  );
}
