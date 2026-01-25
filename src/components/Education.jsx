// Education.jsx
import "./Education.css";

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
            <img src="/MCA.jpg" alt="IGNOU University" />
            <p>📍 TVM</p>
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
            <img src="/BCA.jpg" alt="IGNOU University" />
            <p>📍 TVM</p>
          </div>
        </div>

         {/* Diploma 1 */}
        <div className="edu-card">
          <div className="edu-front">
            <h3> Computer software Engineer </h3>
            <span>2021 – 2024</span>
            <p> University</p>
          </div>

          <div className="edu-hover">
          <img src="/CPT.jpg" alt="Cpt TVm"/>
            <p>📍 CPT </p>
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
            <img src="/school1.jpg" alt="Higher Secondary School" />
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
            <img src="/school2.jpg" alt="Secondary School" />
            <p>📍 Kollam, Kerala</p>
          </div>
        </div>
      </div>
    </section>
  );
}
