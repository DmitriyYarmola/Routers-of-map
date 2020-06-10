import { InferActionsType } from '../../Store/store'
export const ERROR = 'ERROR'

export type ActionsType = InferActionsType<typeof Actions>

export const Actions = {
	error: (payload: any) =>
		({
			type: ERROR,
			payload,
		} as const),
}
