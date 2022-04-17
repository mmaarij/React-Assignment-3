import React from "react";
import "./Sidebar.css"
import HorizontalLine from "../HorizontalLine";

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar" className="col-12">
        <h6>My recent searches</h6>
        <HorizontalLine></HorizontalLine>
        <h6>Filter by:</h6>
        
        <p
          style={{
            fontWeight: "bold",
            fontSize: "12px"
          }}
        >
          Budget
        </p>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
              style={{
                marginRight: "4px",
                marginLeft: "-18px"
              }}
            />
            <label
              className="form-check-label"
              htmlFor="formCheck-1"
              style={{
                fontSize: "11px"
              }}
            >
              Fixed Price Projects
            </label>
          </div>
          <input
            type="text"
            style={{
              width: "60.8px"
            }}
            placeholder="min"
          />
          <span>  to  </span>
          <input
            type="text"
            style={{
              width: "60.8px"
            }}
            placeholder="max"
          />
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-2"
              style={{
                marginRight: "4px",
                marginLeft: "-18px"
              }}
            />
            <label
              className="form-check-label"
              htmlFor="formCheck-2"
              style={{
                fontSize: "11px"
              }}
            >
              Hourly Projects
            </label>
          </div>
          <input
            type="text"
            style={{
              width: "60.8px"
            }}
            placeholder="min"
          />
          <span>  to  </span>
          <input
            type="text"
            style={{
              width: "60.8px"
            }}
            placeholder="max"
          />
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-3"
              style={{
                marginRight: "4px",
                marginLeft: "-18px"
              }}
            />
            <label
              className="form-check-label"
              htmlFor="formCheck-3"
              style={{
                fontSize: "11px"
              }}
            >
              Contests
            </label>
          </div>
          <input
            type="text"
            style={{
              width: "60.8px"
            }}
            placeholder="min"
          />
          <span>  to  </span>
          <input
            type="text"
            style={{
              width: "60.8px"
            }}
            placeholder="max"
          />
        </div>
        <div className="dropdown show">
          <button
            className="btn dropdown-toggle"
            aria-expanded="true"
            data-bs-toggle="dropdown"
            type="button"
            style={{
              marginTop: "12px",
              width: "154.037px"
            }}
          >
            All Durations
          </button>
          <div className="dropdown-menu show">
            <a className="dropdown-item" href="#">
              Less than 1 week
            </a>
            <a className="dropdown-item" href="#">
              1 week - 4 weeks
            </a>
            <a className="dropdown-item" href="#">
              1 month - 3 months
            </a>
          </div>
        </div>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "12px"
          }}
        >
          Type
        </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="formCheck-4"
          />
          <label className="form-check-label" htmlFor="local jobs">
            Label
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="formCheck-6"
          />
          <label className="form-check-label" htmlFor="featured jobs">
            Label
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="formCheck-5"
          />
          <label className="form-check-label" htmlFor="recruiter jobs">
            Label
          </label>
        </div>
      </div>
    );
  }
}

export default Sidebar;
