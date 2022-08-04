export class AlphabetNumbers {
	alphabet: string[]
	constructor() {
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	}
	// This function returns the number that represents each letter of the alphabet.
	// If it is a digit, returns that digit
	public accumulateNumbersOfLetters(phrase: string): number {
		const splittedPhrase = phrase.toLowerCase().replace(/\s/g, '').split('')
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
		// It sums all representing numbers of letters on a string variable until it gets ONE SINGLE NUMBER.
		const numbers = this.accumulateNumbersOfLetters(value)
		let sumSplitted: number = String(numbers)
			.toLowerCase()
			.replace(/\s/g, '')
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
		// Each letter needs ONE representing number. Following this premise, if you have the letter "S", for example, S has the representing number 18. This algorithm will sum the numbers until it gets a single representing number. In this case, "S" has a representing number 9.
		// If the parameter "phrase" is "SSssSs" it will return 999999
		const splittedValue = phrase.toLowerCase().replace(/\s/g, '').split('')
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
