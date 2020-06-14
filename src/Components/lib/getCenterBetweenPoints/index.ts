import { LocationInfoType } from './../../../services/API/API'
export const getCenterBetweenPoints = (markers: LocationInfoType[]) => {
	let lat: number, lng: number
	lat = lng = 0
	markers.forEach((marker) => {
		lat += marker.geometry.location.lat
		lng += marker.geometry.location.lng
	})

	return { lat: lat / markers.length, lng: lng / markers.length }
}
