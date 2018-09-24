import React, { Component } from "react";
import { Input } from "antd";
import { MovieGrid as ResultsGrid } from "./MoviesList";
import Movie from "./Movie";

const Search = Input.Search;
const API_KEY = "a5326823e52c473ffda44ace64b7d44d";

class SearchView extends Component {
  state = {
    searchResults: []
  };
  async getMovies(title) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
    );
    const movies = await res.json();
    this.setState({
      searchResults: movies.results
    });
  }
  render() {
    const results = this.state.searchResults || [];
    return (
      <React.Fragment>
        <h1>Search Movie</h1>
        <Search
          placeholder="Search By Movie Title"
          onChange={e => this.getMovies(e.target.value)}
        />
        <ResultsGrid>
          {results.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </ResultsGrid>
      </React.Fragment>
    );
  }
}

export default SearchView;
