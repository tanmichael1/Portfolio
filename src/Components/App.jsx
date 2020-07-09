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
      <div style={{ backgroundColor: "#dbe2ef", paddingBottom: "5vh" }}>
        <div className="container" style={{ backgroundColor: "#dbe2ef" }}>
          <div className="row" style={{ backgroundColor: "#dbe2ef" }}>
            <div className="col-lg-6">
              <Contact />
            </div>
            <div className="col-lg-6" /* style={{ height: "20vh" }} */>
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
