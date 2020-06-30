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
      <div className="cvContact" style={{ height: "100vh" }}>
        <CV />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
