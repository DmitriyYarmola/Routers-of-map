import React from 'react'
import { InputForAddPoint } from './../Features/InputForAddPoint'
import { SimpleMap } from '../Features/SimpleMap/Templates'
import { Point } from '../UI/Atoms'
import './style.sass'

export const Page = () => {
	return (
		<div className='page_points-map'>
			<div className='points'>
				<div className='add-point'>
					<InputForAddPoint />
				</div>
				<div className='list-point'>
					<Point cityName={'test'} />
				</div>
			</div>
			<div className='map'>
				<SimpleMap />
			</div>
		</div>
	)
}
