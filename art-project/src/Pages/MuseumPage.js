import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MuseumPage extends Component {

  render() {
    //parent component for the FindContainer page
    //shows supported museums (only the St. Louis Art Museum currently)
    return (
      <div>
      <div>
      <div className="m-4">
        <h1 className="display-5 font-weight-normal">Museums</h1>
        </div>
        <div>
          <div className="col-sm">
            <div className="card m-4" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">St. Louis Art Museum</h5>
                  <Link to="/select">View</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

}

export default MuseumPage;
