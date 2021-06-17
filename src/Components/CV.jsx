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
            href="https://drive.google.com/file/d/1Lb88WupaiHW0PW8rBrvSb9EWfRrJk4pC/view?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            <button type="button" className="contact btn btn-lg active">
              View CV
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}

export default CV;
