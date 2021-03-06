import React from "react";

import LoginModal from "../modal/LoginModal";
import SignupModal from "../modal/SignupModal";


class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModalLogin: false,
      showModalSignup: false,
    }
}

openModalLogin = () => {
  this.setState({ showModalLogin: true });
};

closeModalLogin = () => {
  this.setState({ showModalLogin: false });
};

openModalSignup = () => {
  this.setState({ showModalSignup: true });
};

closeModalSignup = () => {
  this.setState({ showModalSignup: false });
};

  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" id="navBrand" href="#">
            <img id="navLogo" src="assets/img/flLogo.svg" />
          </a>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browse Jobs
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto">
            <li
              className="nav-item"
              style={{
                paddingRight: "15px"
              }}
            >
              <a className="nav-link active" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal" data-bs-whatever="Log In" onClick={this.openModalLogin}>
                Log In
              </a>

            </li>

            <li className="nav-item topNavButtonPad">

              <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#SignupModal" data-bs-whatever="Signup" onClick={this.openModalSignup}>
                Sign Up
              </a>

            </li>

            {this.state.showModalLogin && (<LoginModal/>)}
            {this.state.showModalSignup && (<SignupModal/>)}
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
