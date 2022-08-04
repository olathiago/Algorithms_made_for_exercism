export function find(sortedArray: number[], value: number): number {
	let left = 0
	let right = sortedArray.length - 1
	while (left <= right) {
		let middle = Math.floor((left + right) / 2)
		const result = sortedArray[middle]
		if (result === value) {
			// Found at index middle
			return middle
		} else if (result < value) {
			left = middle + 1
		} else {
			right = middle - 1
		}
	}
	throw new Error('Value not in array')
}
