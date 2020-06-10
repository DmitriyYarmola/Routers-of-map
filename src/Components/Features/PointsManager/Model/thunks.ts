import { ActionsType as ActionsTypeError } from './../../Errors/model/actions'
import { Actions as ActionsError } from './../../Errors/model/actions'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../../Store/store'
import { ActionsType, Actions } from './actions'
import { PointAPI } from '../../../../services/API/API'

type ThunkType = ThunkAction<
	Promise<void>,
	AppStateType,
	unknown,
	ActionsType | ActionsTypeError
>

export const getGeoLocOfPoint = (location: string): ThunkType => {
	return async (dispatch) => {
		try {
			let results = await PointAPI.getCoordinateOfPoint(location)
			dispatch(Actions.addPoint(results[0]))
		} catch (e) {
			dispatch(ActionsError.error(e))
		}
	}
}
