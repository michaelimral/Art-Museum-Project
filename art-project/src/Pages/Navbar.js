//Dependency Imports
import React, { Component } from "react";

//Page imports

//Router Imports
import { Link } from "react-router-dom";

//Navbar at the top of all pages
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav bg-light">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  ArtTracker2000
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/find" className="nav-link">
                  Find
                </Link>
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
