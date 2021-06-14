import React from "react";

function CV() {
  return (
    <div id="cv" className="cv">
      <h1>View CV</h1>

      {/* Change - Length of CV */}

      <form className="cv" action="">
        <div className=" cv1stHalf">
          <img
            style={{ marginLeft: "0vw" }}
            className="cv"
            src={"./images/CV.JPG"}
            alt={"CV Preview"}
          />
        </div>
        <div className=" cv2ndHalf" style={{ paddingBottom: "2vh" }}>
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

      {/* </div>*/}
    </div>
  );
}

export default CV;
