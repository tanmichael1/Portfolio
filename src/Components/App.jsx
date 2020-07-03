import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import CV from "./CV";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <div style={{ backgroundColor: "#dbe2ef" }}>
        <div class="container" style={{ backgroundColor: "#dbe2ef" }}>
          <div class="row" style={{ backgroundColor: "#dbe2ef" }}>
            <div class="col-lg">
              <Contact />
            </div>
            <div class="col-lg" style={{ height: "20vh" }}>
              <CV />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
