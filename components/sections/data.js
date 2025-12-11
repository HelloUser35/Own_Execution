// shared data used by sections
export const CONTACT = {
  phone: "+91-7002200318 / +91-9859018024",
  email: "pritishpanda@yahoo.com",
  location: "HN65, Aagraham, EarlyBird Layout, Mullur Road, Kodathi, Bangalore, India, 560035",
  linkedin: "https://www.linkedin.com/in/pritish-panda-12328588",
  github: "https://github.com/HelloUser35/Own_Execution",
};

export const SKILLS = [
  {
    title: "Languages & Scripts",
    items: ["Java", "Python", "Groovy", "Shell", "HTML", "JSON", "XML", "REST API"]
  },
  {
    title: "Frameworks",
    items: ["Selenium", "Robot Framework", "BDD", "TestNG", "Next.js"]
  },
  {
    title: "IDEs",
    items: ["Eclipse", "PyCharm", "Spyder"]
  },
  {
    title: "Utilities & Libraries",
    items: ["Request Library", "Paramiko", "Pypsexec", "FTP"]
  },
  {
    title: "Testing Tools",
    items: ["JMeter", "SoapUI", "Postman", "WinSCP", "PuTTY"]
  },
  {
    title: "DevOps & CI/CD",
    items: ["Jenkins", "Git", "Gerrit", "Maven", "Log4J", "Apache POI"]
  },
  {
    title: "Big Data & Databases",
    items: ["Hadoop", "Hive", "Spark", "SQL", "MongoDB"]
  },
  {
    title: "Operating Systems",
    items: ["Windows", "RHEL (Linux)", "SLES (Linux)", "VMware"]
  },
  {
    title: "Manual Testing",
    items: ["SDLC/STLC", "Peer", "Sanity", "Smoke", "Regression", "Bug Lifecycle", "Cross-Browser"]
  },
  {
    title: "Agile Practices",
    items: ["Sprint Planning", "Story Points", "Stand-ups", "Scrum", "Retrospectives"]
  }
];



export const EXPERIENCE = [
  {
    company: "Hewlett Packard Enterprise",
    role: "Automation Architect & Technical Lead",
    period: "Aug 2022 – Present",
    projects: [
      {
        title: "OS Quality Validation Automation",
        tech: ["Python","Selenium","BDD","Jenkins","Jira","Git","VMware"],
        bullets: [
          "Designed enterprise BDD automation covering UI, API, OS.",
          "Built Zero-Touch CI/CD pipelines for regression execution.",
          "Integrated Linux + Windows automation workflows.",
          "Led automation team, architecture reviews and deliveries.",
        ],
      },
      {
        title: "Service Pack for ProLiant (SPP)",
        tech: ["Python","Selenium","BDD","Sikuli","Jenkins","VMware"],
        bullets: [
          "Added GUI/API/Sikuli automation modules.",
          "Increased regression coverage via reusable framework.",
          "Automated SPP release validation workflows.",
        ],
      },
    ],
  },
  {
    company: "Capgemini Engineering",
    role: "Technical Leader (Testing)",
    period: "Jul 2018 – May 2022",
    projects: [
      {
        title: "Inbound Roamer",
        tech: ["Robot Framework","Python","Postman","JMeter"],
        bullets: [
          "Maintained E2E Robot Framework automation suite.",
          "Performed REST API & performance validation.",
          "Led QA teams across SDLC phases.",
        ],
      },
      {
        title: "Assume Positive",
        tech: ["Robot Framework","Python","Gerrit","Postman"],
        bullets: [
          "Automated regression & integration flows.",
          "Improved automation adoption and code reviews.",
        ],
      },
    ],
  },
  {
    company: "Zaloni Technologies",
    role: "Senior Software Engineer",
    period: "Apr 2014 – Apr 2018",
    projects: [
      {
        title: "REST API & CI Automation",
        tech: ["Groovy","SoapUI","Jenkins","Maven","Git"],
        bullets: [
          "Developed REST API automation framework using Groovy.",
          "Built Jenkins scripted pipelines for CI.",
          "Automated environment deployments.",
        ],
      },
      {
        title: "Avro Integration with Bedrock",
        tech: ["Hadoop","Hive","Linux","AWS"],
        bullets: [
          "Validated ingestion & transformation flows.",
          "Performed API validation & reporting.",
        ],
      },
      {
        title: "GUI Automation of Bedrock",
        tech: ["Selenium","TestNG","Maven","LOG4J"],
        bullets: [
          "Built GUI automation regression suite.",
          "Mentored junior engineers on best practices.",
        ],
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "OS Quality Validation Automation",
    short: "Enterprise BDD framework integrating GUI, API, OS and CI/CD.",
    tech: ["Python","Selenium","BDD","Jenkins","VMware"],
  },
  {
    title: "REST API CI Automation Framework",
    short: "Groovy + SoapUI based framework with Jenkins pipelines for CI/CD.",
    tech: ["Groovy","SoapUI","Jenkins","Maven","Git"],
  },
];
