import { ERROR } from './actions'
import { ActionsType } from './actions'

let initialState = {
	error: null as any | null,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case ERROR:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state
	}
}
