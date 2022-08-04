export class Crypto {
	normalized: string
	constructor(plainText: string) {
		this.normalized = plainText.toLowerCase().replace(/[!@#$%^&*?|/_., ]/g, '')
	}

	get ciphertext(): string {
		const clone = this.normalized.valueOf().split('')
		if (!clone || clone.length === 0) return ''
		let rows = []
		const cols = Math.ceil(Math.sqrt(clone.length))

		while (clone.length > 0) {
			const row = clone.splice(0, cols).join('')
			rows.push(row)
		}

		while (rows[rows.length - 1].length !== cols) {
			rows[rows.length - 1] += ' '
		}

		let result = []
		for (let row = 0; row < cols; row++) {
			let word = ''
			for (let col = 0; col < cols; col++) {
				if (!rows[col]) continue
				word += rows[col][row]
			}
			result.push(word)
		}

		return result.join(' ')
	}
}
