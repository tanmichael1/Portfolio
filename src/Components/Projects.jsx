import React from "react";

function Projects() {
  return (
    <div id="projects" className="projects">
      <div>
        <h1>Projects</h1>

        <div className="project">
          <h2>React JS Quiz</h2>
          <img src={"./images/ReactJS-Quiz.JPG"} alt="React quiz preview" />
          <p>
            My second iteration of a quiz website, which will be publicly
            hosted. It uses React, JavaScript, CSS and HTML, and makes use of
            Firebase’s database and hosting features. Registered users are able
            to create, edit and delete their own quizzes. People will be able to
            take the publicly created quizzes. This is my current project, and I
            am continuing to work on this.
          </p>
          <a
            href="https://github.com/tanmichael1/Quiz-ReactJS"
            type="button"
            className="btn btn-xlarge btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <br />

          <a
            href="https://quiz---reactjs.web.app/"
            type="button"
            className="btn btn-xlarge btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>

        <hr />
        <div className="project">
          <h2>JavaScript Quiz</h2>
          <img src={"./images/Quiz.JPG"} alt="Quiz preview" />
          <p>
            I continued to improve my coding and problem-solving skills by
            working on my first iteration of a quiz website, using JavaScript,
            HTML and CSS. This work formed the base of a new project, my second
            iteration of a quiz website, which I am currently working on.
          </p>
          <p>
            It takes multiple choice questions defined in the JavaScript file,
            and generates a quiz from them. The user can then take the quiz, and
            choose the respetictive topic on the opening screen. Upon
            completion, it is possible to view the results, including which
            answers are correct. I created this using JavaScript, CSS and HTML.
          </p>
          <a
            href="https://github.com/tanmichael1/Quiz-Javascript"
            type="button"
            className="btn btn-xlarge btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <hr />
        <div className="project">
          <h2>Personal Portfolio</h2>
          <img
            src={"./images/Portfolio.JPG"}
            alt="Personal Portfolio preview"
          />
          <p>
            I have created this mainly using React, along with JavaScript, CSS
            and HTML. I learned these skills from taking Angela Yu’s online Web
            Development course. Additionally, for the contact page, I used
            EmailJS for the contact form which automatically sends messages to
            my personal email whenever the form is completed and submitted.
          </p>
          <p>
            This Portfolio Website is intended to be an overview of myself, what
            I’ve achieved, and who I am. Creating this website has been a
            challenge for me. Through the online course mentioned above, I
            learned how to create a website from scratch, and I also learned how
            to conduct further online research into how to improve it, as well
            as solve problems that I encountered on the way. Throughout this
            whole development process, I have been improving my coding skills,
            so I have found the learning experience to be quite satisfying and
            rewarding.
          </p>
          <a
            href="https://github.com/tanmichael1/Portfolio"
            type="button"
            className="btn btn-xlarge btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <hr />
        <div className="project">
          <h2>The Cinema Critic (Wordpress)</h2>
          <img src={"./images/Wordpress.JPG"} alt="Wordpress Site preview" />
          <p>
            This is a movie review website which I created as a school personal
            project back in 2014 as part of Year 10’s curriculum. Initially it
            was intended to be just as a blog with 50 movie reviews written by
            myself. After completing that project however, I continued to write
            reviews, and over the course of many years, I have now written over
            860 reviews. I have a passion and keen interest in film and tv, and
            so this was a passion project hobby for me, and I’m still active in
            running the site.
          </p>
          <p>
            I created this website using the free and open-source content
            management system Wordpress, and I used the language of HTML for my
            posts. Initially researched how to achieve the presentation on a
            digital level. I started creating this website before I actually
            learned how to code.
          </p>
          <a
            href="https://thecinemacritic.wordpress.com/"
            type="button"
            className="btn btn-xlarge btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
