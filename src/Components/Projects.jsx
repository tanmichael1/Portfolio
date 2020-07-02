import React from "react";

function Projects() {
  return (
    <div id="projects" className="projects">
      <div style={{ width: "65vw", margin: "auto" }}>
        <h1>Projects</h1>

        <h2>The Cinema Critic (Wordpress)</h2>

        <img src={"./images/Wordpress.JPG"} />
        <p>
          A movie review website that I started as a school personal project
          back in 2014, initially intended just as a blog with 50 movie reviews.
          After completing that project however, I continued to write reviews in
          the years that followed, and in that time I have written over 650
          reviews. I have a passion and keen interest in movies, and so I got
          into this quite a bit, and my skills in writing movie reviews have
          been continully improving.{" "}
        </p>

        <p>
          This website had been created on Wordpress, and using the language of
          HTML. I had been using this site even before I learned how to code,
          and mostly copied and pasted code for each post, but now I know what
          it all means.{" "}
        </p>
        <a href="https://thecinemacritic.wordpress.com/">
          <button type="button" class="btn btn-outline-secondary">
            Link
          </button>
        </a>
        <br></br>
        <br></br>

        <h2>The Cinema Critic (Node.js)</h2>
        <img src={"./images/Appjs.jpg"} />
        <p>
          I created a website using JavaScript, CSS and HTML as practice for
          myself while taking Angela Yu's Web Development online course. I
          decided to have this be an alternative movie review website, and it's
          a way for me to practice my coding skills. I am continuisly improving
          this site, and expanding certain elements.
        </p>

        <p>
          The site is very much a work in progress and won't replace the
          Wordpress site where I actually have my reviews, but it's nonetheless
          something that I created and a way that I'm challenging my skills and
          using it to improve myself as a coder.{" "}
        </p>
        <a href="https://github.com/tanmichael1/Film-Review-Website">
          <button type="button" class="btn btn-outline-secondary">
            Github
          </button>
        </a>

        <br></br>
        <br></br>

        <h2>Personal Portfolio</h2>
        <p>
          This website is also a project that I created using React, which I've
          also learned from taking Angela Yu's online course.
        </p>
        <a href="https://github.com/tanmichael1/Portfolio">
          <button type="button" class="btn btn-outline-secondary">
            Github
          </button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
