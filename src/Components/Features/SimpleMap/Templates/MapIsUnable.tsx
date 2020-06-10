import React, { useState } from 'react'
import { GoogleMap } from 'react-google-maps'
import { Marker } from '../../../UI/Atoms/index'
import { API_KEY } from '../../../../services/API/key'
import { CoordinateType } from '../../../../services/API/API'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../Store/store'
import GoogleMapReact from 'google-map-react'

type PropsType = {
	geolocation?: CoordinateType
}
export const SimpleMap: React.FC<PropsType> = ({ geolocation }) => {
	const points = useSelector((state: AppStateType) => state.PointsReducer.points)
	let currentPoint = useSelector(
		(state: AppStateType) => state.PointsReducer.currentPoint
	)
	const [center, setCenter] = useState(geolocation)
	const [zoom, setZoom] = useState(11)

	const Markers = points.map((point) => (
		<Marker
			lat={point.geometry.location.lat}
			lng={point.geometry.location.lng}
			name={point.formatted_address}
			color='yellow'
			key={point.place_id}
		/>
	))

	const getMapOptions = (maps: any) => {
		return {
			disableDefaultUI: false,
			mapTypeControl: true,
			streetViewControl: true,
			styles: [
				{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] },
			],
		}
	}

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: API_KEY }}
				defaultCenter={center}
				center={currentPoint?.geometry.location}
				defaultZoom={zoom}
				hoverDistance={5}
				options={getMapOptions}
			>
				{Markers}
			</GoogleMapReact>
		</div>
	)
}
