import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={scrolled ? styles.navbarScrolled : styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? "✕" : "≡"}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <li><a href="#projects" className={styles.link} onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#about" className={styles.link} onClick={() => setMenuOpen(false)}>About</a></li>
      </ul>
    </nav>
  );
}
