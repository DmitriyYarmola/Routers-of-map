import React, { useState, useEffect } from 'react'
import {
	withGoogleMap,
	GoogleMap,
	withScriptjs,
	Marker,
	DirectionsRenderer,
} from 'react-google-maps'
import { withProps, compose } from 'recompose'
import { API_KEY } from '../../../../services/API/key'

const MapDir = (props) => {
	const [state, setState] = useState({
		directions: null,
		error: null,
	})

	useEffect(() => {
		const { places, travelMode } = props
		const waypoints = places.map((p) => ({
			location: p.geometry.location,
			stopover: true,
		}))
		const origin = waypoints.shift().location
		const destination = waypoints.pop().location
		const directionsService = new window.google.maps.DirectionsService()
		directionsService.route(
			{
				origin: origin,
				destination: destination,
				travelMode: travelMode,
				waypoints: waypoints,
			},
			(result, status) => {
				setState(() => {
					if (status === window.google.maps.DirectionsStatus.OK)
						return { directions: result, error: null }
					else return { directions: null, error: result }
				})
			}
		)
	}, [props])

	if (state.error) {
		return console.log(state.error)
	}
	return state.directions && <DirectionsRenderer directions={state.directions} />
}

export const Map = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: '100vh' }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)((props) => (
	<GoogleMap
		defaultCenter={props.geolocation}
		defaultZoom={10}
		center={props.currentLocation || props.geolocation}
	>
		{props.markers.map((marker) => {
			const position = marker.geometry.location
			return <Marker key={marker.place_id} position={position} />
		})}
		{props.markers.length > 1 && (
			<MapDir places={props.markers} travelMode={window.google.maps.TravelMode.DRIVING} />
		)}
	</GoogleMap>
))
