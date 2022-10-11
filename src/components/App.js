import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    //make API call to get data
    //dispatch action
    const { store } = this.props;

    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log("state", this.props.store.getState());
  }

  render() {
    const { list } = this.props.store.getState();
    console.log("STATE", this.props.store.getState());

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
