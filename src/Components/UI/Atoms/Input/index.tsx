import React from 'react'

type PropsType = {
	id: string
	type: string
	className: string
	placeholder: string
	helperContent: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input: React.FC<PropsType> = ({
	id,
	type,
	className,
	placeholder,
	helperContent,
	value,
	onChange,
	onKeyPress,
}) => {
	return (
		<div className='row'>
			<div className='input-field col s12'>
				<input
					id={id}
					type={type}
					className={className}
					autoComplete='off'
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					onKeyPress={onKeyPress}
				/>
				<span className='helper-text'>{helperContent}</span>
			</div>
		</div>
	)
}
