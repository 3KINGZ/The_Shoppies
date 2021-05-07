import * as types from "../actions/types";

const initialState = {
  movies: null,
  loading: false,
  message: null,
};

const movieReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case types.SEARCH_MOVIE.REQUEST:
      return { ...state, loading: true };

    case types.SEARCH_MOVIE.SUCCESS:
      return { loading: false, movies: payload, message: null };

    case types.SEARCH_MOVIE.FAILURE:
      return { ...state, loading: false, message: payload };

    default:
      return state;
  }
};

export default movieReducer;
