import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import CV from "./CV";
import Contact from "./Contact";
import Footer from "./Footer";



//https://colorhunt.co/palette/22272 - white, light blue, dark blue

function App(){
    return (
    <div className="wholePage">
  

  <div id="container">
        <div id="header">
        <p>Header</p>
        <Header />
    </div>
    
    <div id="primary">
        <p>Primary Sidebar</p>
    </div>
    
    <div id="content">
        <p>Main content</p>
        <Home />
  <About />

  <Projects />

  <Skills />

  <CV />
  <Contact />
    </div>
    
    <div id="secondary">
        <p>Secondary Sidebar</p>
    </div>
    
    <div id="footer">
        <p>Footer</p>
        <Footer />
    </div>
</div>
 
  

  
  
  </div>);
}




export default App;