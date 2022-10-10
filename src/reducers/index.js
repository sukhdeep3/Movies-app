export default function (state = [], action) {
  if (action === "ADD_MOVIES") {
    return action.movies;
  }
  return state;
}
