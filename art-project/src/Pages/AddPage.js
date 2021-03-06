import React, { Component } from "react";
import ArtPiece from "./ArtPiece";
import axios from "axios";

//Parent component for the add art page
//Read in the users inputs and converts it to an ArtPiece component
class AddPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      year: 1,
      id: "",
      location: "",
      info: "",
      image: ""
    };

    //binding this to all functions within the component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleID = this.handleID.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  //handles the input field "submit" and posts the new data to db.json
  handleSubmit(e) {
    e.preventDefault();
    let data = this.state;
    axios
      .post("http://localhost:8080/art", { data })
      .catch(e => console.log(e));

    window.location.reload();
  }

  //dynamiclly updates title state attribute
  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  //dynamically updates artist state attribute
  handleArtist(e) {
    this.setState({ artist: e.target.value });
  }

  //dynamically updates creation year state attribute
  handleYear(e) {
    this.setState({ year: e.target.value });
  }

  //dynamically updates the piece's tracking id state attribute
  handleID(e) {
    this.setState({ id: e.target.value });
  }

  //dynamically updates the current location state attribute
  handleLocation(e) {
    this.setState({ location: e.target.value });
  }

  //dynamically updates the description state attribute
  handleInfo(e) {
    this.setState({ info: e.target.value });
  }

  //dynamically update the image state attribute
  handleImage(e) {
    this.setState({ image: e.target.value });
  }

  //dynamically resets all input fields and state attributes
  handleReset(e) {
    e.preventDefault();
    this.setState({
      title: "",
      artist: "",
      year: 0,
      id: "",
      location: "",
      info: ""
    });
  }

  render() {
    return (
      //creates an input form for adding art
      <div>
        <span className="m-4 ">
          <h1 className="display-5 font-weight-normal">Add a piece of art</h1>
        </span>
        <form autocomplete="off" className="form-group">
          <div className="form-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Title of Piece</span>
            </div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              className="form-control mb-4"
              aria-describedby="inputGroup-sizing-lg"
              onChange={this.handleTitle}
            />
          </div>
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Artist
            </span>
          </div>
          <input
            type="text"
            name="artist"
            value={this.state.artist}
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
            onChange={this.handleArtist}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Year
            </span>
          </div>
          <input
            type="number"
            name="year"
            value={this.state.year}
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
            onChange={this.handleYear}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Art ID
            </span>
          </div>
          <input
            type="text"
            name="id"
            value={this.state.id}
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
            onChange={this.handleID}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Current Location
            </span>
          </div>
          <input
            type="text"
            name="location"
            value={this.state.location}
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
            onChange={this.handleLocation}
          />
          <div className="input group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Information/Description
            </span>
            <textarea
              className="form-control mb-4"
              name="info"
              value={this.state.info}
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              onChange={this.handleInfo}
            />
          </div>
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Image Link
            </span>
          </div>
          <input
            type="text"
            name="location"
            value={this.state.image}
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
            onChange={this.handleImage}
          />
          <input
            className="btn btn-submit btn-primary m-4"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
          <input
            className="btn btn submit btn-danger"
            type="submit"
            value="Reset"
            name="reset"
            onClick={this.handleReset}
          />
        </form>
      </div>
    );
  }
}

export default AddPage;
