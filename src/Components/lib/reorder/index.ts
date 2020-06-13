import { LocationInfoType } from "../../../services/API/API"

export const reorder = (
	list: LocationInfoType[],
	startIndex: number,
	endIndex: number
) => {
	const result = Array.from(list)
	const [removed] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)

	return result
}
