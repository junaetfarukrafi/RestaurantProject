import React from "react";
// import Products from "./Products";
// import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div id="main">
        <div className="header-heading">
          <h3>It's Great Time For A Good test of burger</h3>
          <h1>
            <span>BURGER</span>FOR
            <br />
            WEEK
          </h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="header-btns">
            <a href="/contact" className="header-btn">
              Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
