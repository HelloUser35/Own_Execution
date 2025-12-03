import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col text-gray-900 dark:text-gray-100 transition-colors">
      <div className="aurora-bg fixed inset-0 -z-10" />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <BackToTop />
      <Footer />
    </div>
  );
}
