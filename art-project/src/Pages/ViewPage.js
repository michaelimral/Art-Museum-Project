//dependency imports
import React, { Component } from "react";

//page imports
import ArtPiece from "./ArtPiece";

//
import axios from "axios";

class ViewPage extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:8080/art")
      .then(response => {
        console.log(response);
        console.log(response.data[this.props.id].data.title);
        console.log(this.props.id);
        this.setState({
          title: response.data[this.props.id].data.title,
          artist: response.data[this.props.id].data.artist,
          year: response.data[this.props.id].data.year,
          id: response.data[this.props.id].data.id,
          location: response.data[this.props.id].data.location,
          info: response.data[this.props.id].data.info
        });
        console.log(this.state);
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="w-100 m-4">
            <ul className="list-group">
              <li className="list-group-item">{this.state.title}</li>
              <li className="list-group-item">{this.state.artist}</li>
              <li className="list-group-item">{this.state.year}</li>
              <li className="list-group-item">{this.state.id}</li>
              <li className="list-group-item">{this.state.location}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPage;
