import React, { useEffect, useCallback } from 'react'
import { SearchLocation } from '../Features/PointsManager/SearchLocation'
import { Points } from '../Features/PointsManager/Points'
import { useDispatch, useSelector } from 'react-redux'
import { Actions as ActionsMap } from '../Features/SimpleMap/Model/actions'
import { Actions as ActionsError } from './../Features/Errors/model/actions'
import { CoordinateType } from '../../services/API/API'
import { AppStateType } from '../Features/Store/store'
import { getRandomNumber } from './../Features/RandomNumber/index'
import { Map } from '../Features/SimpleMap/Templates'
import { message } from 'antd'
import 'antd/dist/antd.css'
import './style.sass'

export const Page = () => {
	const dispatch = useDispatch()
	const geolocation = useSelector((state: AppStateType) => state.MapReducer.geolocation)
	const points = useSelector((state: AppStateType) => state.PointsReducer.points)
	const error = useSelector((state: AppStateType) => state.ErrorReducer.error)

	const currentLocation = useSelector(
		(state: AppStateType) => state.PointsReducer.currentPoint
	)
	const onSetGeoloccation = useCallback(
		(geolocation: CoordinateType) => {
			dispatch(ActionsMap.getGeolocation(geolocation))
		},
		[dispatch]
	)
	useEffect(() => {
		const success = (position: any) => {
			let lat = position.coords.latitude
			let lng = position.coords.longitude
			onSetGeoloccation({ lat, lng })
		}

		const error = () => {
			let lat = 0
			let lng = getRandomNumber(0, 180)
			onSetGeoloccation({ lat, lng })
		}

		if (!navigator.geolocation) alert('Geolocation is not supported by your browser')
		else navigator.geolocation.getCurrentPosition(success, error)
	}, [onSetGeoloccation])

	useEffect(() => {
		if (error) {
			message.error(error)
			dispatch(ActionsError.error(''))
		}
	}, [dispatch, error])

	return (
		geolocation && (
			<div className='page_points-map'>
				<div className='points'>
					<div className='add-point'>
						<SearchLocation />
					</div>
					<div className='list-point'>
						<Points />
					</div>
				</div>
				<div className='map'>
					<Map
						markers={points}
						currentLocation={currentLocation?.geometry.location}
						geolocation={geolocation}
					/>
				</div>
			</div>
		)
	)
}
