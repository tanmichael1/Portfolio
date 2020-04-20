import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import CV from "./CV";
import Contact from "./Contact";
import Footer from "./Footer";


function App(){
    return (
    <div>
  <Header />
  <hr></hr>
  <Home />
  <hr></hr>
  <About />
  <hr></hr>
  <Projects />
  <hr></hr>
  <CV />
  <hr></hr>
  <Contact />
  <hr></hr>
  <Footer />
  </div>);
}


export default App;