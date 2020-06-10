import React, { useEffect, useCallback } from 'react'
import { InputForAddPoint } from './../Features/InputForAddPoint'
import { Points } from '../Features/Points/index'
import './style.sass'
import { useDispatch, useSelector } from 'react-redux'
import { Actions } from '../Features/SimpleMap/Model/actions'
import { CoordinateType } from '../../services/API/API'
import { AppStateType } from '../Features/Model/store'
import { getRandomNumber } from './../Features/RandomNumber/index'
import { Map } from '../Features/SimpleMap/Templates'
export const Page = () => {
	const dispatch = useDispatch()
	const geolocation = useSelector((state: AppStateType) => state.MapReducer.geolocation)
	const points = useSelector((state: AppStateType) => state.PointsReducer.points)
	let currentLocation = useSelector(
		(state: AppStateType) => state.PointsReducer.currentPoint
	)
	const onSetGeoloccation = useCallback(
		(geolocation: CoordinateType) => {
			dispatch(Actions.getGeolocation(geolocation))
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

	return (
		geolocation && (
			<div className='page_points-map'>
				<div className='points'>
					<div className='add-point'>
						<InputForAddPoint />
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
