//Dependency imports
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Pages imports
import Navbar from "./Pages/Navbar";
import AddPage from "./Pages/AddPage";

//Router imports
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <AddPage />
        </div>
      </Router>
    );
  }
}

export default App;
