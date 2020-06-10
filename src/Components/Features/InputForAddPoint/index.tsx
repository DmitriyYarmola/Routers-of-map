import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../UI/Atoms/index'
import { getGeoLocOfPoint } from '../Model/thunks'

export const InputForAddPoint = () => {
	const [content, setContent] = useState('')
	const dispatch = useDispatch()

	const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.currentTarget.value)
	}

	const onGetGeoLocOfPoint = useCallback(
		(content) => {
			dispatch(getGeoLocOfPoint(content))
		},
		[dispatch]
	)

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onGetGeoLocOfPoint(content)
			setContent('')
		}
	}

	return (
		<Input
			id={'search'}
			type={'text'}
			className={'search-place'}
			placeholder={'Adress'}
			helperContent={'Input adress'}
			onChange={onChangeContent}
			value={content}
			onKeyPress={onKeyPress}
		/>
	)
}
