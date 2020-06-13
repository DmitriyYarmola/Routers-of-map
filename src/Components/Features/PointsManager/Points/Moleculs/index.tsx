import React from 'react'
import { LocationInfoType } from '../../../../../services/API/API'
import { Quote } from '../Atoms'
import './style.sass'
type QuoteListType = {
	points: LocationInfoType[]
}

export const QuoteList: React.FC<QuoteListType> = React.memo(({ points }) => {
	return (
		<div className='quote-list'>
			{points.map((quote: LocationInfoType, index: number) => (
				<Quote quote={quote} index={index} key={quote.place_id} />
			))}
		</div>
	)
})
