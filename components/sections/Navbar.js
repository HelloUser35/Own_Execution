import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING PREMIUM NAV */}
<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[80%]">
        <div
          className="
            flex items-center justify-between px-6 py-3
            rounded-2xl backdrop-blur-xl
            bg-white/10 dark:bg-black/10
            border border-white/20 dark:border-white/10
            shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
          {/* Logo */}
          <Link href="/" className="nav-brand text-2xl font-bold tracking-wide">
            Hi, It's Me Pritish
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href="#hero" className="nav-premium">Home</Link>
            <Link href="#summary" className="nav-premium">Summary</Link>
            <Link href="#skills" className="nav-premium">Skills</Link>
            <Link href="#experience" className="nav-premium">Experience</Link>
            <Link href="#projects" className="nav-premium">Projects</Link>
            <Link href="#contact" className="nav-premium">Contact</Link>

            <a
            href="/cv/Pritish_CV.docx"
            download
            className="
              px-4 py-2 rounded-lg font-semibold text-white
              bg-gradient-to-r from-[#a855f7] to-[#ec4899]
              shadow-md hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            Download CV
          </a>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="
                relative group w-11 h-11 flex items-center justify-center
                rounded-full transition-all duration-500
                backdrop-blur-2xl select-none

                /* Light */
                border border-gray-800 text-gray-800 bg-white/10
                hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]

                /* Dark */
                dark:border-[#f500dd] dark:text-[#f500dd] dark:bg-[#f500dd]/10
                dark:hover:shadow-[0_0_32px_#f500dd]
                
                /* Press effect */
                active:scale-90
              "
            >
              {/* Magnetic hover scale */}
              <span
                className="
                  absolute inset-0 rounded-full scale-100
                  group-hover:scale-110
                  transition-all duration-500
                "
              ></span>

              {/* Rotating Neon Ring */}
              <span
                className="
                  absolute inset-0 rounded-full pointer-events-none
                  border-2 border-transparent
                  group-hover:border-[#f500dd]
                  dark:group-hover:border-[#f500dd]
                  opacity-0 group-hover:opacity-100
                  transition-all duration-[1600ms] ease-linear
                  animate-spin-slow
                "
              ></span>

              {/* Glass Shimmer */}
              <span
                className="
                  absolute inset-0 rounded-full overflow-hidden pointer-events-none
                "
              >
                <span
                  className="
                    absolute top-0 left-0 w-full h-full
                    bg-gradient-to-br from-white/0 via-white/20 to-white/0
                    translate-x-[-150%] group-hover:translate-x-[150%]
                    transition-transform duration-[1200ms] ease-out
                  "
                />
              </span>

              {/* Icon (sun/moon) with morph & rotation */}
              <span
                className="
                  z-10 transition-all duration-700 ease-out
                  group-hover:rotate-[360deg]
                "
              >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6 text-[#f500dd] drop-shadow-[0_0_6px_#f500dd]" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-900" />
              )}
              </span>
            </button>


            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20"
            >
              <span className="block w-5 h-[2px] bg-current mb-1"></span>
              <span className="block w-5 h-[2px] bg-current mb-1"></span>
              <span className="block w-5 h-[2px] bg-current"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            fixed top-20 left-1/2 -translate-x-1/2 w-[92%]
            rounded-xl backdrop-blur-xl
            bg-white/10 dark:bg-black/20
            border border-white/10 shadow-xl
            p-5 space-y-4 animate-slideDown z-40
          "
        >
          <Link href="#hero" className="menu-link" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#summary" className="menu-link" onClick={() => setOpen(false)}>Summary</Link>
          <Link href="#skills" className="menu-link" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="#experience" className="menu-link" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="#projects" className="menu-link" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#contact" className="menu-link" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}
