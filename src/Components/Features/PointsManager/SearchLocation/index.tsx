import React from 'react'
import { useDispatch } from 'react-redux'
import { getGeoLocOfPoint } from '../Model/thunks'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.min.css'
import './style.sass'
type AddressType = {
	description: string
}
export const SearchLocation = () => {
	const dispatch = useDispatch()
	const onKeyPress = ({ description }: AddressType) => {
		dispatch(getGeoLocOfPoint(description))
	}

	return (
		<div className='search-location'>
			<GooglePlacesAutocomplete onSelect={onKeyPress} />
		</div>
	)
}
