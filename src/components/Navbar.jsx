import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  // --- Navbar style logic (Home vs Other pages) ---
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // --- Smooth Scroll Navigation ---
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);

    if (!isHome) {
      navigate("/");
      setTimeout(() => scrollToId(targetId), 150);
    } else {
      scrollToId(targetId);
    }
  };

  return (
    <nav className={scrolled ? styles.navbarScrolled : styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? "✕" : "≡"}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <li><a href="#home"     className={styles.link} onClick={(e)=>handleNavClick(e,"home")}>Home</a></li>
        <li><a href="#projects" className={styles.link} onClick={(e)=>handleNavClick(e,"projects")}>Projects</a></li>
        <li><a href="#about"    className={styles.link} onClick={(e)=>handleNavClick(e,"about")}>About</a></li>
        <li><a href="#contact"  className={styles.link} onClick={(e)=>handleNavClick(e,"contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}
