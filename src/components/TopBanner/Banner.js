import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div
        className="d-lg-flex d-xl-flex d-xxl-flex align-items-center"
        id="topBanner"
      >
        <h1 id="topJobsTitle">Top Jobs</h1>
        <div className="d-flex flex-grow-1 justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-end justify-content-xl-end justify-content-xxl-end topNavButtonPad">
          <button
            className="btn btn-primary hire"
            id="wantToHire"
            type="button"
          >
            I want to Hire
          </button>
          <button className="btn btn-primary" id="wantToWork" type="button">
            I want to Work
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
