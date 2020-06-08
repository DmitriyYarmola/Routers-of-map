import React from 'react'
import Cross from './../../../Img/cross.svg'
import './style.sass'
type PropsType = {
	cityName: string
}

export const Point: React.FC<PropsType> = ({ cityName }) => {
	return (
		<div className='point'>
			<span>{cityName}</span>
			<img src={Cross} alt='' className='cross' />
		</div>
	)
}
