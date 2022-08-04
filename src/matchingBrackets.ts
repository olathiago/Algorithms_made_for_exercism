type Map = {
	[key: string]: number
}
type ClosedMatch = {
	[key: string]: string
}
export function isPaired(input: string): boolean {
	const map: Map = {}
	const bucket = []
	let closedMatch: ClosedMatch = {
		')': '(',
		'}': '{',
		']': '['
	}
	const splittedInput = input.split('')
	for (let bracket of splittedInput) {
		if (bracket.match(/[(){}[\]]/g)) {
			map[bracket] = map[bracket] + 1 || 1
			if (bracket === '(' || bracket === '{' || bracket === '[') {
				bucket.push(bracket)
				continue
			} else {
				if (closedMatch[bracket] === bucket[bucket.length - 1]) {
					bucket.pop()
				}
				continue
			}
		}
	}

	const result = map['('] === map[')'] && map['{'] === map['}'] && map['['] === map[']'] && bucket.length === 0

	return result
}
