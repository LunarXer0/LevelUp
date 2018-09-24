import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Collection from "./Collection";
import MovieDetail from "./MovieDetail";
import SearchView from "./Search";

class App extends Component {
  state = {
    MovieCollection: []
  };
  componentDidMount() {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      this.setState({ MovieCollection: movies });
    }
  }
  addMovieToCollection = movie => {
    const MovieCollection = { ...this.state.MovieCollection };
    MovieCollection[`movie${Date.now()}`] = movie;
    this.setState({
      MovieCollection
    });
    localStorage.setItem("movies", JSON.stringify(MovieCollection));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Collection {...props} movies={this.state.MovieCollection} />
              )}
            />
            <Route
              exact
              path="/search"
              render={props => (
                <SearchView
                  {...props}
                  addMovieToCollection={this.addMovieToCollection}
                />
              )}
            />
            <Route
              path="/:id"
              render={props => (
                <MovieDetail
                  {...props}
                  addMovieToCollection={this.addMovieToCollection}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
