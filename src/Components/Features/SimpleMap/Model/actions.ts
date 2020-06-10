import { InferActionsType } from '../../Store/store'
import { CoordinateType } from '../../../../services/API/API'

export const GET_GEOLOCATION = 'GET_GEOLOCATION'
export type ActionsType = InferActionsType<typeof Actions>

export const Actions = {
	getGeolocation: (payload: CoordinateType) =>
		({
			type: GET_GEOLOCATION,
			payload,
		} as const),
}
