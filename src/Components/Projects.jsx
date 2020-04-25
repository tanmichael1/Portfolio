import React from 'react';

function Projects() {
    return <div className="projects">
        <h1>Projects</h1>

        

        <h2>The Cinema Critic (Wordpress)</h2>
        <p>Screenshot</p>
        <p>My main movie review website. I have been working on this since 2014, and have been writing
            over 650 reviews. This had been created on Wordpress, with HTML. I've been using this
            site even before I learned how to code, and mostly copied and pasted code for each post,
            but now I know what it all means. </p>
        <a href="https://thecinemacritic.wordpress.com/">
            <button type="button" class="btn btn-outline-secondary">Link
        </button>
        </a>
        <br></br>
        <br></br>



        <h2>The Cinema Critic (Experiment)</h2>
        <p>Screenshot</p>
        <p>I created a website using JavaScripts, CSS and HTML as practice for myself while doing
            Angela Yu's Web Development online course. 
            It's very much a work in progress and won't replace my Wordpress site where I write
            my reviews, but it's a way for me to practice my coding skills in a way
            and progress with things on my own. </p>
        <a href="https://github.com/tanmichael1/Film-Review-Website">
            <button type="button" class="btn btn-outline-secondary">Github
        </button>
        </a>

        <h2>Personal Portfolio</h2>
        <p>This website is a project, using React, which I've also learned from taking Angela Yu's online
            course. 
        </p>
        <a href="https://github.com/tanmichael1/Portfolio">
            <button type="button" class="btn btn-outline-secondary">Github
        </button>
        </a>

    </div>;

}

export default Projects;