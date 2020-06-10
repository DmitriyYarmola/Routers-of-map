import React from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from '../Model/store'
import { Point } from './Point'

export const Points = () => {
	const points = useSelector((state: AppStateType) => state.PointsReducer.points)

	const pointsList = points.map((point) => {
		return (
			<Point
				cityName={point.formatted_address}
				id={point.place_id}
				key={point.place_id}
			/>
		)
	})
	return <>{pointsList}</>
}
