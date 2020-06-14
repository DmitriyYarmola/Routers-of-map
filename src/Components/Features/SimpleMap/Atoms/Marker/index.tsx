import React, { useState } from 'react'
import { Marker as MarkerMap } from 'react-google-maps'
import { InfoWindow } from 'react-google-maps'
import { useDispatch } from 'react-redux'
import { LocationInfoType } from '../../../../../services/API/API'
import { getAddressOfPoint } from '../../../PointsManager/Model/thunks'
type PropsType = {
	key: string
	position: any
	formatted_address: string
	marker: LocationInfoType
	numberMarker: number
}
export const Marker: React.FC<PropsType> = ({
	position,
	formatted_address,
	marker,
	numberMarker,
	...props
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const onDragEnd = (e: google.maps.MouseEvent) => {
		const lat = e.latLng.lat()
		const lng = e.latLng.lng()
		const changedPoint = { lat, lng }
		dispatch(getAddressOfPoint(changedPoint, marker.place_id))
	}
	const onToggleOpenInfoBox = () => {
		setIsOpen(!isOpen)
	}
	return (
		<MarkerMap
			position={position}
			onClick={onToggleOpenInfoBox}
			draggable={true}
			onDragEnd={onDragEnd}
			label={{
				text: `${numberMarker + 1}`,
				color: 'black',
				fontSize: '16px',
				fontWeight: 'bold',
			}}
			{...props}
		>
			{isOpen && (
				<InfoWindow>
					<div>{formatted_address}</div>
				</InfoWindow>
			)}
		</MarkerMap>
	)
}
