import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Buttons.module.css";

export default function SentimentAnalysis() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBackClick = (e) => {
    e.preventDefault();

    if (!isHome) {
      navigate("/");
      setTimeout(() => scrollToProjects(), 150);
    } else {
      scrollToProjects();
    }
  };

  return (
    <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
        Customer Review Sentiment Analysis
      </h1>

      <p style={{ color: "#555", lineHeight: "1.7", marginBottom: "30px" }}>
        Under Construction.
      </p>

      <a href="#projects"
         className={styles.linkButton}
         onClick={handleBackClick}
      >
        ← Back to Projects
      </a>
    </section>
  );
}
