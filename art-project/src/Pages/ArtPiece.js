import React, { Component } from "react";
import FindPage from "./FindPage";
import axios from "axios";

class ArtPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      year: "",
      id: "",
      location: "",
      info: ""
    };
  }

  //gets the values from db.json and sets them to the state
  componentDidMount() {
    axios
      .get("http://localhost:8080/art")
      .then(response => {
        this.setState({
          title: response.data[this.props.id].data.title,
          artist: response.data[this.props.id].data.artist,
          year: response.data[this.props.id].data.year,
          id: response.data[this.props.id].data.id,
          location: response.data[this.props.id].data.location,
          info: response.data[this.props.id].data.info
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      //card element with title and artist
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <p className="card-text">{this.state.artist}</p>
            <a href="#" className="btn btn-primary">
              View
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtPiece;
