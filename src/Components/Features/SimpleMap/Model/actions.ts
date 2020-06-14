import { InferActionsType } from '../../Store/store'
import { CoordinateType } from '../../../../services/API/API'

export const GET_GEOLOCATION = 'GET_GEOLOCATION'
export const DISPTANCE_BETWEEN_POINTS = 'DISPTANCE_BEETWEN_POINTS'
export type ActionsType = InferActionsType<typeof Actions>

export const Actions = {
	getGeolocation: (payload: CoordinateType) =>
		({
			type: GET_GEOLOCATION,
			payload,
		} as const),
	setDistanceBetweenPoints: (payload: number) =>
		({
			type: DISPTANCE_BETWEEN_POINTS,
			payload,
		} as const),
}
