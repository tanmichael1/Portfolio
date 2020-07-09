import React from "react";

function CV() {
  return (
    <div id="cv" className="cv">
      <h1>Access CV</h1>
      <form action="">
        <div className="row">
          <img className="cv" src={"./images/CV.JPG"} />
        </div>
        <div style={{ paddingBottom: "2vh" }}>
          <a
            href="https://drive.google.com/open?id=1AVsRN4cylEYVA1_xmsVs55wz63l4eLuR"
            target="_blank"
            rel="noopener"
          >
            <button type="button" className="btn btn-lg active">
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
