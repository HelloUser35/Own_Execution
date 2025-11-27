import Reveal from "../../components/Reveal";

export default function Summary() {
  return (
    <section id="summary" className="container mx-auto px-6 lg:px-20 py-20 relative">

      <div className="summary-wrapper relative flex gap-6">
        
        {/* Neon Accent Sidebar */}
        <div className="summary-accent"></div>

        {/* Content */}
        <div className="flex-1">
          <Reveal>
            <h2 className="summary-title">Professional Summary</h2>

            <p className="summary-text mt-4 max-w-3xl">
              Senior QA Automation Architect with 11+ years designing scalable, enterprise-grade
              automation frameworks across UI, API, OS and hardware testing. Skilled in CI/CD pipelines,
              Linux systems, Big Data validation and leading high-performance QA teams. I build durable
              automation solutions that accelerate releases and improve engineering quality.
            </p>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
