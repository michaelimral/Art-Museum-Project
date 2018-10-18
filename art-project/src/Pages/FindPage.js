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
        console.log(this.state.pieces)
      }
    )
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        {this.state.pieces.map(data => {
           return <ArtPiece id={data.id-1} />
        })}
      </div>
    );
  }
}

export default FindPage;
