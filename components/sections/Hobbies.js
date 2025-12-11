import Reveal from "../../components/Reveal";

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="container mx-auto px-6 lg:px-20 py-16"
    >
      <Reveal>
        <h2 className="section-title hero-name-gradient text-3xl font-bold mb-6">
          Hobbies
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-glass p-6 rounded-2xl shadow-lg space-y-4">

          <p className="text-lg leading-relaxed dark:text-gray-200 text-gray-700">
            Outside of work, I stay active and enjoy a variety of sports and interests:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-lg space-y-2">
            <li>Watching cricket</li>
            <li>Playing sports — Cricket, Table Tennis, Badminton, Volleyball</li>
          </ul>

        </div>
      </Reveal>
    </section>
  );
}
