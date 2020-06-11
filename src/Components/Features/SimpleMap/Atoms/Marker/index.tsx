import React from 'react'
import { Marker as MarkerMap } from 'react-google-maps'
import { InfoWindow } from 'react-google-maps'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../Store/store'

type PropsType = {
	key: string
	position: any
	isOpen: boolean
	formatted_address: string
	onClick: () => void
}
export const Marker: React.FC<PropsType> = ({
	key,
	position,
	onClick,
	isOpen,
	formatted_address,
	...props
}) => {
	const points = useSelector((state: AppStateType) => state.PointsReducer.points)
	return (
		<MarkerMap
			key={key}
			position={position}
			onClick={onClick}
			draggable={true}
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
