import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { Marker } from '../../../UI/Atoms/index'
import { API_KEY } from '../../../../services/API/key'
import { CoordinateType } from '../../../../services/API/API'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../Model/store'
import { useGeolocation } from '../../UserGeolocation'

type PropsType = {
	geolocation?: CoordinateType
}
export const SimpleMap:React.FC<PropsType> = ({geolocation}) => {
	const points = useSelector((state: AppStateType) => state.MapReducer.points)
	const [center, setCenter] = useState(geolocation)
	const [zoom, setZoom] = useState(11)
	
	const Markers = points.map(point => <Marker lat={point.geometry.location.lat} lng={point.geometry.location.lng} name={point.formatted_address} color='yellow'/>)

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
				
				{Markers}
			</GoogleMapReact>
		</div>
	)
}
