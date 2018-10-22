//dependency imports
import React, { Component } from "react";

//page imports
import FindPage from "./FindPage";
import ViewPage from "./ViewPage";

//extra imports
import axios from "axios";
import { Link } from "react-router-dom";
import Img from 'react-image';

class ArtPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      year: "",
      id: "",
      location: "",
      info: "",
      showView: false
    };

    this.showView = this.showView.bind(this);
  }

  //gets the values from db.json and sets them to state
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

  showView(){
    this.setState({showView: true});
  }

  render() {
    const display2 = <ViewPage key={this.props.id} id={this.props.id} />
    return (
      //card element with title, artist, and a view button
      <div>
        {this.state.showView ? display2 : (<div className="col-sm">
            <div className="card m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src="https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/1/a0/1a034797-96c4-5fe7-97f2-856a339d8127/4f73497014aee.image.jpg" />
              <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">{this.state.artist}</p>
              <a className="btn btn-submit" href="#" onClick={this.showView}>View</a>
              </div>
            </div>
          </div>)}
      </div>
    );
  }
}

export default ArtPiece;
