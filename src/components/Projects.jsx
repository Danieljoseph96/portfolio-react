import { useState, useEffect, useCallback } from "react";
import "./Projects.css";

import pro9_1 from "../assets/pro_0_1.png";
import pro9_2 from "../assets/pro_0_2.png";
import pro2_1 from "../assets/pro_2_0.jpg";
import pro2_2 from "../assets/pro_2_1.jpg";
import pro5_0 from "../assets/pro_5_0.png";
import pro8_1 from "../assets/pro_8_0.png";
import pro8_2 from "../assets/pro_8_1.png";
import pro8_3 from "../assets/pro_8_2.png";
import pro8_4 from "../assets/pro_8_3.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React, CSS",
      description: "A modern portfolio website with dark/light mode",
      images: [pro5_0],
      github: "https://github.com/Danieljoseph96/portfolio-react.git",
      live: "https://danieljoseph.in/",
    },
    {
      title: "Recipe of Django Login",
      tech: "Django, DRF, JWT, AJAX",
      description: "Secure authentication system with JWT tokens",
      images: [pro9_1, pro9_2],
      github: "https://github.com/Danieljoseph96/Ctf_GAME.git",

    },
    {
      title: "BLA_APP",
      tech: "Django, AJAX, HTML, CSS",
      description: "Full-stack web application with dynamic features",
      images: [pro2_1, pro2_2],
      github: "https://github.com/yourusername/bla-app",
    },
    {
      title: "REACT TMDB",
      tech: "React, TMDB API",
      description: "Movie database app using TMDB API",
      images: [pro8_1, pro8_2, pro8_3, pro8_4],
      github: "https://github.com/Danieljoseph96/tmdb.git",
  
    },
  ];

  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [filter, setFilter] = useState("all");

  // Get unique tech stacks for filter
  const techStacks = ["all", ...new Set(projects.map(p => p.tech))];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.tech === filter);

  return (
    <section id="projects" className="projects section">
      <div className="projects-header">
        <h2>My Projects</h2>
        
        <div className="projects-controls">
          {/* Tech Filter */}
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            {techStacks.map(tech => (
              <option key={tech} value={tech}>
                {tech === "all" ? "All Technologies" : tech}
              </option>
            ))}
          </select>

          {/* View Toggle */}
          <div className="view-toggle">
            <button 
              className={viewMode === "grid" ? "active" : ""}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              ⊞ Grid
            </button>
            <button 
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              ≡ List
            </button>
          </div>
        </div>
      </div>

      <div className={`projects-${viewMode}`}>
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            viewMode={viewMode}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="no-projects">No projects found for this filter.</p>
      )}
    </section>
  );
}

/* Enhanced Card Component */
function ProjectCard({ project, viewMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide only when multiple images exist and card is not hovered
  useEffect(() => {
    if (project.images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length, isHovered]);

  // Manual navigation
  const nextImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [project.images.length]);

  return (
    <div 
      className={`project-card ${viewMode}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        {project.images.length > 1 && (
          <>
            <button 
              className="nav-btn prev" 
              onClick={prevImage}
              aria-label="Previous image"
            >‹</button>
            <button 
              className="nav-btn next" 
              onClick={nextImage}
              aria-label="Next image"
            >›</button>
          </>
        )}
        
        <div className="project-image">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} - screenshot ${i + 1}`}
              className={i === currentIndex ? "active" : ""}
              loading="lazy"
            />
          ))}
        </div>

        {/* Image indicators */}
        {project.images.length > 1 && (
          <div className="image-indicators">
            {project.images.map((_, i) => (
              <button
                key={i}
                className={`indicator ${i === currentIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-tech">{project.tech}</p>
        {viewMode === "list" && (
          <p className="project-description">{project.description}</p>
        )}
        
        <div className="project-links">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}