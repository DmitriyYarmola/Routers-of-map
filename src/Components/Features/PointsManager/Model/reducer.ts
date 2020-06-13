import { ADD_POINT, DELETE_POINT, MOVED_POINTS, CHANGED_POSITION_POINTS } from './actions'
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
		case MOVED_POINTS:
			return {
				...state,
				points: action.payload,
			}
		case CHANGED_POSITION_POINTS:
			return {
				...state,
				points: [
					...state.points.map((item) => {
						if (item.place_id === action.id) return action.payload
						else return item
					}),
				],
			}

		default:
			return state
	}
}
