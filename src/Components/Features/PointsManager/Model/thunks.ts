import { CoordinateType } from './../../../../services/API/API'
import { ActionsType as ActionsTypeError } from './../../Errors/model/actions'
import { Actions as ActionsError } from './../../Errors/model/actions'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../../Store/store'
import { ActionsType as ActionsTypePoint, Actions as ActionsPoints } from './actions'
import { PointAPI } from '../../../../services/API/API'
import { Codes } from '../../Errors/codes'

type ThunkType = ThunkAction<
	Promise<void>,
	AppStateType,
	unknown,
	ActionsTypePoint | ActionsTypeError
>

export const getGeoLocOfPoint = (location: string): ThunkType => {
	return async (dispatch) => {
		let data = await PointAPI.getCoordinateOfPoint(location)
		if (data.status === Codes.OK) dispatch(ActionsPoints.addPoint(data.results[0]))
		else if (data.status === Codes.NoRsult)
			dispatch(ActionsError.error('The point was not found'))
	}
}

export const getAddressOfPoint = (coordinate: CoordinateType, id: string): ThunkType => {
	return async (dispatch) => {
		let data = await PointAPI.getAddressOfPoint(coordinate)
		if (data.status === Codes.OK)
			dispatch(ActionsPoints.changePositionPoint(data.results[0], id))
		else if (data.status === Codes.NoRsult)
			dispatch(ActionsError.error('The point was not found'))
		console.log(data)
	}
}
