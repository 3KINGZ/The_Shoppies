import * as types from "../actions/types";
import { syncData } from "../utils";

const initialState = {
  nominations: syncData("nominations", []),
  nominationMap: syncData("nominationMap", {}),
};

const nominationsReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_NOMINATION:
      const key = payload.imdbID;

      const map: any = state.nominationMap;
      map[key] = true;

      return {
        nominations: [...state.nominations, payload],
        nominationMap: map,
      };

    case types.REMOVE_FROM_NOMINATION:
      const nominations = state.nominations.filter(
        (nomination: any) => nomination.imdbID !== payload
      );

      const nominationsMap: any = state.nominationMap;
      delete nominationsMap[payload];

      return {
        nominations: nominations,
        nominationMap: nominationsMap,
      };

    default:
      return state;
  }
};

export default nominationsReducer;
