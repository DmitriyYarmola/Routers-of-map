import { ADD_POINT, DELETE_POINT } from './actions'
import { ActionsType } from './actions'
import { LocationInfoType } from '../../../../services/API/API'

let initialState = {
	points: [] as LocationInfoType[],
	currentPoint: null as LocationInfoType | null,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case ADD_POINT:
			return {
				...state,
				points: [...state.points, action.payload],
				currentPoint: action.payload,
			}
		case DELETE_POINT:
			return {
				...state,
				points: [...state.points.filter((point) => point.place_id !== action.payload)],
			}
		default:
			return state
	}
}
