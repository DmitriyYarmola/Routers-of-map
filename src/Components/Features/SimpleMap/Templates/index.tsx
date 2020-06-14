import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps'
import { withProps, compose } from 'recompose'
import { API_KEY } from '../../../../services/API/key'
import { MapDirection } from '../Organims/MapDirection'
import { Marker } from '../Atoms/Marker'
import { CoordinateType, LocationInfoType } from '../../../../services/API/API'

type PropsType = {
	geolocation: CoordinateType
	currentLocation: CoordinateType | undefined
	markers: LocationInfoType[]
}
export const Map = compose<PropsType, PropsType>(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: '100vh' }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)(({ geolocation, currentLocation, markers }) => (
	<GoogleMap
		defaultCenter={geolocation}
		defaultZoom={10}
		center={currentLocation || geolocation}
	>
		{markers.map((marker, index) => {
			const position = marker.geometry.location
			return (
				<Marker
					key={marker.place_id}
					marker={marker}
					position={position}
					formatted_address={marker.formatted_address}
					numberMarker={index}
				/>
			)
		})}
		{markers.length > 1 && (
			<MapDirection places={markers} travelMode={window.google.maps.TravelMode.DRIVING} />
		)}
	</GoogleMap>
))
