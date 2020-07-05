import React from "react";

function CV() {
  return (
    <div id="cv" className="cv">
      <h1>Access CV</h1>
      <form action="">
        <div class="row">
          <img class="cv" src={"./images/CV.JPG"} />
        </div>
        <div style={{ paddingBottom: "2vh" }}>
          <a
            target="_blank"
            href="https://drive.google.com/open?id=1AVsRN4cylEYVA1_xmsVs55wz63l4eLuR"
          >
            <button class="btn btn-lg active">View CV</button>
          </a>
        </div>
      </form>

      {/* </div>*/}
    </div>
  );
}

export default CV;
