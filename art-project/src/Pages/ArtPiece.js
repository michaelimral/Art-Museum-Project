import React, { Component } from "react";

class ArtPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    fetch('http://localhost:3000/posts')
    .then(data => data.text())
    .then(text => console.log(text))
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default ArtPiece;
