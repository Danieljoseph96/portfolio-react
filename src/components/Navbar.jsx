import { useEffect, useState } from "react";
import "./Navbar.css";
import {
  FaMoon,
  FaSun,
  FaPalette,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const getIcon = () => {
    if (theme === "light") return <FaMoon />;
    if (theme === "dark") return <FaSun />;
    return <FaPalette />;
  };

  /* Close menu on scroll */
  useEffect(() => {
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Detect active section */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "education", label: "Education" },
];


  return (
    <nav className={`navbar navbar-${theme}`}>
      <h2>Daniel Joseph ML</h2>

      {/* Hamburger (Mobile) */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(link => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}

        <li>
          <button className="theme-btn" onClick={toggleTheme}>
            {getIcon()}
          </button>
        </li>
      </ul>
    </nav>
  );
}
