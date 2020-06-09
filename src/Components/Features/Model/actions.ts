import { CoordinateType } from './../../../services/API/API';
import { InferActionsType } from './store'
import { LocationInfoType } from '../../../services/API/API'
export const ADD_POINT = 'ADD_POINT'
export const DELETE_POINT = 'DELETE_POINT'
export const GET_GEOLOCATION = 'GET_GEOLOCATION'

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
	getGeolocation: (payload: CoordinateType) => ({
		type: GET_GEOLOCATION,
		payload
	} as const)
}
