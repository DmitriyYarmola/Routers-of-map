import React, { useState, useEffect } from 'react'
import { LocationInfoType } from '../../../../../services/API/API'
import { Polyline } from 'react-google-maps'
import { getDistance } from '../../../../lib/getDistance'
import { useDispatch } from 'react-redux'
import { Actions as ActionsPoints } from '../../Model/actions'
import { Actions as ActionsErrors } from './../../../Errors/model/actions'
import { Codes } from '../../../Errors/codes'

type PropsType = {
	places: LocationInfoType[]
	travelMode: any
}
export const MapDirection: React.FC<PropsType> = ({ places, travelMode }) => {
	const [coordinate, setCoordinate] = useState<any>()

	const disptach = useDispatch()
	useEffect(() => {
		const waypoints = places.map((p) => ({
			location: p.geometry.location,
			stopover: true,
		}))
		const origin = waypoints.shift()!.location
		const destination = waypoints.pop()!.location

		const directionsService = new window.google.maps.DirectionsService()
		directionsService.route(
			{
				origin: origin,
				destination: destination,
				travelMode: travelMode,
				//@ts-ignore
				waypoints: waypoints,
			},
			(result: any, status: any) => {
				console.log(result)
				// let dis = 0
				if (result.status === Codes.OK) {
					let dis = getDistance(result.routes[0].legs)
					disptach(ActionsPoints.setDistanceBetweenPoints(dis))
					const coords = result.routes[0].overview_path
					setCoordinate(coords)
				} else if (result.status === Codes.NoRsult)
					disptach(ActionsErrors.error('The route is broken. Please, refresh the page.'))
			}
		)
	}, [places, travelMode, disptach])

	return (
		<Polyline
			path={coordinate}
			options={{
				strokeColor: '#ff2343',
				strokeOpacity: 0.8,
				strokeWeight: 5,
				clickable: true,
				geodesic: true,
			}}
		/>
	)
}
