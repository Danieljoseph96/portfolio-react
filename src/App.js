import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Home from "./components/Home";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import HowTo from "./components/blog/portswing/HowTo";
import Blog1 from "./components/blog/Tryhackme/Blog1";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

 const toggleTheme = () => {
  setTheme(prev =>
    prev === "light" ? "blue" : prev === "blue" ? "red" : "light"
  );
};

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Home/>
      <About />
      <WorkExperience/>
            <Certificates />
      <Projects />

      <Education/>
      <HowTo/>
      <Blog1/>
      
    </div>
  );
}
