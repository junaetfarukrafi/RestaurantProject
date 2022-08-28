import React from "react";
import aboutimage from "../../images/about.png";
import { Link } from "react-router-dom";

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
        <Link to="/about">
          <button>Read More</button>
        </Link>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default About2;
