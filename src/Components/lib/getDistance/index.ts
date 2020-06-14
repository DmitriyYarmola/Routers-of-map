type DistanceType = {
	distance: { text: string; value: number }
	duration: { text: string; value: number }
	end_address: string
	end_location: { lat: Function; lng: Function }
	start_address: string
	start_location: { lat: Function; lng: Function }
	steps: Array<any>
	traffic_speed_entry: Array<any>
	via_waypoint: Array<any>
	via_waypoints: Array<any>
}

// type PointsType = {
//     legs:
// }

export const getDistance = (points: DistanceType[]) => {
	let sumDistance: number
	sumDistance = 0
	points.forEach((point) => {
		sumDistance += Number(point.distance.value)
	})

	return Math.ceil(sumDistance / 1000)
}
