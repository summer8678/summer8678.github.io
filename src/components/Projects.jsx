import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projectContainer}>
        <div className={styles.text}>
          <h3>Web Visualization App</h3>
          <p>
            A React-based interactive web application for real-time data
            visualization.  
            Integrated Supabase (SQL backend) and RESTful APIs with Mapbox GL to display dynamic
            markers and live user data.
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
    </section>
  );
}
