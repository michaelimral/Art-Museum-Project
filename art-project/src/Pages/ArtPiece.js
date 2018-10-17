import React, { Component } from "react";

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
    };
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
                  {this.state.title}    </p>
          <a href="#" className="btn btn-primary">
            {this.state.info}
          </a>
        </div>
      </div>
    );
  }
}

export default ArtPiece;
