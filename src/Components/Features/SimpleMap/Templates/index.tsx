import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Marker } from '../../../UI/Atoms/index'
import { API_KEY } from '../../../services/API/key'

export const SimpleMap = () => {
	const [center, setCenter] = useState({ lat: 30, lng: 30 })
	const [zoom, setZoom] = useState(11)

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
				defaultZoom={zoom}
				options={getMapOptions}
			>
				<Marker lat={30} lng={30} name='My Marker' color='yellow' />
			</GoogleMapReact>
		</div>
	)
}
