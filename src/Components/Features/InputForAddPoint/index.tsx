import React from 'react'
import { Input } from '../../UI/Atoms/index'

export const InputForAddPoint = () => {
	return (
		<Input
			id={'search'}
			type={'text'}
			className={'search-place'}
			placeholder={'Adress'}
			helperContent={'Input adress'}
		/>
	)
}
