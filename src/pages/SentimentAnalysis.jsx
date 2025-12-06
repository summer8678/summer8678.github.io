// src/pages/SentimentAnalysis.jsx
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Buttons.module.css";
import ratingDistImg from "../assets/rating_distribution.png";
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

      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "26px"
        }}
      >
        Under construction.
      </p>

{/*       <h3
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
        A column chart plots the average sentiment polarity for each star
        rating. Error bars (mean ± standard deviation) show the spread inside
        each group. Polarity increases with star rating, which confirms that the
        sentiment model is consistent with human ratings, but the error bars
        remind us that even 5-star reviews include a range of opinions.
      </p> */}

{/*       <h3
        style={{
          fontSize: "1.15rem",
          marginTop: "18px",
          marginBottom: "8px",
        }}
      >
        Meal type comparison (lunch vs dinner)
      </h3>
      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "10px",
        }}
      >
        Another chart compares average polarity by meal type using the
        <code> review_questions_Meal type</code> field. Error bars show that
        dinner reviews are slightly more positive and more stable, while lunch
        reviews have larger variability. This suggests that the lunch-time
        experience is less consistent than dinner.
      </p>

      <h3
        style={{
          fontSize: "1.15rem",
          marginTop: "18px",
          marginBottom: "8px",
        }}
      >
        Attribute ratings with variability
      </h3>
      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "10px",
        }}
      >
        I also analyze attribute-level ratings such as food, service, and
        atmosphere. A bar chart with error bars shows that food has the highest
        average score but also the largest variance, while service is slightly
        lower but more stable. This combination is useful for deciding where to
        focus quality improvements.
      </p> */}

{/*       <h3
        style={{
          fontSize: "1.15rem",
          marginTop: "18px",
          marginBottom: "8px",
        }}
      >
        Time trend and promotion period
      </h3>
      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "10px",
        }}
      >
        A time-series plot shows average polarity by month, with separate lines
        for promotion and non-promotion periods. Error bars per month help show
        how stable sentiment is over time. During the promotion period, polarity
        increases slightly but the error bars are larger, meaning that customer
        reactions are more mixed.
      </p> */}

      {/* <h3
        style={{
          fontSize: "1.15rem",
          marginTop: "18px",
          marginBottom: "8px",
        }}
      >
        Text length vs polarity
      </h3>
      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
          marginBottom: "24px",
        }}
      >
        Finally, a scatter plot of review text length versus polarity shows that
        very short reviews are often extremely positive or negative, while
        longer reviews tend to have polarity values closer to the middle. This
        explains why some neutral-looking scores still come from detailed and
        informative feedback.
      </p>
 */}
      <div style={{ height: "40px" }} />

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
