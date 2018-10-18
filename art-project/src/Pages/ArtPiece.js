import React, { Component } from "react";
import axios from 'axios';

class ArtPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        artist: '',
        id: 0
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8080/art')
    .then(data => this.setState({
      title: data.data[0].title,
      artist: data.data[0].artist,
      id: data.data[0].id
    }))
    .then(() => console.log(this.state))
    .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default ArtPiece;
