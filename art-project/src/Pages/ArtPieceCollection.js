import React, { Component } from 'react';
import ArtPiece from './ArtPiece';

class ArtPieceCollection extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
          <ArtPiece />
      </div>
    );
  }

}

export default ArtPieceCollection;
