import React from 'react'

type PropsType = {
	distance: number | null
}
export const Label: React.FC<PropsType> = ({ distance }) => {
	return <div className=''>{`${distance} km`}</div>
}
