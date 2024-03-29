import React from "react";

function CV() {
  return (
    <div className="cv">
      <h1>View CV</h1>

      <form id="cv" className="cv">
        <div className="cv1stHalf">
          <img className="cv" src={"./images/CV.JPG"} alt={"CV Preview"} />
        </div>
        <div className="cv2ndHalf">
          <a
            aria-pressed="true"
            className="btn btn-lg active contact"
            href="https://drive.google.com/file/d/1Lb88WupaiHW0PW8rBrvSb9EWfRrJk4pC/view?usp=sharing"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
      </form>
    </div>
  );
}

export default CV;
