import { motion } from "framer-motion";
import "./Home.css";
import cehBadge from "../assets/CEH_2E345519D3F7.png";

/* Data */
const badges = [
  "🛡️ Web Security",
  "🐧 Linux",
  "🔐 Networking",
  "⚙️ CTF Beginner",
  "🧠 Blue Team",
  "💻 Bash"
];

/* Animations */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 14 }
  }
};

export default function Home() {
  return (
    <section className="hero">
      {/* Floating background glow */}
      <div className="hero-glow" />

      {/* Intro */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
      >
        Hi, I’m <span>Daniel Joseph M L</span> 👨‍💻
      </motion.h1>

      {/* Animated underline */}
      <motion.div
        className="underline"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        TryHackMe Student • Technical Assistant • Cybersecurity Enthusiast
      </motion.p>

      {/* Skill badges */}
      <motion.div
        className="badges"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {badges.map((b, i) => (
          <motion.span
            key={i}
            className="badge"
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {b}
          </motion.span>
        ))}
      </motion.div>

      {/* TryHackMe badge */}
      <motion.div
        className="iframe-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 25px 55px rgba(0,0,0,0.45)"
        }}
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
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -6, 0]
        }}
        transition={{
          delay: 0.9,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={cehBadge} alt="CEH Certification" />
        <span>CEH (In Progress)</span>
      </motion.div>
    </section>
  );
}
