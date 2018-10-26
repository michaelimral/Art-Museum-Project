//dependency imports
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//page imports
import Navbar from "./Pages/Navbar";
import AddPage from "./Pages/AddPage";
import FindPage from "./Pages/FindPage";
import ArtPiece from "./Pages/ArtPiece";
import EditPiece from "./Pages/EditPiece";
import ViewPage from './Pages/ViewPage';
import FindContainer from './Pages/FindContainer';
import MuseumPage from './Pages/MuseumPage';

//router imports
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <div>
              <Route path="/add" component={AddPage} />
              <Route path="/find" component={MuseumPage} />
              <Route path="/view" component={ViewPage} />
              <Route path="/findpiece" component={FindPage} />
              <Route path="/select" component={FindContainer} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
