import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav bg-light">
          <ul className="nav nav-pills">
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item pull-right">
              <a className="nav-link">Sign In</a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
