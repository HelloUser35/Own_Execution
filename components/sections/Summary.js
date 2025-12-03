import Reveal from "../../components/Reveal";

export default function Summary() {
  return (
    <section id="summary" className="container mx-auto px-6 lg:px-20 py-16">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="prof-summary-panel relative p-8">
            <div className="prof-summary-glow" aria-hidden></div>
            <Reveal>
              <h2 className="prof-summary-title">Professional Summary</h2>
              <p className="prof-summary-text mt-4 max-w-3xl text-gray-800 dark:text-gray-200">
                Senior QA Automation Architect with 11+ years designing scalable, enterprise-grade automation
                frameworks across UI, API, OS and hardware testing. Experienced in CI/CD pipelines, Linux systems,
                Big Data validation and leading delivery-focused QA teams. I create reliable automation solutions
                that integrate with engineering workflows and ship quality faster.
              </p>
            </Reveal>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-glass p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">B.Tech / Computer Science — Institute Name (Year)</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Certifications: (e.g., ISTQB, AWS Foundational)</p>
          </div>

          <div className="bg-glass p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Email: pritishpanda@yahoo.com</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Location: Bangalore, India</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
