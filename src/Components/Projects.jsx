import React from "react";

function Projects() {
  return (
    <div id="projects" className="projects">
      <div style={{ width: "65vw", margin: "auto" }}>
        <h1>Projects</h1>

        <h2>The Cinema Critic (Wordpress)</h2>

        <img src={"./images/Wordpress.JPG"} alt="Wordpress Site preview" />
        <p>
          This is a movie review website which I created as a school personal
          project back in 2014 as part of Year 10’s curriculum. Initially it was
          intended to be just as a blog with 50 movie reviews written by myself.
          After completing that project however, I continued to write reviews,
          and over the course of many years, I have now written over 800
          reviews. I have a passion and keen interest in film and tv, and so
          this was a passion project hobby for me, and I’m still active in
          running the site.
        </p>

        <p>
          I created this website using the free and open-source content
          management system Wordpress, and I used the language of HTML for my
          posts. Initially researched how to achieve the presentation on a
          digital level. I started creating this website before I actually
          learned how to code.
        </p>
        <a href="https://thecinemacritic.wordpress.com/" target="_blank">
          <button type="button" className="btn-xlarge btn-outline-secondary">
            Link
          </button>
        </a>
        <br></br>
        <br></br>

        <h2>The Cinema Critic (Node.js)</h2>
        <img src={"./images/Appjs.jpg"} alt="Node.js preview" />
        <p>
          I created this website using JavaScript, CSS and HTML while I was
          taking Angela Yu’s Web Development online course. I’m also using
          MongoDB to store the reviews that are kept on the site. I decided that
          I wanted to create a movie review website from scratch that wasn’t
          generated through Wordpress, so I would have more freedom to
          personalise it further. I am continuously improving this site and
          expanding certain elements to make improvements with its interface and
          overall quality. The aim is to not copy my Wordpress website, so that
          this new site is distinct and separate from it. The Node.js website
          has a different layout and structure for each page.
        </p>

        <p>
          The site is very much a work in progress, but it’s nonetheless
          something that I have been creating myself. Through this I’m also
          challenging my development skills, and I’m improving myself as a coder
          and web developer.
        </p>
        <a
          href="https://github.com/tanmichael1/Film-Review-Website"
          target="_blank"
        >
          <button type="button" className=" btn-xlarge  btn-outline-secondary">
            Github
          </button>
        </a>

        <br></br>
        <br></br>

        <h2>Personal Portfolio</h2>
        <img src={"./images/Portfolio.JPG"} alt="Personal Portfolio preview" />
        <p>
          I have created this mainly using React, along with JavaScript, CSS and HTML.
          I learned these skills from taking Angela Yu’s online Web Development
          course. Additionally, for the contact page, I used EmailJS for the
          contact form which automatically sends messages to my personal email
          whenever the form is completed and submitted.
        </p>

        <p>
          This Portfolio Website is intended to be an overview of myself, what
          I’ve achieved, and who I am. As with the Node.js website, creating
          this website has been a challenge for me. Through the online course
          mentioned above, I learned how to create a website from scratch, and I
          also learned how to conduct further online research into how to
          improve it, as well as solve problems that I encountered on the way.
          Throughout this whole development process, I have been improving my
          coding skills, so I have found the learning experience to be quite
          satisfying and rewarding.
        </p>
        <a href="https://github.com/tanmichael1/Portfolio" target="_blank">
          <button type="button" className="btn-xlarge btn-outline-secondary">
            Github
          </button>
        </a>

        <br/><br/>
        <br/><br/>

        <h2>JavaScript Quiz</h2>
        <img src={"./images/Quiz.JPG"} alt="Quiz preview" />
        <p>
          My most recent project was to create a local Quiz. It takes multiple 
          choice questions defined in the JavaScript file, and generates a Quiz
          from them. The user can then take the quiz, and choose the respetictive 
          topic on the opening screen. Upon completion, it is possible to view the 
          results, including which answers are correct. 
          I created this using JavaScript, CSS and HTML.
        </p>

        <p>
          This project is also intended to be the base level version of my next project,
          which will be a more advanced version of a Quiz website. It will build upon
          this project and will include more features including users, scoreboards,
          and a database. 
        </p>
        <a href="https://github.com/tanmichael1/Quiz-Javascript" target="_blank">
          <button type="button" className="btn-xlarge btn-outline-secondary">
            Github
          </button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
