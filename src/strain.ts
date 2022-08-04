export function keep<T>(values: T[], compare: Function): T[] {
	let result: T[] = []
	for (let el of values) {
		if (compare(el)) {
			result.push(el)
		}
	}
	return result
}

export function discard<T>(values: T[], compare: Function): T[] {
	let result: T[] = []
	for (let el of values) {
		if (!compare(el)) {
			result.push(el)
		}
	}
	return result
}
