// src/pages/BreastHistopathology.jsx
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Buttons.module.css";

// ===== Image imports (place these files under src/assets/) =====
import non1 from "../assets/10253_idx5_x151_y1551_class0.png";
import non2 from "../assets/10253_idx5_x201_y1551_class0.png";
import non3 from "../assets/10253_idx5_x301_y1651_class0.png";

import idc1 from "../assets/10253_idx5_x501_y351_class1.png";
import idc2 from "../assets/10253_idx5_x501_y401_class1.png";
import idc3 from "../assets/10253_idx5_x551_y301_class1.png";

export default function BreastHistopathology() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isHome = location.pathname === "/";

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  const idcImages = useMemo(
    () => [
      { src: idc1, label: "10253 / class1 (IDC+)" },
      { src: idc2, label: "10253 / class1 (IDC+)" },
      { src: idc3, label: "10253 / class1 (IDC+)" },
    ],
    []
  );

  const nonImages = useMemo(
    () => [
      { src: non1, label: "10253 / class0 (non-IDC)" },
      { src: non2, label: "10253 / class0 (non-IDC)" },
      { src: non3, label: "10253 / class0 (non-IDC)" },
    ],
    []
  );

  const Card = ({ title, badge, children }) => (
    <div
      style={{
        borderRadius: "16px",
        border: "1px solid rgba(0,0,0,0.08)",
        background: "white",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        padding: "18px",
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "12px",
          flexWrap: "wrap",
        }}
      >
        <h3 style={{ fontSize: "1.05rem", margin: 0 }}>{title}</h3>
        <span
          style={{
            fontSize: "0.85rem",
            padding: "4px 10px",
            borderRadius: "999px",
            border: "1px solid rgba(0,0,0,0.12)",
            background: "rgba(0,0,0,0.03)",
            color: "#444",
          }}
        >
          {badge}
        </span>
      </div>
      {children}
    </div>
  );

  const PatchGrid = ({ items }) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 70px)",
        gap: "10px",
        justifyContent: "start",
      }}
    >
      {items.map((it, idx) => (
        <div key={idx} style={{ textAlign: "center" }}>
          <img
            src={it.src}
            alt={it.label}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
              imageRendering: "pixelated",
              borderRadius: "6px",
              border: "1px solid rgba(0,0,0,0.15)",
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              display: "block",
            }}
          />
          <div style={{ fontSize: "0.7rem", color: "#777", marginTop: "4px" }}>
            Patch {idx + 1}
          </div>
        </div>
      ))}
    </div>
  );

  const TwoColumnRow = ({ left, right }) => (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
          alignItems: "start",
        }}
      >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );

  return (
    <section
      style={{
        padding: "80px 20px",
        maxWidth: "980px",
        margin: "0 auto",
      }}
    >
      {/* ====== Title ====== */}
      <h1
        style={{
          fontSize: "2.2rem",
          marginBottom: "10px",
          fontFamily: '"Roboto Mono", monospace',
        }}
      >
        Breast Histopathology Image Study
      </h1>

      <p
        style={{
          fontSize: "0.95rem",
          color: "#777",
          marginBottom: "24px",
          fontFamily: '"Roboto Mono", monospace',
          fontStyle: "italic",
        }}
      >
        Jan. 2026 – Ongoing
      </p>

      {/* ====== Project Intro ====== */}
      <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "26px" }}>
        This project studies breast tissue microscope images. The goal is to
        understand visual patterns that may indicate the presence of cancer
        cells before applying machine learning methods.
      </p>

      {/* ===== Dataset Overview ===== */}
      <h2 style={{ fontSize: "1.15rem", margin: "0 0 8px 0" }}>
        Dataset Overview
      </h2>

      <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>
        The dataset contains small image patches (50×50 pixels) taken from
        large microscope slides of breast tissue. Each patch is labeled based
        on whether it contains <b>Invasive Ductal Carcinoma (IDC)</b>.
      </p>

      <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "0px" }}>
        <b>Invasive Ductal Carcinoma (IDC)</b> is the most common type of
        breast cancer. The word <i>invasive</i> means cancer cells have spread
        outside the original duct structure. The word <i>ductal</i> means the
        cancer started in milk ducts inside breast tissue.
      </p>

      {/* ===== Visual Inspection ===== */}
      <h2 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>
        Visual Pattern Exploration
      </h2>

      <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
        Before using computer models, sample images were reviewed manually. This
        helps identify visible differences between cancer and non-cancer regions.
      </p>

      {/* ===== IDC Positive Card ===== */}
      <Card title="Common patterns in IDC-positive patches" badge="class1 (IDC present)">
        <TwoColumnRow
          left={
            <ul style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
              <li>
                <b>High cell density</b> – Many purple dots appear close together.
                These purple dots represent <b>cell nuclei</b>, which are the centers
                of cells that contain DNA.
              </li>
              <li>
                <b>Irregular nuclei</b> – The size and shape of nuclei are not uniform.
                This condition is called <b>nuclear pleomorphism</b>, meaning cell
                nuclei look different from each other.
              </li>
              <li>
                <b>Loss of organized structure</b> – Normal breast tissue often shows
                clear gland shapes. Cancer tissue usually breaks this structure.
              </li>
              <li>
                <b>Fibrous background changes</b> – Pink areas called <b>stroma</b>{" "}
                (supporting tissue around cells) may appear thicker or invaded by tumor
                cells.
              </li>
            </ul>
          }
          right={
            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#777",
                  marginBottom: "8px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                Example 50×50 patches
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <PatchGrid items={idcImages} />
              </div>
            </div>
          }
        />
      </Card>

      {/* ===== Non-IDC Card ===== */}
      <Card title="Common patterns in non-IDC patches" badge="class0 (non-IDC)">
        <TwoColumnRow
          left={
            <ul style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
              <li>
                <b>Large white empty spaces</b> – These often indicate{" "}
                <b>adipose tissue</b>, which is fat tissue.
              </li>
              <li>
                <b>More regular tissue patterns</b> – The background structure appears
                smoother and more organized.
              </li>
              <li>
                <b>Lower nucleus density</b> – Fewer purple nuclei are visible compared
                with IDC-positive patches.
              </li>
            </ul>
          }
          right={
            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#777",
                  marginBottom: "8px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                Example 50×50 patches
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <PatchGrid items={nonImages} />
              </div>
            </div>
          }
        />
      </Card>

      {/* ===== Reference Link ===== */}
      <a
        href="https://cancer.ca/en/cancer-information/cancer-types/breast/grading"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#3b82f6" }}
      >
        Grading breast cancer (Canadian Cancer Society)
      </a>

      {/* ===== Under construction ===== */}
      <h2 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>
        Under construction
      </h2>

      {/* ===== Back Button ===== */}
      <a
        href="#projects"
        className={styles.linkButton}
        onClick={handleBackClick}
      >
        ← Back to Projects
      </a>
    </section>
  );
}
