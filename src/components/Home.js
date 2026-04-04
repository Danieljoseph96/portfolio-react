import { useEffect, useMemo, useState } from "react";
import WorldMap from "react-svg-worldmap";
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
const roles = [
  { icon: "🛡️", label: "Computer Security Enthusiast" },
  { icon: "🎯", label: "TryHackMe Student" },
  { icon: "🧰", label: "Technical Assistant at TryHackMe" },
  { icon: "🕵️", label: "Investigation-Driven Security Learner" },
  { icon: "🔐", label: "Web Security Learner" },
  { icon: "🌐", label: "Web Developer" },
  { icon: "🐍", label: "Python Programmer" },
];

export default function Home() {
  const leftTicker = useMemo(() => [...roles].sort(() => Math.random() - 0.5), []);
  const rightTicker = useMemo(() => [...badges].sort(() => Math.random() - 0.5), []);
  const [centerIndex, setCenterIndex] = useState(0);
  const mapData = useMemo(
    () => [
      { country: "in", value: 100 },
      { country: "us", value: 62 },
      { country: "gb", value: 45 },
      { country: "de", value: 37 },
      { country: "sg", value: 55 },
      { country: "au", value: 34 },
      { country: "jp", value: 48 },
    ],
    []
  );

  useEffect(() => {
    const centerTimer = window.setInterval(() => {
      setCenterIndex((prev) => (centerItems.length ? (prev + 1) % centerItems.length : 0));
    }, 1900);
    return () => {
      window.clearInterval(centerTimer);
    };
  }, []);

  const centerItems = useMemo(() => {
    const roleItems = leftTicker.map((role) => `${role.icon} ${role.label}`);
    const badgeItems = rightTicker.map((badge) => badge);
    return [...roleItems, ...badgeItems].slice(0, 30);
  }, [leftTicker, rightTicker]);

  const nonIndiaOpacity = 0.02;

  return (
    <section id="home" className="hero">
      <div className="hero-canvas" aria-hidden="true">
        <div className="map-viewport">
          <div className="map-image">
            <WorldMap
              color="#38bdf8"
              backgroundColor="transparent"
              valueSuffix="focus"
              size="responsive"
              data={mapData}
              styleFunction={(context) => {
                const isIndia = context.countryCode === "IN";
                return {
                  fill: isIndia ? "#16def9" : "#38bdf8",
                  fillOpacity: isIndia ? 1 : nonIndiaOpacity,
                  stroke: isIndia ? "#fdba74" : "#0f172a",
                  strokeWidth: isIndia ? 1.7 : 0.6,
                  transition: "all 0.25s ease",
                };
              }}
            />
          </div>

          <div className="center-scroller" aria-hidden="true">
            <span key={`center-${centerIndex}`} className="center-chip">
              {centerItems[centerIndex]}
            </span>
          </div>

          <div className="canvas-fx" aria-hidden="true">
            <div className="fx-ring" />
            <div className="fx-ring fx-ring-delay" />
            <div className="fx-scanline" />
          </div>

          <div className="ceh-box" aria-hidden="true">
            <img src={cehBadge} alt="CEH Certification" />
            <span>CEH completed • Practical in progress</span>
          </div>

        
        </div>
      </div>
      {/* Floating background glow */}
      <div className="hero-glow" />

      {/* Intro */}
      <h1>
        Hi, I’m <span>Daniel Joseph M L</span> 👨‍💻
      </h1>

      {/* Animated underline */}
      <div className="underline" />

     
   
    </section>
  );
}
