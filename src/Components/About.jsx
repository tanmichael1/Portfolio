import React from "react";

function About() {
  return (
    <div id="about" className="about">
      <div style={{ width: "65vw", margin: "auto" }}>
        <h1>About</h1>
        {/* py-4 */}

        <p>
          I’m in my third and final year of a Bachelor of Science degree at
          Victoria University, majoring in both computer science and computer
          graphics.
        </p>
        <p>
          I have always been interested in computers and digital technology, and
          my academic strengths in school included Math and Physics. I would
          like to create software for people to use and to be helpful in their
          lives. In our ever-advancing world, software is one of the key
          components in the growth and development of new technology, and I
          decided whilst at school that I wanted to be a part of this industry.
        </p>
        <p>
          If I’m not coding or working on my university degree, I’m watching
          movies or writing reviews.
        </p>
      </div>
    </div>
  );
}

export default About;
