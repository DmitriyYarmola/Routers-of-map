import { ADD_POINT, DELETE_POINT } from './actions'
import { PointType, ActionsType } from './actions'

let initialState = {
	points: [] as Array<PointType>,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case ADD_POINT:
			return {
				...state,
				points: [...state.points, action.payload],
			}
		case DELETE_POINT:
			return {
				...state,
				points: [...state.points.filter((point) => point.id !== action.payload)],
			}
		default:
			return state
	}
}
