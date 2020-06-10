import React from 'react'
import { useDispatch } from 'react-redux'
import Cross from './../../../../Img/cross.svg'
import './style.sass'
import { Actions } from '../../Model/actions'
type PropsType = {
	cityName: string
	id: string
}

export const Point: React.FC<PropsType> = ({ cityName, id }) => {
	const dispatch = useDispatch()
	const onDeletePoint = () => {
		dispatch(Actions.deletePoint(id))
	}
	return (
		<div className='point'>
			<span>{cityName}</span>
			<img src={Cross} alt='' className='cross' onClick={onDeletePoint} />
		</div>
	)
}
