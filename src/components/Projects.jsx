import styles from "../styles/Projects.module.css";
import pukiwikiImg from "../assets/pukiwiki.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      {/* --- Sentiment Analysis --- */}
      <div className={styles.projectContainer}>
        <div className={styles.text}>
          <h3>Customer Review Sentiment Analysis</h3>
          <p className={styles.date}>Nov 2025 - Ongoing</p>
          <p>
            A Python (TextBlob, langid) + Power BI project analyzing 500+ multilingual
            customer feedback trends from public dataset. Built a dashboard to visualize
            sentiment patterns such as meal-time differences and pre/post-campaign changes.
          </p>
          <Link to="/sentiment-analysis" className={styles.linkButton}>View details →</Link>
        </div>

        <div className={styles.embed}>
          Under Construction
        </div>
      </div>

      {/* --- Web Visualization App --- */}
      <div className={styles.projectContainer}>
        <div className={styles.text}>
          <h3>Web Visualization App</h3>
          <p className={styles.date}>Sep - Oct 2025</p>
          <p>
            A React-based interactive web application for real-time data
            visualization. Integrated Supabase (SQL backend) and RESTful APIs
            with Mapbox GL to display dynamic markers and live user data.
          </p>
        </div>

        <div className={styles.embed}>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7386112641187979264?compact=1"
            height="270"
            width="480"
            frameBorder="0"
            allow="fullscreen"
            allowFullScreen={true}
            title="LinkedIn Embedded Post"
          ></iframe>
        </div>
      </div>

      {/* --- AI Chatbot for Financial Analysis (BCG) --- */}
      <div className={styles.projectContainer}>
        <div className={styles.text}>
          <h3>AI Chatbot for Financial Analysis</h3>
          <p className={styles.date}>Mar 2025</p>
          <p>
            Built an AI-powered chatbot in a Boston Consulting Group simulation
            to extract insights from financial reports. 
            Using Python and Jupyter,
            it analyzes 10-K and 10-Q filings and provides summaries in a conversational format.
          </p>
        </div>

        <div className={styles.embed}>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304885206421766145?compact=1"
                  height="270"
                  width="480"
                  frameBorder="0"
                  allow="fullscreen"
                  allowFullScreen={true}
                  title="LinkedIn Embedded Post 2">
          </iframe>
        </div>
      </div>

      {/* --- Personal Wiki for Study Notes (PukiWiki) --- */}
      <div className={styles.projectContainer}>
        <div className={styles.text}>
          <h3>Personal Wiki for Study Notes</h3>
          <p className={styles.date}>May 2024 - Present</p>
          <p>
            Set up a self-hosted PukiWiki site to document my learning in cloud tools,
            statistical analysis, and machine learning.
            Installed and customized this PHP-based wiki on a local server
            to organize study notes in one searchable place.
          </p>
        </div>

        <div className={styles.embed}>
          <img
            src={pukiwikiImg}
            alt="Screenshot of PukiWiki personal study notes"
            style={{
              width: "480px",
              height: "270px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </section>
  );
}
