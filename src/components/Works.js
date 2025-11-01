// src/components/Works.js
import React from "react";
import "./Works.css";

export default function Works() {
  const works = [
    {
      title: "Improve your English level",
      color: "#ffeb99",
    },
    {
      title: "Spark your brand’s imaginative flair",
      color: "#f0c6ff",
    },
    {
      title: "We are Pet. Caring Vets, Healthy Pets.",
      color: "#b3d9ff",
    },
    {
      title: "Win your dream job with PostJob",
      color: "#b3ffcc",
    },
  ];

  return (
    <section className="works">
      {works.map((work, index) => (
        <div
          key={index}
          className="work-card"
          style={{ backgroundColor: work.color }}
        >
          <h3>{work.title}</h3>
        </div>
      ))}
    </section>
  );
}
