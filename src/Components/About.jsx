import React from "react";

function About() {
  return (
    <div id="about" className="about">
      <div style={{ width: "50vw", margin: "auto" }}>
        <h1>About</h1>
        {/* py-4 */}
        <h2>Hi, my name is Michael</h2>
        <p>
          I'm in my final year of computer science and computer graphics degree.
          If I'm not coding, I'm writing movie reviews.
        </p>

        <h2>Ambitions</h2>
        <p>
          I have always been interested in computers and digital technology, and
          my academic strengths include Maths and Physics. I would like to
          create software for people to use and to be helpful in their lives. In
          our ever-advancing world, software is one of the key components in the
          growth and development of new technology, and I want to be a part of
          the industry.
        </p>

        <h2>Experience</h2>
        <p>
          I am currently learning about computer programming and fundamental,
          technical concepts in computer science practice as my chosen programme
          of study for the second year is Computer Science and Computer
          Graphics. In the first semester of this year, I had been taking
          COMP261 (Algorithms and Data Structures), SWEN221(Software
          Development), NWEN241(Systems Programming) and MDDN241(3D Modelling
          and Animation 2). From this I have been learning numerous computer
          science related aspects including Java, C and C++, and on the computer
          graphics side, Maya, 3D Coat and Unity.
        </p>
      </div>
    </div>
  );
}

export default About;
