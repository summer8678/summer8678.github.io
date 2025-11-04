import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      {/* --- Web Visualization App --- */}
      <div className={styles.projectContainer}>
        <div className={styles.text}>
          <h3>Web Visualization App</h3>
          <p>
            A React-based interactive web application for real-time data
            visualization. Integrated Supabase (SQL backend) and RESTful APIs
            with Mapbox GL to display dynamic markers and live user data.
          </p>
        </div>

        <div className={styles.embed}>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7386112641187979264?compact=1"
            height="399"
            width="504"
            frameBorder="0"
            allowFullScreen=""
            title="LinkedIn Embedded Post"
          ></iframe>
        </div>
      </div>

      {/* --- AI Chatbot for Financial Analysis (BCG) --- */}
      <div className={styles.projectContainer}>
        <div className={styles.text}>
          <h3>AI Chatbot for Financial Analysis</h3>
          <p>
            Built an AI-powered chatbot in a Boston Consulting Group simulation
            to extract insights from financial reports. 
            Using Python and Jupyter,
            it analyzes 10-K and 10-Q filings and provides summaries in a conversational format.
          </p>
        </div>

        <div className={styles.embed}>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304885206421766145?compact=1"
                  height="399"
                  width="504"
                  frameborder="0"
                  allowfullscreen=""
                  title="Embedded post">
          </iframe>
        </div>
      </div>
    </section>
  );
}
