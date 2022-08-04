type Map = {
	[key: string]: number
}
export function firstNonRepeating(input: string): string {
	let map: Map = {}
	for (let i = 0; i < input.length; i++) {
		map[input[i]] = map[input[i]] + 1 || 1
	}
	for (let i = 0; i < input.length; i++) {
		if (map[input[i]] === 1) {
			return input[i]
		}
	}

	throw new Error('Todos os caracteres repetem.')
}
