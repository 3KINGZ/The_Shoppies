import axios from "axios";
import * as types from "./types";

const baseURL = "https://www.omdbapi.com/?apikey=d8866fe5";

export const searchMovies = (searchTerm: string) => async (dispatch: any) => {
  if (!searchTerm) {
    return;
  }

  dispatch({ type: types.SEARCH_MOVIE.REQUEST });

  const link = `${baseURL}&s=${searchTerm}`;

  try {
    const resp = await axios.get(link);
    dispatch({
      type: types.SEARCH_MOVIE.SUCCESS,
      payload: resp.data.Search,
    });
  } catch (error) {
    dispatch({
      type: types.SEARCH_MOVIE.FAILURE,
      payload: "Unable to fetch movies at this time",
    });
  }
};
