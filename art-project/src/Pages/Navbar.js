import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Add
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Find
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
