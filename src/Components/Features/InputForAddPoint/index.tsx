import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import nextId from 'react-id-generator'
import { Actions } from './../Model/actions'
import { Input } from '../../UI/Atoms/index'

export const InputForAddPoint = () => {
	const [content, setContent] = useState('')

	const dispatch = useDispatch()

	const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.currentTarget.value)
	}

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			dispatch(Actions.addPoint({ value: content, id: nextId() }))
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
