import React, { Component } from 'react';

class ArtPiece extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: this.props.title,
        artist: this.props.artist,
        year: this.props.year,
        id: this.props.id,
        location: this.props.location,
        info: this.props.info
      }
    }

  render() {
    return (
      <div>
          
      </div>
    );
  }

}

export default ArtPiece;
