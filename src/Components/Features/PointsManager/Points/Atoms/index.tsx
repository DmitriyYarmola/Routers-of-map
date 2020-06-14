import React from 'react'
import { LocationInfoType } from '../../../../../services/API/API'
import { Draggable } from 'react-beautiful-dnd'
import Cross from './../../../../../Img/cross.svg'
import { Actions } from '../../Model/actions'
import { useDispatch } from 'react-redux'
import './style.sass'

type QuoteType = {
	quote: LocationInfoType
	index: number
}

export const Quote: React.FC<QuoteType> = ({ quote, index }) => {
	const dispatch = useDispatch()
	const onDeletePoint = () => {
		dispatch(Actions.deletePoint(quote.place_id))
	}
	return (
		<Draggable draggableId={quote.place_id} index={index}>
			{(provided) => (
				<div
					className='quote'
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{quote.formatted_address}
					<img src={Cross} alt='' className='cross' onClick={onDeletePoint} />
				</div>
			)}
		</Draggable>
	)
}
