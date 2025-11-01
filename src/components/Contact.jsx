// src/components/Contact.js
import React from "react";
import "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Hello!</h2>
      <p>I’m UX/UI Designer</p>
      <p>You can contact with me</p>

      <div className="icons">
        <a href="mailto:youremail@gmail.com">✉️</a>
        <a href="https://t.me/yourusername">💬</a>
      </div>

      <h3>Follow Me</h3>
      <div className="icons">
        <a href="https://dribbble.com" target="_blank" rel="noreferrer">
          🏀
        </a>
        <a href="https://www.behance.net" target="_blank" rel="noreferrer">
          🎨
        </a>
      </div>

      <p>Thanks ❤️</p>
    </section>
  );
}
