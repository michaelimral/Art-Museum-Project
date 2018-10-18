//Dependency imports
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Pages imports
import Navbar from "./Pages/Navbar";
import AddPage from "./Pages/AddPage";
import ArtPieceCollection from "./Pages/ArtPieceCollection";
import FindPage from "./Pages/FindPage";
import ArtPiece from "./Pages/ArtPiece";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';

//Router imports
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <div>
              <Router path = "/" component = {Home} />
              <Route path = "/add" component = {AddPage} />
              <Route path = "/find" component = {FindPage} />
              <Route path="/signin" component={SignIn} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
