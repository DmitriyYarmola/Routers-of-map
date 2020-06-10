import { GET_GEOLOCATION } from './actions'
import { ActionsType } from './actions'
import { CoordinateType } from './../../../../services/API/API'

let initialState = {
	geolocation: null as CoordinateType | null,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case GET_GEOLOCATION:
			return {
				...state,
				geolocation: action.payload,
			}
		default:
			return state
	}
}
