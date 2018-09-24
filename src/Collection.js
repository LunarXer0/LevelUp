import React, { Component } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { MovieGrid } from "./MoviesList";

class Collection extends Component {
  componentDidMount() {
    console.log("Mounted!");
  }
  render() {
    return (
      <div>
        <h1>My Collection</h1>
        <MovieGrid>
          {Object.keys(this.props.movies).map(key => (
            <Movie key={key} movie={this.props.movies[key]} />
          ))}
        </MovieGrid>
      </div>
    );
  }
}

export default Collection;
