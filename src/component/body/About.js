import React from "react";
import aboutimage from "../../images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  document.title = "About";
  return (
    <div>
      <div className="about-text2">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam
          blanditiis alias quidem quae quo dignissimos aliquid! Quia, ea
          laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          quam blanditiis alias quidem quae quo dignissimos aliquid! Quia, ea
          laborum?
        </p>
      </div>

      <div id="about">
        <div className="about-text">
          <h1>CHECK OUR MENU</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam
            blanditiis alias quidem quae quo dignissimos aliquid! Quia, ea
            laborum?
          </p>

          <Link to="/menu">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="about-image">
          <img src={aboutimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
