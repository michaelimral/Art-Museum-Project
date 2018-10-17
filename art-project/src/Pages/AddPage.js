import React, { Component } from "react";

//Parent component for the add art page
//Read in the users inputs and converts it to an ArtPiece component
class AddPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      year: 0,
      id: "",
      location: "",
      info: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleID = this.handleID.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleTitle(e, newTitle) {
    this.setState({ title: newTitle });
    console.log(this.state.title);
  }

  handleArtist(e) {
    this.setState({ artist: e.target.value });
    console.log(this.state.artist);
  }

  handleYear(e) {
    this.setState({ year: e.target.value });
    console.log(this.state.year);
  }

  handleID(e) {
    this.setState({ id: e.target.value });
    console.log(this.state.id);
  }

  handleLocation(e) {
    this.setState({ location: e.target.value });
    console.log(this.state.location);
  }

  handleInfo(e) {
    this.setState({ info: e.target.value });
    console.log(this.state.info);
  }

  render() {
    return (
      <div>
        <h2>Add a piece of art</h2>
        <form>
          <div>
            <div className="input-group-prepend">
              <label className="input-group-text" id="inputGroup-sizing-lg">
                Name of Painting
              </label>
            </div>
            <input
              type="text"
              name="title"

              className="form-control mb-4"
              aria-describedby="inputGroup-sizing-lg"
              onChange={e => {
                console.log(e.target.value)
                this.handleTitle(e, e.target.value )
              }}
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
            state={this.state.year}
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
            <label className="input-group-text" id="inputGroup-sizing-lg">
              Current Location
            </label>
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
              className="form-control"
              name="info"
              value={this.state.info}
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              onChange={this.handleInfo}
            />
          </div>
          <input
            className="btn btn-submit btn-primary"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default AddPage;
