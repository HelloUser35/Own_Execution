import Reveal from "../../components/Reveal";

export default function Summary() {
  return (
    <section id="summary" className="container mx-auto px-6 lg:px-20 py-16">
      <div className="prof-summary-panel relative">
        <div className="prof-summary-glow" aria-hidden></div>

        <Reveal>
          <h2 className="prof-summary-title">Professional Summary</h2>
          <p className="prof-summary-text mt-4 max-w-3xl">
            Senior QA Automation Architect with 11+ years designing scalable, enterprise-grade automation
            frameworks across UI, API, OS and hardware testing. Experienced in CI/CD pipelines, Linux systems,
            Big Data validation and leading delivery-focused QA teams. I create reliable automation solutions
            that integrate with engineering workflows and ship quality faster.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
