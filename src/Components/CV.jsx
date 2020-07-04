import React from "react";

function CV() {
  return (
    <div id="cv" className="cv" style={{ marginBottom: "150px" }}>
      {/*<div style={{ width: "65vw", margin: "auto" }}>*/}
      <h1>Access CV</h1>
      <img class="cv" src={"./images/CV.JPG"} style={{ marginRight: "50px" }} />
      <a
        target="_blank"
        href="https://drive.google.com/open?id=1AVsRN4cylEYVA1_xmsVs55wz63l4eLuR"
      >
        <button
          class="btn btn-lg active"
          /*class="btn btn-primary btn-lg active"*/
        >
          View CV
        </button>
      </a>
      {/* </div>*/}
    </div>
  );
}

export default CV;
