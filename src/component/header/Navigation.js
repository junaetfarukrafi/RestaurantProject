import React from "react";

import {Navbar,NavbarBrand} from 'reactstrap';

const  Navigation=() =>{
  return (
    <div>
        <Navbar color="dark" dark>
            <div className="container">
                <NavbarBrand>Restaurant Project</NavbarBrand>
            </div>
        </Navbar>
    </div>
  );
}

export default Navigation;