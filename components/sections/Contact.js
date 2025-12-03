import Reveal from "../../components/Reveal";
import { CONTACT } from "./data";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 lg:px-20 py-16">
      <Reveal><h2 className="section-title hero-name-gradient text-3xl font-bold mb-6">Contact</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          <form className="contact-card">
            <input placeholder="Name" className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600" />
            <input placeholder="Email" className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600" />
            <textarea placeholder="Message" className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600" rows="5"></textarea>
            <button className="btn-gradient mt-2">Send Message</button>
          </form>
        </Reveal>
        <Reveal>
          <div className="contact-card">
            <p>Email: <strong>{CONTACT.email}</strong></p>
            <p>Phone: {CONTACT.phone}</p>
            <p>Location: {CONTACT.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
