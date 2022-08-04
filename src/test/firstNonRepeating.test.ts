import { firstNonRepeating } from '../firstNonRepeating'

describe('despois eu penso', () => {
	it('encontrando com repetição longa', () => {
		const input = 'aaaabbbbcddddeeefggghiiiijjj'
		expect(firstNonRepeating(input)).toEqual('c')
	})

	it('encontrando com nenhuma repetição', () => {
		const input = 'abcde'
		expect(firstNonRepeating(input)).toEqual('a')
	})

	it('apenas com repetições', () => {
		const input = 'aaaabbbb'
		expect(() => firstNonRepeating(input)).toThrowError('Todos os caracteres repetem.')
	})
})
