// {
//     type: "ADD_MOVIES",
//     movies: [m1,m2,m3],
// }

// these variables are called action types.
export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

export const ACTION_SEARCH_RESULT = "ACTION_SEARCH_RESULT";

//These are called action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    // like this is a object
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

  // we will return a function and pass dispatch as a argument
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);

        //dispatch an action to store a movie
        //but we don't have access to dispatch
        // dispatch({type:'ACTION_SEARCH_RESULT', movie})
        dispatch(addMovieSearchResult(movie));

        // we will use thunk middleware because all reducers return object,
        //but this is returning a fuction we use function
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ACTION_SEARCH_RESULT,
    movie,
  };
}
