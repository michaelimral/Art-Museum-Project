//dependency imports
import React, { Component } from "react";

//Router Imports
import { Link } from "react-router-dom";

//parent component for the Find Page
class FindContainer extends Component {
  render() {
    return (
      <div>
      <div className="m-4">
        <h1 className="display-5 font-weight-normal">St. Louis Art Museum</h1>
        </div>
        <div>
          <div className="col-sm">
            <div className="card m-4" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Modern Art</h5>
                  <Link to="/findpage">View</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindContainer;
