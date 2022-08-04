import { changePosition } from './changeElementPositionInArray'

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('Testing change position in array function', () => {
	it('trocar posição da direita para a esquerda', () => {
		const index = lista.indexOf(6)
		const result = changePosition<number>(index, 1, lista)
		expect(result).toEqual([1, 6, 2, 3, 4, 5, 7, 8, 9])

		const result2 = changePosition(index, 3, lista)
		expect(result2).toEqual([1, 2, 3, 6, 4, 5, 7, 8, 9])
	})

	it('trocar posição da esquerda para a direita', () => {
		const index = lista.indexOf(2)
		const result = changePosition(index, 6, lista)
		expect(result).toEqual([1, 3, 4, 5, 6, 7, 2, 8, 9])
	})

	it('adicionar ao final do array', () => {
		const index = lista.indexOf(2)
		const result = changePosition(index, lista.length - 1, lista)

		expect(result).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 2])
	})

	it('adicionar ao inicio do array', () => {
		const index = lista.indexOf(2)
		const result = changePosition(index, 0, lista)
		expect(result).toEqual([2, 1, 3, 4, 5, 6, 7, 8, 9])
	})
})
