import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
