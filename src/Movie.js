import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  render() {
    //const { title } = this.props.movie;
    const { title } = this.props.movie;
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
        {/* <p>{this.props.desc}</p> */}
      </div>
    );
  }
}

export default Movie;
