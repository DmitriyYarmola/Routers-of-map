import { ThunkAction } from "redux-thunk"
import { AppStateType } from "./store"
import { ActionsType, Actions } from './actions'
import { PointAPI } from "../../../services/API/API"

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getGeoLocOfPoint = (location: string): ThunkType => {
    return async (dispatch) => {
        let results = await PointAPI.getCoordinateOfPoint(location)
        dispatch(Actions.addPoint(results[0]))
        console.log(results)
    }
}