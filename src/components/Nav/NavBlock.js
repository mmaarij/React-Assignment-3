import React from "react";
import NavBar from "./NavBar";

class NavBlock extends React.Component {
  render() {
    return (
      <div className="fw-normal" id="navigation-block">
        <NavBar></NavBar>
      </div>
    );
  }
}

export default NavBlock;
