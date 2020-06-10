import { API_KEY } from './key'
import axios from 'axios'
// const instance = axios.create({
// 	withCredentials: true,
// 	baseURL: 'https://maps.googleapis.com/maps/api/geocode',
// 	headers: {
// 		"API-KEY": API_KEY,
// 		'Content-Type': 'application/json'
// 	},
// })

type GorizonteType = {
	northeast: CoordinateType
	southwest: CoordinateType
}
export type CoordinateType = {
	lat: number
	lng: number
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
export type LocationInfoType = {
	address_components: Array<AddressComponents>
	formatted_address: string
	geometry: GeometryType
	place_id: string
	types: Array<string>
}

export type GetCoordinateOfPoint = {
	results: LocationInfoType[]
}

export const PointAPI = {
	getCoordinateOfPoint: (location: string) => {
		return axios
			.get<GetCoordinateOfPoint>(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${location
					.split(' ')
					.join('+')}&key=${API_KEY}`
			)
			.then((response) => response.data.results)
	},
}
