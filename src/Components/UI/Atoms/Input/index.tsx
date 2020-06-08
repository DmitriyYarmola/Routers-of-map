import React from 'react'

type PropsType = {
	id: string
	type: string
	className: string
	placeholder: string
	helperContent: string
}

export const Input: React.FC<PropsType> = ({
	id,
	type,
	className,
	placeholder,
	helperContent,
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
				/>
				<span className='helper-text'>{helperContent}</span>
			</div>
		</div>
	)
}
