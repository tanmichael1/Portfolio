import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import CV from "./CV";
import Contact from "./Contact";
import Footer from "./Footer";

//https://colorhunt.co/palette/22272 - white, light blue, dark blue

function App() {
  return (
    <div className="wholePage">
      <Header />
      <Home />
      <About />
      <Projects />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
