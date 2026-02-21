import React, { useState } from "react";
import "./Blog1.css";

export default function Blog1() {
  const [selectedCard, setSelectedCard] = useState(null);

  const closeModal = () => setSelectedCard(null);

  return (
    <div className="blog-container">
      <h2>WRITEUP</h2>

      <div className="grid-container">
        <div className="card" onClick={() => setSelectedCard("thm")}>
          <h3>TryHackMe</h3>
          <p> Ranking</p>
        </div>

        <div className="card" onClick={() => setSelectedCard("ceh")}>
          <h3>CEH Certified</h3>
          <p> Hacker</p>
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedCard === "thm" && (
              <>
                <h3>TryHackMe Achievement</h3>
                <p>Ranked</p>
             
              </>
            )}

            {selectedCard === "ceh" && (
              <>
                <h3>Certified Ethical Hacker (CEH)</h3>
                <p>Certified</p>
                
              </>
            )}

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}