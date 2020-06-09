import React, { useState } from 'react'
import { InfoWindow } from '../../Molecules/InfoWindow'
import './style.sass'

type PropsType = {
	color: string
	name: string
	id?: number
	lat?: number
	lng?: number
}
export const Marker: React.FC<PropsType> = ({ color, name }) => {
	const [show, setShow] = useState(false)

	const onSetShow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setShow(!show)
	}

	return (
		<div onClick={onSetShow}>
			<div
				className='pin bounce'
				style={{ backgroundColor: color, cursor: 'pointer' }}
				title={name}
			/>
			<div className='pulse' />
			{show && <InfoWindow name={name}/>}
		</div>
	)
}
