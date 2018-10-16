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
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState = ({title: 'hello'})
    console.log(this.state.title)
  }

  render() {
    return (
      <div>
        <h2>Add a piece of art</h2>
        <form>
          <div classname="input-group container-fluid">
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
            />
          </div>
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Artist
            </span>
          </div>
          <input
            type="text"
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Year
            </span>
          </div>
          <input
            type="text"
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Art ID
            </span>
          </div>
          <input
            type="text"
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Current Location
            </span>
          </div>
          <input
            type="text"
            className="form-control mb-4"
            aria-describedby="inputGroup-sizing-lg"
          />
          <div className="input group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Information/Description
            </span>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
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
