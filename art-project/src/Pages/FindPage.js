import React, { Component } from "react";
import ArtPiece from "./ArtPiece";
import axios from "axios";

class FindPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: [],
      length: 0
    };
  }

  //gets the values of the art array from db.json and assisgns them to state
  componentDidMount() {
    axios
      .get("http://localhost:8080/art")
      .then(response => {
        this.setState({
          pieces: response.data,
          length: response.data.length
        });
      })
      .catch(e => console.log(e));
  }


  render() {
    return (
      //state maps each component with an id prop corresponding to their id in db.json
      <div>
        <div className="container">
          <div className="row">
            {this.state.pieces.map(data => {
              return <ArtPiece id={data.id - 1} key={data.id - 1} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FindPage;
