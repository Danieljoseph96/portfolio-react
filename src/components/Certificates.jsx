import "./Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="certificates section">
      <h2>Certificates</h2>

      <div className="cert-grid">
        {/* Advent of Cyber 2025 */}
        <div className="cert-card">
          <h3>Advent of Cyber 2025</h3>
          <span className="issuer">TryHackMe</span>
          <span className="date">Issued: December 31, 2025</span>
          <p className="cert-id">Certificate ID: aoc-2025-kra8blxfpajw0vn6</p>
        </div>

        {/* Web Fundamentals */}
        <div className="cert-card">
          <h3>Web Fundamentals</h3>
          <p className="subtitle">A pathway to web application security</p>
          <span className="date">Issued: August 4, 2025</span>
          <ul>
            <li>Understand web fundamentals</li>
            <li>Major vulnerabilities explained</li>
            <li>Industry-used security tools</li>
            <li>Web application assessments</li>
          </ul>
        </div>

        {/* Jr Penetration Tester */}
        <div className="cert-card">
          <h3>Junior Penetration Tester</h3>
          <span className="date">Issued: July 11, 2025</span>
          <ul>
            <li>Pentesting methodologies & tactics</li>
            <li>Enumeration, exploitation & reporting</li>
            <li>Hands-on realistic hacking labs</li>
            <li>Industry-standard security tools</li>
          </ul>
        </div>

        {/* Cyber Security 101 */}
        <div className="cert-card">
          <h3>Cyber Security 101</h3>
          <span className="date">Issued: April 28, 2025</span>
          <ul>
            <li>Computer networking & cryptography</li>
            <li>Linux, Windows & Active Directory basics</li>
            <li>Offensive cyber security foundations</li>
            <li>Defensive security techniques</li>
          </ul>
        </div>

        {/* Pre Security */}
        <div className="cert-card">
          <h3>Pre Security</h3>
          <p className="subtitle">Foundations before hacking</p>
          <ul>
            <li>Cyber security fundamentals</li>
            <li>Networking basics & weaknesses</li>
            <li>The web & common attacks</li>
            <li>Linux operating system basics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
