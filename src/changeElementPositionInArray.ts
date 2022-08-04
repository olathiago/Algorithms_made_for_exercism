// It changes element position in an array using a new index, the current index and the source array.
// The challenge here was to do it without using splice method.
// It returns a new array.

export function changePosition<T>(currentIndex: number, newIndex: number, source: T[]): T[] {
	const list = [...source]
	for (let i = 0; i < list.length - currentIndex; i++) {
		if (!source[currentIndex + i + 1]) {
			list.length--
			break
		}
		list[currentIndex + i] = list[currentIndex + i + 1]
	}
	list[list.length] = source[currentIndex]

	return moveLeft(list, newIndex, list.length - 1)
}

export function moveLeft<T>(list: T[], newIndex: number, movingIndex: number): T[] {
	let movingValue = list[movingIndex]
	let prev = list[movingIndex - 1]
	if (list[newIndex] === movingValue) {
		// É necessário para quando o elemento é adicionado ao final do array
		return list
	}
	list[movingIndex - 1] = movingValue
	list[movingIndex] = prev

	if (list[newIndex] !== movingValue) {
		return moveLeft(list, newIndex, movingIndex - 1)
	}
	return list
}
