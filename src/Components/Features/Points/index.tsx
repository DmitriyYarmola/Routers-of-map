import React from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from '../Model/store'
import { Point } from './Point'

export const Points = () => {
	const points = useSelector((state: AppStateType) => state.MapReducer.points)

	const pointsList = points.map((point) => {
		return <Point cityName={point.value} id={point.id} />
	})
	return <>{pointsList}</>
}
