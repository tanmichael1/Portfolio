import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import CV from "./CV";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Sidebar />
      <Home />
      <About />
      <Projects />
      <div className="cvAndContactSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Contact />
            </div>
            <div className="col-lg-6">
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
