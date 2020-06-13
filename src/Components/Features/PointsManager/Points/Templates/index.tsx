import React from 'react'
import { Actions } from '../../Model/actions'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { AppStateType } from '../../../Store/store'
import { useSelector, useDispatch } from 'react-redux'
import { QuoteList } from '../Moleculs'
import { reorder } from '../../../../lib/reorder'

export const Points = () => {
	const points = useSelector((state: AppStateType) => state.PointsReducer.points)
	const dispatch = useDispatch()

	const onDragStart = () => {
		if (window.navigator.vibrate) window.navigator.vibrate(100)
	}

	const onDragEnd = (result: any) => {
		if (!result.destination) return

		if (result.destination.index === result.source.index) return

		const quotes = reorder(points, result.source.index, result.destination.index)

		dispatch(Actions.movePoints(quotes))
	}

	return (
		<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
			<Droppable droppableId='list'>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<QuoteList points={points} />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}
