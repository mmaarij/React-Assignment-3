import React from "react";

class FooterTerms extends React.Component {
  render() {
    return (
      <div className="col">
        <h6
          style={{
            fontWeight: "bold"
          }}
        >
          Terms <br />
        </h6>
        <ul className="footerLists">
          <li>Privacy Policy </li>
          <li>Terms and Conditions </li>
          <li>Copyright Policy </li>
          <li>Code of Conduct </li>
          <li>Fees and Charges </li>
        </ul>
      </div>
    );
  }
}

export default FooterTerms;
