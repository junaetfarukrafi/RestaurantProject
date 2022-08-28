import React, { Component } from "react";
import Products from "../header/Products";
import About2 from "../header/About2";
import Contact2 from "../header/Contact2";

class Home extends Component {
  render() {
    document.title = "Restaurant";
    return (
      <div>
        <Products />
        <About2 />
        <Contact2 />
      </div>
    );
  }
}

export default Home;
