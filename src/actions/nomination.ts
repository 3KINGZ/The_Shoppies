import * as types from "./types";

export const addToNomination = (movie: any) => (dispatch: any) => {
  dispatch({ type: types.ADD_TO_NOMINATION, payload: movie });
};

export const removeFromNomination = (id: any) => (dispatch: any) => {
  dispatch({ type: types.REMOVE_FROM_NOMINATION, payload: id });
};
