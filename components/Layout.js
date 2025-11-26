import Navbar from "./sections/Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { useTheme } from "../context/ThemeContext";

export default function Layout({ children }) {
  useTheme(); // ensures dark mode class applies on body/html

  return (
    <div className="relative min-h-screen flex flex-col text-gray-900 dark:text-gray-100 transition-colors">

      {/* Aurora Background */}
      <div className="aurora-bg fixed inset-0 -z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}
