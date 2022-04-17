import React from "react";
import FooterHelp from "./FooterHelp";
import FooterFreelancer from "./FooterFreelancer";
import FooterAbout from "./FooterAbout";
import FooterTerms from "./FooterTerms";
import FooterApps from "./FooterApps";
import HorizontalLine from "../HorizontalLine";
import FooterCopyrights from "./FooterCopyrights";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-dark sticky-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center text-md-start col-12">
              <FooterHelp />
              <p className="footerPara">
                <i className="icon-globe" />
                 English - US (International)
              </p>
              <p className="footerPara">
                {" "}
                <i className="icon ion-help-circled" />
                 Help & Support
              </p>
            </div>
            <FooterFreelancer></FooterFreelancer>
            <FooterAbout></FooterAbout>
            <FooterTerms></FooterTerms>
            <FooterApps></FooterApps>
          </div>
          <HorizontalLine></HorizontalLine>
          <FooterCopyrights></FooterCopyrights>
        </div>
      </footer>
    );
  }
}

export default Footer;
