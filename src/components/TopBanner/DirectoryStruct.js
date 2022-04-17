import React from "react";

class DirectoryStruct extends React.Component {
  render() {
    return (
      <div id="directoryDisplay">
        <span className="directoryText">Freelancer</span>
        <i className="fa fa-angle-right" />
        <span className="directoryText">Jobs</span>
        <i className="fa fa-angle-right" />
        <span className="directoryText">Browse All Jobs</span>
        <i className="fa fa-angle-right" />
        <span className="directoryText">1</span>
      </div>
    );
  }
}

export default DirectoryStruct;
