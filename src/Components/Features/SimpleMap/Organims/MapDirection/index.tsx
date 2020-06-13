import React, { useState, useEffect } from 'react'
import { LocationInfoType } from '../../../../../services/API/API'
import { DirectionsRenderer } from 'react-google-maps'

type PropsType = {
	places: LocationInfoType[]
	travelMode: any
}
export const MapDirection: React.FC<PropsType> = ({ places, travelMode }) => {
	const [state, setState] = useState({
		directions: null,
		error: null,
	})

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
				setState(() => {
					if (status === window.google.maps.DirectionsStatus.OK)
						return { directions: result, error: null }
					else return { directions: null, error: result }
				})
			}
		)
	}, [places, travelMode])

	if (state.error) {
		console.log(state.error)
	}

	return (
		state.directions && (
			<>
				<DirectionsRenderer
					directions={state.directions!}
					options={{
						draggable: true,
						polylineOptions: {
							strokeOpacity: 0.5,
							strokeColor: '#FF0000',
						},
						markerOptions: {
							draggable: true,
						},
					}}
				/>
			</>
		)
	)
}
