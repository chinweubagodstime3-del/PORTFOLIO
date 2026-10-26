
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">FRONTEND DEVELOPER</p>

          <h1>
            Hi, I'm Chinweuba Godstime.
            <br />
            <span>I build for the web.</span>
          </h1>

          <p className="hero-description">
            I create modern, responsive and user-friendly
            websites using HTML, CSS, JavaScript and React.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Work ↗
            </a>

            <a href="#contact" className="button secondary">
              Contact Me
            </a>
          </div>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Chinweuba Godstime.
          All rights reserved.
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
