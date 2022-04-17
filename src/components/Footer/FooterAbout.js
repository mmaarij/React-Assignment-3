import React from "react";

class FooterAbout extends React.Component {
  render() {
    return (
      <div className="col">
        <h6
          style={{
            fontWeight: "bold"
          }}
        >
          About <br />
        </h6>
        <ul className="footerLists">
          <li>About us </li>
          <li>How it Works </li>
          <li>Security </li>
          <li>Investor </li>
          <li>Sitemap </li>
          <li>Stories </li>
          <li>News </li>
        </ul>
      </div>
    );
  }
}

export default FooterAbout;
