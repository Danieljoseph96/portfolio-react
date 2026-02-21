import React, { useState } from "react";
import "./HowTo.css";

export default function HowTo() {
  const [darkMode, setDarkMode] = useState(true);
  const [openTier, setOpenTier] = useState(null);
  const [openCode, setOpenCode] = useState({}); // Track which topic code is open

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleTier = (tier) => setOpenTier(openTier === tier ? null : tier);
  const toggleCode = (tierId, topicIndex) => {
    setOpenCode((prev) => ({
      ...prev,
      [`${tierId}-${topicIndex}`]: !prev[`${tierId}-${topicIndex}`],
    }));
  };

  const tiers = [
    {
      id: 1,
      title: "TIER 1: FOUNDATION - The Absolute Essentials",
      description: "(Prerequisites for almost everything else)",
      topics: [
        {
          title: "Server-side Vulnerabilities",
          points: [
            "Broad overview of OS command injection, XXE, etc.",
            "Teaches injection & file system access",
            "Prerequisite for everything else",
          ],
          code: "console.log('Command Injection Example');",
        },
        {
          title: "SQL Injection",
          points: [
            "Classic injection vulnerability",
            "UNION attacks & DB interaction",
            "Prerequisite for NoSQL & API testing",
          ],
          code: "SELECT * FROM users WHERE id = '1' OR '1'='1';",
        },
        {
          title: "Path Traversal & File Upload",
          points: ["Directory traversal", "File validation bypass"],
          code: "",
        },
        {
          title: "Authentication Vulnerabilities",
          points: ["Logic flaws & enumeration", "Session & cookie understanding"],
          code: "",
        },
      ],
    },
    {
      id: 2,
      title: "TIER 2: CORE WEB SECURITY - Client-Server Dynamics",
      description: "(Builds on Tier 1, introduces client-side concepts)",
      topics: [
        { title: "CSRF", points: ["Token bypass", "Origin concepts"], code: "" },
        { title: "Clickjacking", points: ["UI redressing", "Frame busting"], code: "" },
        { title: "CORS", points: ["Policy misconfiguration", "Advanced bypass"], code: "" },
      ],
    },
    {
      id: 3,
      title: "TIER 3: MODERN WEB ARCHITECTURE",
      topics: [
        { title: "Web Cache Deception & Poisoning", code: "" },
        { title: "API Testing", code: "" },
        { title: "SSRF", code: "" },
      ],
    },
    {
      id: 4,
      title: "TIER 4: ADVANCED & PROTOCOL-SPECIFIC",
      topics: [
        { title: "NoSQL Injection", code: "" },
        { title: "WebSockets Vulnerabilities", code: "" },
      ],
    },
    {
      id: 5,
      title: "TIER 5: COMPLEX LOGIC & JAVASCRIPT ECOSYSTEM",
      topics: [
        { title: "Race Conditions", code: "" },
        { title: "Prototype Pollution", code: "" },
        { title: "GraphQL API Vulnerabilities", code: "" },
      ],
    },
    {
      id: 6,
      title: "TIER 6: EMERGING & SPECIALIZED",
      topics: [{ title: "Web LLM Attacks", code: "" }],
    },
  ];

  return (
    <section id="Blog"  className={`Blog section ${darkMode ? "dark" : "light"}`}>
      {/* Theme Toggle */}
      <div className="top-controls">
        <button onClick={toggleTheme}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Tiers */}
      {tiers.map((tier) => (
        <div key={tier.id}>
          <h2 onClick={() => toggleTier(tier.id)}>{tier.title}</h2>
          {tier.description && <p className="tier-desc">{tier.description}</p>}

          {openTier === tier.id &&
            tier.topics.map((topic, index) => (
              <ul key={index} className="topic-list">
                <li>
                  <strong>{topic.title}</strong>
                  {topic.points && (
                    <ul>
                      {topic.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {/* Code Section */}
                  {topic.code && topic.code.trim() !== "" && (
                    <div className="code-section">
                      <button
                        className="toggle-code-btn"
                        onClick={() => toggleCode(tier.id, index)}
                      >
                        {openCode[`${tier.id}-${index}`] ? "Hide Code" : "View Code"}
                      </button>
                      {openCode[`${tier.id}-${index}`] && (
                        <pre>
                          <code>{topic.code}</code>
                        </pre>
                      )}
                    </div>
                  )}
                </li>
              </ul>
            ))}
        </div>
      ))}
    </section>
  );
}