// src/pages/SentimentAnalysis.jsx
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Buttons.module.css";
import ratingDistImg from "../assets/rating_distribution.png";
import polratingvsratingDistImg from "../assets/polarityvsrating.png";
import avgratingvsmonthImg from "../assets/avgratingofserviceatmospherefoodvsmonth.png";
import { useEffect } from "react";

export default function SentimentAnalysis() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isHome = location.pathname === "/";

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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

  return (
    <section
      style={{
        padding: "80px 20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* ====== Title & Intro ====== */}
      <h1
        style={{
          fontSize: "2.2rem",
          marginBottom: "10px",
          fontFamily: '"Roboto Mono", monospace',
        }}
      >
        Customer Review Sentiment Analysis
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
        Nov 2025 – Ongoing
      </p>

      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "28px",
        }}
      >
        This project analyzes more than 500 public restaurant reviews using
        Python for sentiment analysis and Power BI for interactive
        visualization. The goal is to understand how customer sentiment changes
        across meal types, attributes such as food and service, and before or
        after a promotion period.
      </p>

      <h2
        style={{
          fontSize: "1.15rem",
          marginTop: "18px",
          marginBottom: "8px",
        }}
      >
        Multilingual Review Dataset
      </h2>

      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "10px",
        }}
      >
        The full dataset contains customer reviews written in 14 different languages,
        making it a highly diverse and realistic sample for sentiment analysis.
        The majority of comments are written in English (≈ 90%),
        but a wide range of minor languages also appears: Korean, Spanish, German, Italian, Japanese, Chinese, Portuguese, Basque, Danish, Swedish, French, Slovenian, and Luxembourgish.
      </p>

      {/* ====== Section: Exploratory Data Analysis (EDA) ====== */}
      <h3
        style={{
          fontSize: "1.15rem",
          marginTop: "18px",
          marginBottom: "8px",
        }}
      >
        Rating distribution
      </h3>
      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "10px",
        }}
      >
        A histogram of star ratings shows that the dataset is highly skewed
        toward 4 and 5 stars. This means most customers are satisfied, and it
        also suggests that the text reviews are biased toward positive
        experiences.
      </p>

      <img 
        src={ratingDistImg} 
        alt="Rating distribution chart"
        style={{
          width: "100%",
          maxWidth: "250px",
          margin: "20px auto 40px auto",
          display: "block",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
      />

      <p
        style={{
          textIndent: "2em",
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "12px",
        }}
      >
        To investigate whether the seasonal ice cream promotion influenced customer
        ratings, the dataset was divided into two groups: reviews written during the
        promotion period and reviews written outside of it. A collaborator on this
        project conducted a statistical comparison of the two groups, using an
        independent two-sample t-test on the mean star ratings.
      </p>
      <p
        style={{
          textIndent: "2em",
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "56px",
        }}
      >
        The analysis showed that the average rating during the promotion period was
        significantly different from the non-promotion period, suggesting that the
        promotion likely affected how customers evaluated their experience. For the
        remaining analysis on this page, I focus on the non-promotion subset, which
        better reflects the restaurant’s baseline performance without promotional
        effects.
      </p>

      <h3
        style={{
          fontSize: "1.15rem",
          marginTop: "18px",
          marginBottom: "8px",
        }}
      >
        Polarity vs star rating
      </h3>
      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "10px",
        }}
      >
        The overall trend shows that sentiment becomes more positive as the star rating
        increases, but the relationship is not perfectly linear. In particular, the
        average polarity for 2-star and 3-star reviews is slightly reversed. This can
        happen when 2-star comments include strong emotional wording—often expressing
        clear dissatisfaction, while 3-star reviews tend to contain more balanced or
        mixed opinions, which naturally pulls their polarity closer to neutral. In
        other words, a higher star rating does not always guarantee stronger positive
        language, especially when customers use the middle ratings to describe
        “okay but not great” experiences.
      </p>

      <img 
        src={polratingvsratingDistImg}
        alt="Polarity vs star rating chart"
        style={{
          width: "100%",
          maxWidth: "250px",
          margin: "20px auto 40px auto",
          display: "block",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
      />

      <p
        style={{
          textIndent: "2em",
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "56px",
        }}
      >
        Low-rating reviews also show wide variation in sentiment expression. People
        describe negative experiences in many different ways, from short and sharply
        worded comments to longer, more neutral descriptions. At the high end of the
        scale, 4-star and 5-star reviews often contain similarly enthusiastic language,
        so their polarity values converge and become less separable. This reflects a natural form of
        saturation in highly positive feedback.
      </p>

      <h2
        style={{
          fontSize: "1.15rem",
          marginTop: "18px",
          marginBottom: "8px",
        }}
      >
        Month-to-Month Trends in Customer Experience
      </h2>

      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "10px",
        }}
      >
        The monthly trend graph shows two noticeable declines, in June and October 2025.
        To understand these changes, the customer comments posted during those periods
        were examined.
      </p>

      <img 
        src={avgratingvsmonthImg}
        alt="Avg rating of service, food, and atmosphere vs Year-Month chart"
        style={{
          width: "100%",
          maxWidth: "450px",
          margin: "20px auto 40px auto",
          display: "block",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
      />

      <p
        style={{
          textIndent: "2em",
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "12px",
        }}
      >
        In June, both Food and Service scores decreased. Comments from that month
        frequently mention portion size, value for money, and inconsistencies in
        quality. Several reviews also describe negative interactions with staff, which
        likely contributed to the lower Service ratings observed.
      </p>

      <p
        style={{
          textIndent: "2em",
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "12px",
        }}
      >
        The decline in October appears to be driven mainly by Service. During this
        period, a customer reported receiving a takeout order without cutlery.
        Although cutlery can be added for an extra charge, the customer may not have
        been informed of this option, leading to frustration when they were unable to
        eat their meal. Such operational oversights can strongly influence the overall
        perception of service quality.
      </p>

      <p
        style={{
          textIndent: "2em",
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "56px",
        }}
      >
        Overall, the month-to-month variations highlight how operational details and
        customer communication can influence the perception of service quality.
      </p>

      {/* ====== Back Button ====== */}
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
