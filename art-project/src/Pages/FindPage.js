import React, { Component } from "react";
import ArtPiece from "./ArtPiece";
import axios from "axios";

class FindPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: [],
      length: 0,
      searchValue: null
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  //gets the values of the art array from db.json and assisgns them to state
  componentDidMount() {
    axios
      .get("http://localhost:8080/art")
      .then(response => {
        this.setState({
          pieces: response.data,
          length: response.data.length
        });
        console.log(response.data)
      })
      .catch(e => console.log(e));
  }

  updateSearch(e){
    this.setState({searchValue: e.target.value});
  }

//support for searching by title
  handleSearch(e){
    e.preventDefault();
    let value = this.state.pieces;
    let searchValue = this.state.searchValue;
    console.log(searchValue);
    const result = value.find(term => term.data.title === searchValue);
    console.log(result);
    return result;
  }

  render() {
    return (
      //state maps each component with an id prop corresponding to their id in db.json
      <div>
        <div className="container">
          <div className="row">
            {this.state.pieces.map(data => {
                return <ArtPiece id={data.id - 1} key={data.id - 1} />

            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FindPage;
