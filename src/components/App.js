import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import { StoreContext } from "../index";

class App extends React.Component {
  componentDidMount() {
    //make API call to get data
    //dispatch action
    const { store } = this.props;

    this.props.store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });

    this.props.store.dispatch(addMovies(data));

    console.log("state", this.props.store.getState());
  }

  isFavouriteMovie = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  changeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props.store.getState();

    const { list, favourites, showFavourites } = movies;
    console.log("STATE", this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isFavouriteMovie(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

class AppWrapper extends React.Component{
  render(){
    return(
      <StoreContext.Consumer>
        {(store)=> <App store={store}/>}
      </StoreContext.Consumer>
    )
  }
}

export default AppWrapper;
