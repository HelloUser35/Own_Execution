import Reveal from "../../components/Reveal";
import { CONTACT } from "./data";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 lg:px-20 py-16">
      <Reveal>
        <h2 className="section-title hero-name-gradient text-3xl font-bold mb-6">
          Contact
        </h2>
      </Reveal>

      <div className="contact-card max-w-xl">
        <Reveal>
          <p className="mb-3 text-lg">
            📧 <strong>{CONTACT.email}</strong>
          </p>
        </Reveal>

        <Reveal>
          <p className="mb-3 text-lg">
            📞 {CONTACT.phone}
          </p>
        </Reveal>

        <Reveal>
          <p className="mb-3 text-lg">
            📍 {CONTACT.location}
          </p>
        </Reveal>

        <Reveal>
          <a
            href={`mailto:${CONTACT.email}`}
            className="btn-gradient mt-4 inline-block"
          >
            Email Me
          </a>
        </Reveal>
      </div>
    </section>
  );
}
