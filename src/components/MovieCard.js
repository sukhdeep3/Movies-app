import React from "react";
import { addFavourites, removeFromFavourites } from "../actions";

class MovieCard extends React.Component {
  handleFavouritesClick = () => {
    const { movie } = this.props;

    this.props.dispatch(addFavourites(movie));
  };

  handleUnfavouritesClick = () => {
    const { movie } = this.props;

    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;
    // console.log(movie);
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>

            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnfavouritesClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouritesClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
