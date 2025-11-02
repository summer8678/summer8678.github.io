import { useRef } from "react";
import styles from "../styles/About.module.css";

import img1 from "../assets/tmp20250606.png";
import img2 from "../assets/IMG_1285.jpg";
import img3 from "../assets/IMG_1373.jpg";

export default function About() {
  const scrollRef = useRef(null);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -390, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 390, behavior: "smooth" });

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        Description.
      </p>

      <div className={styles.galleryWrapper}>
        <button onClick={scrollLeft} className={styles.scrollButton}>◀</button>

        <div ref={scrollRef} className={styles.gallery}>
          <img src={img1} alt="Instrumentation setup" />
          <img src={img2} alt="Lab equipment" />
          <img src={img3} alt="Control system interface" />
        </div>

        <button onClick={scrollRight} className={styles.scrollButton}>▶</button>
      </div>
    </section>
  );
}
