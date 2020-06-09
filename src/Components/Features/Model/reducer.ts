import { ADD_POINT, DELETE_POINT, GET_GEOLOCATION } from "./actions";
import { ActionsType } from "./actions";
import { LocationInfoType, CoordinateType } from "../../../services/API/API";

let initialState = {
  points: [] as LocationInfoType[],
  geolocation: null as CoordinateType | null
};

type InitialStateType = typeof initialState;

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POINT:
      return {
        ...state,
        points: [...state.points, action.payload],
      };
    case DELETE_POINT:
      return {
        ...state,
        points: [...state.points.filter((point) => point.place_id !== action.payload)],
      };
    case GET_GEOLOCATION:
      return {
		  ...state,
			geolocation: action.payload
	  };
    default:
      return state;
  }
};
