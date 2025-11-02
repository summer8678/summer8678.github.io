import { useRef } from "react";
import styles from "../styles/About.module.css";

import img1 from "../assets/tmp20250606.png";
import img2 from "../assets/IMG_1285.jpg";
import img3 from "../assets/IMG_1373.jpg";

export default function About() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const scrollAmount = window.innerWidth < 768 ? 250 : 390;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const scrollAmount = window.innerWidth < 768 ? 250 : 390;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        I enjoy creating systems that make complex data easier to understand.
        I've worked with both hardware and software, combining them to build instrumentation and control systems.
        Outside of work, I like walking in the forests of North Vancouver, relaxing by the beach, and trying different ethnic cuisines at local restaurants.
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
