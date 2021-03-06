import React, { Component } from "react";
import { Link } from "react-router-dom";

//Navbar at the top of all pages
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="navbar nav bg-dark navbar-expand">
            <ul className="nav">
              <li className="nav-item navbar-brand">
                <Link to="/home" className="nav-link m-4">
                  ArtTracker2000
                </Link>
              </li>
              <li className="nav-item navbar-brand m-4">
                <Link to="/add" className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item navbar-brand m-4">
                <Link to="/find" className="nav-link">
                  Find
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
