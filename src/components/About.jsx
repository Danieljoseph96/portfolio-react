// About.jsx
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaPhone
} from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I am a passionate React Developer focused on building modern,
        responsive, and scalable web applications.
      </motion.p>

      <motion.div
        className="about-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a href="#contact" className="contact-btn">
          Get in Touch
        </a>

        <div className="social-icons">
          <a href="tel:+919876543210" title="Call me">
            <FaPhone />
          </a>
          <a href="mailto:mldaniel020@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/daniel-joseph-ml/" target="_blank" title="LinkedIn" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Danieljoseph96" target="_blank" title="GitHub" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/danieljosephml/" target="_blank" title="Instagram" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
