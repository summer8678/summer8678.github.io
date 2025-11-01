import React from "react";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contact</h2>
      <p className={styles.contactText}>
        Feel free to get in touch!
      </p>

      <div className={styles.contactLinks}>
        <a
          href="https://www.linkedin.com/in/summer-t-b81332337/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/summer8678"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          💻 GitHub
        </a>
        <a
          href="https://www.instagram.com/summer1008678/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          📷 Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;
