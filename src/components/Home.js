import { useMemo } from "react";
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

  const roleIndex = 0;
  const badgeIndex = 0;

  const nonIndiaOpacity = 0.08;

  return (
    <section id="home" className="hero">
      <div className="hero-canvas" aria-hidden="true">
        <div className="map-viewport">
          <div className="canvas-scroller left" aria-hidden="true">
            <div className="canvas-track single">
              <span key={`role-${roleIndex}`} className="canvas-chip role-chip">
                <span className="role-icon">{leftTicker[roleIndex]?.icon}</span>
                <span>{leftTicker[roleIndex]?.label}</span>
              </span>
            </div>
          </div>

          <div className="map-image">
            <WorldMap
              color="#22c55e"
              backgroundColor="transparent"
              valueSuffix="focus"
              size="responsive"
              data={mapData}
              styleFunction={(context) => {
                const isIndia = context.countryCode === "IN";
                return {
                  fill: isIndia ? "#18eaf1" : "#22c55e",
                  fillOpacity: isIndia ? 1 : nonIndiaOpacity,
                  stroke: isIndia ? "#0f5ceb" : "#0f172a",
                  strokeWidth: isIndia ? 1.7 : 0.6,
                  transition: "all 0.25s ease",
                };
              }}
            />
          </div>

          <div className="canvas-scroller right" aria-hidden="true">
            <div className="canvas-track single">
              <span key={`badge-${badgeIndex}`} className="canvas-chip badge-chip">{rightTicker[badgeIndex]}</span>
            </div>
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

     
   

      {/* CEH Badge */}
      <div className="ceh-box">
        <img src={cehBadge} alt="CEH Certification" />
        <span>CEH completed • Practical in progress</span>
      </div>
    </section>
  );
}
