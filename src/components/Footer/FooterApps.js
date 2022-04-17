import React from "react";

class FooterApps extends React.Component {
  render() {
    return (
      <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2 d-flex d-sm-flex d-md-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start col-12">
        <div id="appStoreDiv">
          <h6
            style={{
              fontWeight: "bold"
            }}
          >
            Apps
            <br />
          </h6>
          <ul className="footerLists">
            <li className="footerAppImagePadding">
              <img src="assets/img/appstore.svg" />
            </li>
            <li className="footerAppImagePadding">
              <img src="assets/img/googleplay.svg" />
            </li>
            <li id="socialIcons" className="footerAppImagePadding">
              <i className="fab fa-facebook" /> <>&nbsp;</>
              
              <i className="fa fa-twitter" /> <>&nbsp;</>
              
              <i className="fa fa-youtube-play" /> <>&nbsp;</>
              
              <i className="fa fa-instagram" /> <>&nbsp;</>
              
              <i className="fa fa-rss" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterApps;
