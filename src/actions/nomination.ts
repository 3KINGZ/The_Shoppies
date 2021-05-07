import * as types from "./types";

export const addToNomination = (movie: any) => (
  dispatch: any,
  getState: any
) => {
  //   const { nominations } = getState().nominations;

  //   for (let i = 0; i < nominations.length; i++) {
  //     if (nominations[i].imdbID === movie.imdbID) {
  //       return;
  //     }
  //   }

  dispatch({ type: types.ADD_TO_NOMINATION, payload: movie });
};

export const removeFromNomination = (id: any) => (dispatch: any) => {
  dispatch({ type: types.REMOVE_FROM_NOMINATION, payload: id });
};
