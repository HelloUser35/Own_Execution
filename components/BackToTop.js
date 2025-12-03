import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`backtotop-btn ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-hidden={!visible}
      title="Back to top"
    >
      ↑
    </button>
  );
}
