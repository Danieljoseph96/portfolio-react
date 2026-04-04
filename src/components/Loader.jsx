// Loader.jsx
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="scan-grid" />
      <div className="scan-line" />
      <div className="loader-terminal">
        <p>[BOOT] Initializing secure shell...</p>
        <p>[SCAN] Enumerating target services...</p>
        <p>[AUTH] Verifying identity token...</p>
        <p className="done">[OK] Portfolio loaded</p>
      </div>
      <div className="loader-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
