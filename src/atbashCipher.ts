const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
const cipher = 'zyxwvutsrqponmlkjihgfedcba0123456789'.split('')

export function encode(plainText: string): string {
	let formatPlainText = plainText.replace(/\s/g, '').toLowerCase().split('')
	let word = ''
	let result = []

	for (let char of formatPlainText) {
		let cipherLetter = cipher[alphabet.indexOf(char)]
		word += cipherLetter || ''
	}
	let wordSplitted = word.split('')
	for (let i = 0; wordSplitted.length !== 0; i++) {
		result.push(wordSplitted.splice(0, 5).join(''))
	}

	return result.join(' ')
}

export function decode(cipherText: string): string {
	let result = ''
	for (let char of cipherText.split('')) {
		result += alphabet[cipher.indexOf(char)] || ''
	}
	return result
}
