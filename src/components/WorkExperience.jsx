import { motion } from "framer-motion";
import "./WorkExperience.css";

export default function WorkExperience() {
  return (
    <section id="experience" className="experience section">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <motion.div
        className="exp-timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {/* Freelancer */}
        <ExperienceCard
          title="Freelancer"
          date="2025-02 – Present"
          company="Computer Services & Web Development"
          items={[
            "🔐 Computer Services",
            "🧠 Web Development & Cybersecurity (hosting)"
          ]}
          tech="Hardware Repair, Network Setup, Technical Support"
        />

        {/* Technical Assistant */}
        <ExperienceCard
          title="Technical Assistant"
          date="2022-10 – 2025-02"
          company="Election Commission of India (SLA – C-DIT)"
          items={[
            "🛡️ Managed system security & networking",
            "👥 Supervised technical support teams",
            "🗂️ Portal management & backend support",
            "💻 Maintained Windows & Linux systems",
            "📊 Collaborated with Data Analytics team"
          ]}
          tech="Windows, Linux, Networking, System Security"
        />

        {/* Computer Technician */}
        <ExperienceCard
          title="Computer Technician"
          date="2019-05 – 2021-06"
          company="Computer Services"
          items={[
            "🖥️ Diagnosed & repaired computers and printers",
            "🔧 Assembled systems and configured networks",
            "🤝 Delivered technical support to clients"
          ]}
          tech="Hardware Repair, Network Setup, Technical Support"
        />
      </motion.div>
    </section>
  );
}

/* Reusable card component */
function ExperienceCard({ title, date, company, items, tech }) {
  return (
    <motion.div
      className="exp-card"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="exp-front">
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{company}</p>
      </div>

      <div className="exp-hover">
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="tech">Technologies: {tech}</p>
      </div>
    </motion.div>
  );
}
