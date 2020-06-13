import { InferActionsType } from '../../Store/store'
import { LocationInfoType } from '../../../../services/API/API'
export const ADD_POINT = 'ADD_POINT'
export const DELETE_POINT = 'DELETE_POINT'
export const MOVED_POINTS = 'MOVED_POINTS'
export const CHANGED_POSITION_POINTS = 'CHANGED_POSITION_POINTS'
export type ActionsType = InferActionsType<typeof Actions>

export const Actions = {
	addPoint: (payload: LocationInfoType) =>
		({
			type: ADD_POINT,
			payload,
		} as const),
	deletePoint: (payload: string) =>
		({
			type: DELETE_POINT,
			payload,
		} as const),
	movePoints: (payload: LocationInfoType[]) =>
		({
			type: MOVED_POINTS,
			payload,
		} as const),
	changePositionPoint: (payload: LocationInfoType, id: string) =>
		({
			type: CHANGED_POSITION_POINTS,
			payload,
			id,
		} as const),
}
