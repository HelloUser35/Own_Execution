export default function Contact() {
  return (
    <section id="contact" className="section-card">
      <h2 className="section-title">Contact Me</h2>

      <div className="space-y-4 text-gray-300">
        <p>Email: <a href="mailto:pritish@example.com" className="text-blue-400 hover:underline">pritish@example.com</a></p>
        <p>Phone: +91 98765 43210</p>

        <a
          href="mailto:pritish@example.com"
          className="btn-primary inline-block"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
