import { motion } from "framer-motion";
import "./Home.css";
import cehBadge from "../assets/CEH_2E345519D3F7.png";


const badges = [
  "🛡️ Web Security",
  "🐧 Linux",
  "🔐 Networking",
  "⚙️ CTF Beginner",
  "🧠 Blue Team",
  "💻 Bash"
];

export default function Home() {
  return (
    <section className="hero">
      {/* Intro */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m Daniel Joseph M L 👨‍💻
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        TryHackMe Student • Technical Assistant • Cybersecurity Enthusiast
      </motion.p>

      {/* Skill Badges */}
      <motion.div
        className="badges"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {badges.map((b, i) => (
          <span key={i} className="badge">
            {b}
          </span>
        ))}
      </motion.div>

      {/* TryHackMe Badge */}
      <motion.div
        className="iframe-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <iframe
          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1774383"
          title="TryHackMe Profile"
          loading="lazy"
        />
      </motion.div>

      {/* CEH Badge */}
      <motion.div
        className="ceh-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      >
        <img src={cehBadge} alt="CEH Certification" />
        <span>CEH (In Progress)</span>
      </motion.div>
    </section>
  );
}
