import React, { Component } from "react";


//Parent component for the overall add page
class AddPage extends Component {
  render() {
    return (
      <div>
        <h2>Add a piece of art</h2>
        <div classname="input-group container-fluid">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Name of Painting
            </span>
          </div>
          <input
            type="text"
            className="form-control mb-3"
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
          className="form-control mb-3"
          aria-describedby="inputGroup-sizing-lg"
        />
      <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Date
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
    );
  }
}

export default AddPage;
