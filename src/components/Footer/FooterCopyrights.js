import React from "react";

class FooterCopyrights extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col col-3 footerEnd1">
          <p>
            58,844,312 Registered Users
            <br />
          </p>
        </div>
        <div className="col col-3 footerEnd1">
          <p>
            21,370,340 Total Jobs Posted 
            <i className="fa fa-question-circle" />
            <br />
          </p>
        </div>
        <div className="col col-6 footerEnd2">
          <p>
            Freelancer ® is a registered Trademark of Freelancer Technology Pty
            Limited (ACN 142 189 759)
            <br />
            Copyright © 2022 Freelancer Technology Pty Limited (ACN 142 189 759)
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default FooterCopyrights;
