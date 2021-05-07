import { combineReducers } from "redux";
import movies from "./movie.reducer";
import nominations from "./nomination.reducer";

const rootReducer = combineReducers({
  movies,
  nominations,
});

export default rootReducer;
