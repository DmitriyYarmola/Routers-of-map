import { GET_GEOLOCATION, DISPTANCE_BETWEEN_POINTS } from './actions'
import { ActionsType } from './actions'
import { CoordinateType } from './../../../../services/API/API'

let initialState = {
	geolocation: null as CoordinateType | null,
	distanceBetweenPoints: null as number | null,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case GET_GEOLOCATION:
			return {
				...state,
				geolocation: action.payload,
			}
		case DISPTANCE_BETWEEN_POINTS:
			return {
				...state,
				distanceBetweenPoints: action.payload,
			}
		default:
			return state
	}
}
