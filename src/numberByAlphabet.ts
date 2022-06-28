export class AlphabetNumbers {
	alphabet: string[]
	constructor() {
		this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	}
	public accumulateNumbersOfLetters(phrase: string): number {
		const splittedPhrase = phrase.toLowerCase().trim().split('')
		let result = ''
		for (const letter of splittedPhrase) {
			const indexOfLetter = this.alphabet.indexOf(letter.toLowerCase())
			if (letter.match(/\d+/g)) {
				result += letter
				continue
			}
			result += indexOfLetter
		}
		return Number(result)
	}

	public sumUntilLengthOne(value: string): number {
		const numbers = this.accumulateNumbersOfLetters(value)
		let sumSplitted: number = String(numbers)
			.toLowerCase()
			.trim()
			.split('')
			.reduce((acc: number, current: string) => (acc += Number(current)), 0)
		let result = String(sumSplitted).length
		while (result > 1) {
			sumSplitted = String(sumSplitted)
				.split('')
				.reduce((acc: number, current: string) => (acc += Number(current)), 0)
			result = String(sumSplitted).length
		}
		return sumSplitted
	}

	public eachLetterOneNumber(phrase: string): number {
		const splittedValue = phrase.toLowerCase().trim().split('')
		let result = ''
		for (const letter of splittedValue) {
			const indexOfLetter = this.alphabet.indexOf(letter.toLowerCase())
			if (String(indexOfLetter).length === 1) {
				result += indexOfLetter
				continue
			}
			if (letter.match(/\d+/g)) {
				result += letter
				continue
			}
			if (String(indexOfLetter).length > 1) {
				result += this.sumUntilLengthOne(String(indexOfLetter))
			}
		}
		return Number(result)
	}
}
