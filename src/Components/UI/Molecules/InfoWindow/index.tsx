import React from 'react'
import './style.sass'

type PropsType = {
	name: string 
}
export const InfoWindow:React.FC<PropsType> = ({name}) => {
	return <div className='info-window'>{name}</div>
}
