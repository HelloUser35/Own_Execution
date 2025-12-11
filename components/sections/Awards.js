import Reveal from "../../components/Reveal";
import { FiAward } from "react-icons/fi";

export default function Awards() {
  return (
    <section
      id="awards"
      className="container mx-auto px-6 lg:px-20 py-16"
    >
      <Reveal>
        <h2 className="section-title hero-name-gradient text-3xl font-bold mb-8">
          Awards & Recognition
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Three times Top Talent Award",
          "Four times Spot Award",
          "Two WOW Team Excellence Awards",
          "One Team Spirit Award",
        ].map((award, i) => (
          <Reveal key={i}>
            <div className="award-card flex items-center gap-4 p-5 bg-glass rounded-xl">
              <div className="award-icon">
                <FiAward className="text-2xl text-pink-500 dark:text-purple-300" />
              </div>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {award}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
