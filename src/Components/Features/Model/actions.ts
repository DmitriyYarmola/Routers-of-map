import { InferActionsType } from './store'
export const ADD_POINT = 'ADD_POINT'
export const DELETE_POINT = 'DELETE_POINT'

export type ActionsType = InferActionsType<typeof Actions>

export type PointType = {
	value: string
	id: string
}

export const Actions = {
	addPoint: (payload: PointType) =>
		({
			type: ADD_POINT,
			payload,
		} as const),
	deletePoint: (payload: string) =>
		({
			type: DELETE_POINT,
			payload,
		} as const),
}
