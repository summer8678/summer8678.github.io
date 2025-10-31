import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Summer T.</h1>
        <h2 className={styles.subtitle}>From Instruments to Data Systems</h2>
        <p className={styles.typing}>Transforming measurements into meaningful stories.</p>
      </div>
    </section>
  );
}
