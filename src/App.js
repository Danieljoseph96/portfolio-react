import {
  FaBriefcase,
  FaBrain,
  FaBug,
  FaCertificate,
  FaChurch,
  FaCloud,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaImage,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNetworkWired,
  FaPhone,
  FaPlayCircle,
  FaRocket,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaTools,
  FaUserShield,
} from "react-icons/fa";
import "./App.css";

const focusAreas = [
  {
    title: "AI Security",
    text: "LLM protection, adversarial testing, model lifecycle risk, and secure AI workflows.",
    Icon: FaBrain,
  },
  {
    title: "Application Security",
    text: "API security, OWASP testing, input validation, access control, and data leakage prevention.",
    Icon: FaUserShield,
  },
  {
    title: "Python Engineering",
    text: "Security automation, Django/Flask backends, scanners, pipelines, and practical tooling.",
    Icon: FaCode,
  },
  {
    title: "IoT + Cloud Defense",
    text: "Embedded systems hardening, cloud security monitoring, deployment safety, and incident response.",
    Icon: FaNetworkWired,
  },
];

const skillGroups = [
  {
    title: "AI / ML Security",
    items: [
      "Generative AI",
      "Stable Diffusion",
      "NLP",
      "TensorFlow",
      "Scikit-learn",
      "CUDA",
      "LLM Security",
      "Adversarial AI",
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      "Vulnerability Assessment",
      "API Security",
      "OWASP Top 10",
      "Data Leakage Prevention",
      "Access Control",
      "Incident Response",
      "System Hardening",
    ],
  },
  {
    title: "Development",
    items: [
      "Python",
      "JavaScript",
      "Django",
      "Flask",
      "React.js",
      "REST APIs",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
  },
  {
    title: "Tools",
    items: [
      "Splunk",
      "Microsoft Sentinel",
      "Burp Suite",
      "OWASP ZAP",
      "Nmap",
      "Metasploit",
      "Trivy",
      "AWS GuardDuty",
    ],
  },
];

const experience = [
  {
    role: "Freelance IT Support, Web Development & IoT Solutions",
    date: "Mar 2025 - Mar 2026",
    place: "Self-Employed",
    text: "Conducted cybersecurity assessments, hardening, monitoring, IoT device setup, and secure configuration for web applications, APIs, AI/ML-powered applications, connected devices, and hosting environments.",
  },
  {
    role: "Technical Assistant",
    date: "Oct 2022 - Feb 2025",
    place: "Election Commission of India, C-DIT",
    text: "Provided election-related web application support, managed portal and middleware-layer operations, maintained documentation, and helped ensure access control, system security, and SLA-based issue resolution.",
  },
  {
    role: "Computer Technician",
    date: "May 2019 - Jul 2021",
    place: "Ozone, Trivandrum",
    text: "Installed, configured, secured, and troubleshot computer systems, networks, applications, IoT devices, and AI-supported tools.",
  },
  {
    role: "Freelance IT Support",
    date: "Jun 2017 - Mar 2019",
    place: "Self-Employed",
    text: "Provided computer services, software installation, system configuration, networking, troubleshooting, and technical support for remote and on-site clients.",
  },
  {
    role: "Apprenticeship Trainee",
    date: "Dec 2014 - Dec 2015",
    place: "Kerala Livestock Development Board",
    text: "Supported website management, PHP-based website development, eTender operations, device servicing, hardware support, network setup, and call center duty while gaining foundational experience in secure system configuration.",
  },
];

const projects = [
  {
    title: "Church Meeting & Event Management Platform",
    stack:
      "Python, Django, Django REST Framework, React.js, JavaScript, SQL, REST API, Git, GitHub, Postman",
    text: "Full-stack centralized platform for managing church meetings, events, participant registration, accommodation, transportation, and administration workflows.",
    features: [
      "Meeting and event scheduling",
      "Accommodation and room capacity management",
      "Transportation routes and pickup/drop requirements",
      "Online registration and participant management",
      "Role-based access control",
      "Location APIs for country, state, city, and locality data",
      "Secure REST API architecture",
      "Responsive React frontend",
    ],
    Icon: FaChurch,
    featured: true,
  },
  {
    title: "Smart Egg Incubator",
    stack: "ESP32, Arduino, C++, DHT22, Relay Modules",
    text: "Secure IoT automation system with real-time monitoring, automated temperature and humidity control, remote access, safety logic, and input validation.",
    Icon: FaNetworkWired,
  },
  {
    title: "IoT Room Automation",
    stack: "ESP8266, Sensors, Relay Modules, Android Phone",
    text: "Room automation system for controlling connected appliances through relay modules, sensor-based monitoring, and Android phone connectivity over Wi-Fi.",
    Icon: FaNetworkWired,
  },
  {
    title: "Web Application Vulnerability Scanner",
    stack: "Python, Django, Nmap, SQLite",
    text: "Scanner for network and service discovery with encrypted scan storage, secure authentication, and role-based access.",
    Icon: FaBug,
  },
  {
    title: "Local AI Image Generation Pipeline",
    stack: "Python, Stable Diffusion, CUDA, img2img",
    text: "Offline GPU-accelerated image generation pipeline with a self-refine fallback for graceful dependency handling.",
    Icon: FaRobot,
  },
  {
    title: "AI / LLM Security Testing Toolkit",
    stack: "Python, OWASP LLM Top 10, Prompt Injection Testing",
    text: "Toolkit for testing LLM applications against prompt injection, jailbreak attempts, sensitive data leakage, and unsafe output handling.",
    Icon: FaShieldAlt,
  },
  {
    title: "DevSecOps CI/CD Security Pipeline",
    stack: "Docker, Kubernetes, Jenkins, OWASP ZAP, Trivy",
    text: "Containerized Django deployment with automated security gates, ZAP baseline scans, and Trivy image scanning.",
    Icon: FaServer,
  },
];

const achievements = [
  "TryHackMe - Ranked in the top 1% of learners globally",
  "Responsible disclosure of exposed RDP service and weak security configuration affecting a government domain",
  "9+ years total IT experience with 3+ years focused on cybersecurity, application security, AI/ML technologies, and Python development",
];

const education = [
  "Master of Computer Science, IGNOU University - 2025",
  "Bachelor of Computer Science, IGNOU University - 2024",
  "Diploma in Computer Software Engineering, AICTE - 2018",
  "Higher Secondary, State Board - 2014",
  "Secondary School, State Board - 2012",
];

export default function App() {
  return (
    <main className="portfolio-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="Daniel Joseph ML home">
          DJ
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#media">Media</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">
            <FaMapMarkerAlt /> Trivandrum, India
          </p>
          <h1>Daniel Joseph M L</h1>
          <p className="hero-subtitle">
            AI Security Engineer, ML Security Engineer, Application Security
            specialist, and Python Developer focused on secure AI/ML systems,
            LLM protection, and hybrid cybersecurity solutions.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#skills">
              <FaLaptopCode /> View Skills
            </a>
            <a className="secondary-btn" href="mailto:mldaniel020@gmail.com">
              <FaEnvelope /> Email Me
            </a>
          </div>
          <div className="hero-metrics" aria-label="Career highlights">
            <span>
              <strong>9+</strong>
              Years IT
            </span>
            <span>
              <strong>3+</strong>
              Security + AI/ML
            </span>
            <span>
              <strong>Top 1%</strong>
              TryHackMe
            </span>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Profile summary">
          <div className="cover-photo-slot" aria-label="Cover photo area">
            <FaImage />
            <span>Cover Photo Area</span>
          </div>
          <p className="profile-kicker">AI Security Portfolio</p>
          <div className="profile-icon">
            <FaShieldAlt />
          </div>
          <h2>Secure AI, web apps, APIs, and connected systems.</h2>
          <p>
            9+ years in IT with 3+ years focused on cybersecurity,
            application security, AI/ML tooling, Python development, IoT, and
            secure deployment.
          </p>
          <div className="profile-highlights">
            <span>
              <FaRocket /> LLM Security
            </span>
            <span>
              <FaCloud /> Cloud Monitoring
            </span>
            <span>
              <FaBug /> Vulnerability Assessment
            </span>
          </div>
          <div className="social-row">
            <a href="tel:+918078036982" aria-label="Phone">
              <FaPhone />
            </a>
            <a href="mailto:mldaniel020@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-joseph-ml/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Danieljoseph96"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/danieljosephml/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </aside>
      </section>

      <section id="media" className="section-block media-section">
        <div className="section-title">
          <FaPlayCircle />
          <h2>Intro Video</h2>
        </div>
        <div className="media-grid">
          <div className="video-placeholder">
            <div className="play-mark">
              <FaPlayCircle />
            </div>
            <p className="media-label">Video Position Marked</p>
            <h3>Personal Introduction Video</h3>
            <p>
              A dedicated space for a future video explaining profile,
              experience, skills, projects, and AI/security work.
            </p>
          </div>
          <div className="media-note">
            <h3>Cover Photo Ready</h3>
            <p>
              The hero profile panel now has a marked cover photo area for a
              future professional image or project banner.
            </p>
            <div className="media-tags">
              <span>Profile video</span>
              <span>Cover photo</span>
              <span>Portfolio intro</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block focus-section">
        <div className="section-title">
          <FaShieldAlt />
          <h2>Professional Focus</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map(({ title, text, Icon }) => (
            <article className="focus-card" key={title}>
              <div className="focus-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-block">
        <div className="section-title">
          <FaTools />
          <h2>Core Skills</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-block">
        <div className="section-title">
          <FaBriefcase />
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="simple-card" key={item.role}>
              <p className="date">{item.date}</p>
              <h3>{item.role}</h3>
              <p className="muted">{item.place}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-block">
        <div className="section-title">
          <FaCode />
          <h2>Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`simple-card project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}
            >
              <div className="project-icon">
                <project.Icon />
              </div>
              <h3>{project.title}</h3>
              <p className="stack">{project.stack}</p>
              <p>{project.text}</p>
              {project.features && (
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  Open Project
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="section-block compact">
          <div className="section-title">
            <FaCertificate />
            <h2>Achievements</h2>
          </div>
          <ul className="clean-list">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="section-block compact">
          <div className="section-title">
            <FaGraduationCap />
            <h2>Education</h2>
          </div>
          <ul className="clean-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p>Daniel Joseph M L</p>
        <a href="mailto:mldaniel020@gmail.com">mldaniel020@gmail.com</a>
      </footer>
    </main>
  );
}
