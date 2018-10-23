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
    this.sortPieces = this.sortPieces.bind(this);
    this.printSearch = this.printSearch.bind(this);
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
      })
      .then(() => this.sortPieces())
      .catch(e => console.log(e));
  }

  //sorts alphabetically by title
  sortPieces() {
    let pieces = this.state.pieces;

    pieces.sort((a, b) => {
      let x = a.data.title.toLowerCase();
      let y = b.data.title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    this.setState({ pieces: pieces });
  }

  //support for searching by title (will add full functionallity if time)
  handleSearch() {
    let value = this.state.pieces;
    let searchValue = this.state.searchValue;
    console.log(searchValue);
    const result = value.find(
      term => term.data.title === searchValue
    );
    console.log(result);
    return result;
  }

  updateSearch(e) {
    this.setState({ searchValue: e.target.value });
  }

  printSearch(e){
    e.preventDefault();


       }


  render() {
    const defaultValue = (<div className="row">

      {this.state.pieces.map(data => {
        return (<ArtPiece id={data.id - 1} key={data.id - 1} />)
      })}
    </div>);
    return (
      //state maps each component with an id prop corresponding to their id in db.json
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={this.updateSearch}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={this.printSearch}
          >
            Search
          </button>
        </form>
        <div className="container">
            {defaultValue}
        </div>
      </div>
    );
  }
}

export default FindPage;
