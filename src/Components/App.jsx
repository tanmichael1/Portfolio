import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import CV from "./CV";
import Contact from "./Contact";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//https://reacttraining.com/react-router/web/guides/quick-start

//https://colorhunt.co/palette/22272 - white, light blue, dark blue

function App() {
  return (
    <div className="wholePage">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
