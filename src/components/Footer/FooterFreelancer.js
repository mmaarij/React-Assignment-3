import React from "react";

class FooterFreelancer extends React.Component {
  render() {
    return (
      <div className="col">
        <h6
          style={{
            fontWeight: "bold"
          }}
        >
          Freelancer
          <br />
        </h6>
        <ul className="footerLists">
          <li>Categories </li>
          <li>Projects </li>
          <li>Contests </li>
          <li>Freelancers </li>
          <li>Enterprise </li>
          <li>Preferred Freelancer Program </li>
          <li>Project Management </li>
          <li>Local Jobs </li>
          <li>Photo Anywhere </li>
          <li>Showcase </li>
          <li>API for Developers </li>
        </ul>
      </div>
    );
  }
}

export default FooterFreelancer;
