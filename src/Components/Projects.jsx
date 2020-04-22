import React from 'react';

function Projects(){
    return <div className="projects">
        <h1>Projects</h1> 
        <h2>The Cinema Critic (Wordpress)</h2>
        <p>Screenshot</p>
        <p>My main movie review website. I have been working on this since 2014, and have been writing
            over 650 reviews. </p>
        <a href="https://thecinemacritic.wordpress.com/"> 
        <button type="button"  class="btn btn-outline-secondary">Link
        </button>
        </a>
        <br></br>
        <br></br>
        
        

        <h2>The Cinema Critic (Experiment)</h2>
        <p>Screenshot</p>
        <p>I created a website using JavaScripts, CSS and HTML. 
            It's very much a work in progress.</p>
        <a href="https://github.com/tanmichael1/Film-Review-Website"> 
        <button type="button"  class="btn btn-outline-secondary">Github
        </button>
        </a>
    
        </div>;

}

export default Projects;