// Education.jsx
import "./Education.css";
import bcaImage from "../assets/BCA.jpg";
import mcaImage from "../assets/MCA.jpg";
import cptImage from "../assets/CPT.jpg";
import school1Image from "../assets/kuttichal.jpg";

export default function Education() {
  return (
    <section id="education" className="education section">
      <h2>Education & Qualification</h2>

      <div className="edu-timeline">
         {/* Master Degree 1 */}
        <div className="edu-card">
          <div className="edu-front">
            <h3>Master of Computer Science</h3>
            <span>2025 </span>
            <p>IGNOU University</p>
          </div>

          <div className="edu-hover">
            <img src={mcaImage} alt="IGNOU University" />
            <p>📍 Trivandrum, Kerala</p>
          </div>
        </div>
        {/* Degree 1 */}
        <div className="edu-card">
          <div className="edu-front">
            <h3>Bachelor of Computer Science</h3>
            <span>2021 – 2024</span>
            <p>IGNOU University</p>
          </div>

          <div className="edu-hover">
            <img src={bcaImage} alt="IGNOU University" />
            <p>📍Trivandrum, Kerala</p>
          </div>
        </div>

         {/* Diploma 1 */}
        <div className="edu-card">
          <div className="edu-front">
            <h3>Diploma in  Computer Software Engineering </h3>
            <span>2021 – 2024</span>
            <p> AICTE</p>
          </div>

          <div className="edu-hover">
          <img src={cptImage} alt="Cpt TVm"/>
            <p>📍Trivandrum, Kerala  </p>
          </div>
        </div>



        {/* Degree 2 */}
        <div className="edu-card">
          <div className="edu-front">
            <h3>Higher Secondary (12th)</h3>
            <span>2019 – 2021</span>
            <p>State Board</p>
          </div>

          <div className="edu-hover">
            <img src={school1Image} alt="Higher Secondary School" />
            <p>📍 Trivandrum, Kerala</p>
          </div>
        </div>

        {/* Degree 3 */}
        <div className="edu-card">
          <div className="edu-front">
            <h3>Secondary School (10th)</h3>
            <span>2018 – 2019</span>
            <p>State Board</p>
          </div>

          <div className="edu-hover">
            <img src={school1Image} alt="Secondary School" />
            <p>📍 Trivandrum, Kerala</p>
          </div>
        </div>
      </div>
    </section>
  );
}
