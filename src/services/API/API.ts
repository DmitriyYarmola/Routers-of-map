import { API_KEY } from './key'
import axios from 'axios'

type GorizonteType = {
	northeast: CoordinateType
	southwest: CoordinateType
}

type GeometryType = {
	bounds: GorizonteType
	location: CoordinateType
	location_type: string
	viewport: GorizonteType
}

type AddressComponents = {
	long_name: string
	short_name: string
	types: Array<string>
}

type PlusCodeType = {
	compound_code: string
	global_code: string
}

export type CoordinateType = {
	lat: number
	lng: number
}

export type LocationInfoType = {
	address_components: Array<AddressComponents>
	formatted_address: string
	geometry: GeometryType
	place_id: string
	types: Array<string>
}

export type GetCoordinateOfPoint = {
	plus_code?: PlusCodeType
	results: LocationInfoType[]
	status: string
}

export const PointAPI = {
	getCoordinateOfPoint: (location: string) => {
		return axios
			.get<GetCoordinateOfPoint>(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${location
					.split(' ')
					.join('+')}&key=${API_KEY}`
			)
			.then((response) => response.data)
	},
	getAddressOfPoint: (coordiante: CoordinateType) => {
		return axios
			.get<GetCoordinateOfPoint>(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordiante.lat},${coordiante.lng}&key=${API_KEY}`
			)
			.then((response) => response.data)
	},
}
