// Projects.jsx
import "./Projects.css";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", tech: "React, CSS" },
    { title: "Student Management System", tech: "Django" },
    { title: "E-Commerce UI", tech: "React, API" }
  ];

  return (
    <section id="projects" className="projects section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
