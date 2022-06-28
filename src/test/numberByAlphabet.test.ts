import { AlphabetNumbers } from '../numberByAlphabet'

describe('getNumberByPhrase', () => {
	it('Return the correct sum', () => {
		const frase = 'Pyro'
		const expected = new AlphabetNumbers().accumulateNumbersOfLetters(frase)
		expect(expected).toEqual(15241714)
	})
	it('Números na string são traduzidos em number', () => {
		const frase = 'py15ro'
		const expected = new AlphabetNumbers().accumulateNumbersOfLetters(frase)
		expect(expected).toEqual(1524151714)
	})
	it('Soma todos os números até chegar em um único número', () => {
		const frase = 'pyro'
		const expected = new AlphabetNumbers().sumUntilLengthOne(frase)
		expect(expected).toEqual(7)
	})
	it('Cada letra com um número', () => {
		const frase = 'zzzz18'
		const expected = new AlphabetNumbers().eachLetterOneNumber(frase)
		expect(expected).toEqual(777718)
	})
})
