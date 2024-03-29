import React from "react";

function Projects() {
  return (
    <div id="projects" className="projects">
      <div>
        <h1>Projects</h1>
        <div className="project">
          <h2>Notes App</h2>
          <img src={"./images/Notes.JPG"} alt="Notes App preview" />
          <p>
            This is a Notes app, which I made using React, JavaScript, CSS and
            HTML. You can create new notes and choose the colour of the new note
            using the colour picker. You can also edit and delete any of the
            notes. There's also a search bar which can be used, which will
            filter the notes depending on your input. This is my latest project.
          </p>
          <a
            href="https://github.com/tanmichael1/Notes-App"
            type="button"
            className="btn btn-xlarge btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <br />
        </div>
        <hr />

        <div className="project">
          <h2>To Do List</h2>
          <img src={"./images/ToDoList.JPG"} alt="To Do List preview" />
          <p>
            This is a To-do List app, which I made using React, JavaScript, CSS
            and HTML. In each list, you can edit the title, delete the whole
            list, as well as add new todo items, edit them, or remove them from
            the list. You can also mark the tasks as active or completed, along
            with filtering all the displayed tasks by current status (All Items,
            Active or Completed). You can also create brand new separate lists.
            This is my latest project.
          </p>
          <a
            href="https://github.com/tanmichael1/To-Do-List"
            type="button"
            className="btn btn-xlarge btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <br />
        </div>
        <hr />
        <div className="project">
          <h2>React Calculator</h2>
          <img src={"./images/Calculator.JPG"} alt="Calculator preview" />
          <p>
            This is my attempt at creating a calculator using React, JavaScript,
            CSS and HTML. There are 3 different calculators in this app, the
            Basic Form Calculator which allows you to add, subtract, multiple or
            divide the current number by a certain amount of your choice, the
            Visual Calculator which has a representation of the calculator with
            functional buttons, and the Equations Calculator which processes
            calculations that the user inputs.
          </p>
          <a
            href="https://github.com/tanmichael1/Calculator"
            type="button"
            className="btn btn-xlarge btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <br />
        </div>
        <hr />
        <div className="project">
          <h2>React JS Quiz</h2>
          <img src={"./images/ReactJS-Quiz.JPG"} alt="React quiz preview" />
          <p>
            My second iteration of a quiz website, which is publicly hosted. It
            uses React, JavaScript, CSS and HTML, and makes use of Firebase’s
            database and hosting features. Registered users are able to create,
            edit and delete their own quizzes. People are able to take the
            publicly created quizzes.
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
