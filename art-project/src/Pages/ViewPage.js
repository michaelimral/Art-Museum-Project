//dependency imports
import React, { Component } from "react";

//page imports
import ArtPiece from "./ArtPiece";
import EditPiece from './EditPiece';

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
      info: "",
      image:"",
      editStatue: false
    };
    this.editPiece = this.editPiece.bind(this);
  }

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
          info: response.data[this.props.id].data.info,
          image: response.data[this.props.id].data.image
        });
      })
      .catch(e => console.log(e));

      console.log(this.props.changeView)
  }

  editPiece(){
    this.setState({editStatus: true})
  }

  render() {
    return (
      <div>
        {this.state.editStatus ? <EditPiece {...this.props} /> : (<div className="container">
          <div className="w-100 m-4">
            <ul className="list-group">
              <li className="list-group-item"><img src={this.state.image} /></li>
              <li className="list-group-item">{this.state.title}</li>
              <li className="list-group-item">{this.state.artist}</li>
              <li className="list-group-item">{this.state.year}</li>
              <li className="list-group-item">{this.state.id}</li>
              <li className="list-group-item">{this.state.location}</li>
            <li className="list-group-item">{this.state.info}</li>
          <li className="list-group-item"><button className="btn" onClick={this.editPiece}>Edit</button></li>
          <li className="list-group-item"><button className="btn" onClick={this.props.changeView}>Go Back</button></li>
            </ul>
          </div>
        </div>)}
      </div>
    );
  }
}

export default ViewPage;
