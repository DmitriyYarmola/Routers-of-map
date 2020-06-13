import React from 'react'
import { Marker as MarkerMap } from 'react-google-maps'
import { InfoWindow } from 'react-google-maps'
import { useSelector, useDispatch } from 'react-redux'
import { AppStateType } from '../../../Store/store'
import { LocationInfoType } from '../../../../../services/API/API'
import { getAddressOfPoint } from '../../../PointsManager/Model/thunks'

type PropsType = {
	key: string
	position: any
	isOpen: boolean
	formatted_address: string
	marker: LocationInfoType
	onClick: () => void
}
export const Marker: React.FC<PropsType> = ({
	position,
	onClick,
	isOpen,
	formatted_address,
	marker,
	...props
}) => {
	const points = useSelector((state: AppStateType) => state.PointsReducer.points)
	const dispatch = useDispatch()
	const onDragEnd = (e: google.maps.MouseEvent) => {
		const lat = e.latLng.lat()
		const lng = e.latLng.lng()
		const changedPoint = { lat, lng }
		dispatch(getAddressOfPoint(changedPoint, marker.place_id))
	}
	return (
		<MarkerMap
			position={position}
			onClick={onClick}
			draggable={true}
			onDragEnd={onDragEnd}
			{...props}
		>
			{isOpen && points.length <= 1 && (
				<InfoWindow>
					<div>{formatted_address}</div>
				</InfoWindow>
			)}
		</MarkerMap>
	)
}
