//Dependency imports
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Pages imports
import Navbar from "./Pages/Navbar";
import AddPage from "./Pages/AddPage";
import ArtPieceCollection from './Pages/ArtPieceCollection';
import FindPage from './Pages/FindPage';

//Router imports
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <AddPage />
          <FindPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
