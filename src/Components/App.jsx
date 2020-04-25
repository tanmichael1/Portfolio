import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import CV from "./CV";
import Contact from "./Contact";
import Footer from "./Footer";


function App(){
    return (
    <div>
  <Header />
 
  <Home />
  <hr></hr>
  <About />
  <hr></hr>
  <Projects />>
  <hr></hr>
  <Skills />
  <hr></hr>
  <CV />
  <hr></hr>
  <Contact />
  <hr></hr>
  <Footer />
  </div>);
}


export default App;