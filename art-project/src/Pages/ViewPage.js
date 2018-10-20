//dependency imports
import React, { Component } from "react";

//page imports
import ArtPiece from "./ArtPiece";

class ViewPage extends Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item"></li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
}

export default ViewPage;
