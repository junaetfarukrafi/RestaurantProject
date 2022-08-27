import React from "react";
import aboutimage from "../../images/about.png";

function About2() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam
          blanditiis alias quidem quae quo dignissimos aliquid! Quia, ea
          laborum?
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default About2;
