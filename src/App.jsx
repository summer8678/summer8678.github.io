import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BreastHistopathology from "./pages/BreastHistopathology";
import SentimentAnalysis from "./pages/SentimentAnalysis";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <About />
              <Contact />
            </>
          }
        />

        {/* Details page */}
        <Route path="/breast-histopathology" element={<BreastHistopathology />} />
        <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
      </Routes>
    </Router>
  );
}
