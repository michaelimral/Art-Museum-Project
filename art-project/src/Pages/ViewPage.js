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
          info: response.data[this.props.id].data.info
        });
      })
      .catch(e => console.log(e));
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
              <li className="list-group-item"><img src="https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/1/a0/1a034797-96c4-5fe7-97f2-856a339d8127/4f73497014aee.image.jpg" /></li>
              <li className="list-group-item">{this.state.title}</li>
              <li className="list-group-item">{this.state.artist}</li>
              <li className="list-group-item">{this.state.year}</li>
              <li className="list-group-item">{this.state.id}</li>
              <li className="list-group-item">{this.state.location}</li>
            <li className="list-group-item">{this.state.info}</li>
          <li className="list-group-item"><button className="btn" onClick={this.editPiece}>Edit</button></li>
            </ul>
          </div>
        </div>)}
      </div>
    );
  }
}

export default ViewPage;
