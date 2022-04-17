import React from "react";
import InputField from "./InputField";

class SearchBar extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        id="searchContainer"
      >
        <div
          className="shadow d-flex justify-content-center align-items-center col-12 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12"
          id="searchBar"
        >
          <div
            className="input-group input-group-lg col-5"
            style={{
              paddingRight: "5px",
              paddingLeft: "5px"
            }}
          >
            <span className="input-group-text iconOpacity">
              <i className="fa fa-search" />
            </span>
            <InputField placeholder="Search Key" />
            <span className="input-group-text iconOpacity">
              <i className="fa fa-map-marker" />
            </span>
            <InputField placeholder="Online Job"/>
            <button className="btn searchBtn" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
