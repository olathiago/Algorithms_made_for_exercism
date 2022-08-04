import { Tree, Node } from '../binaryTree'

describe('Testes com Binary Search Tree', () => {
	it('create Node', () => {
		const newNode = new Node(12)
		console.log(newNode)

		const expected = {
			value: 12,
			left: null,
			right: null
		}
		expect(newNode).toEqual(expected)
	})
	it('testando o que não sei fazer', () => {
		const tree = new Tree(12)
		tree.add(62)
		tree.add(14)
		tree.add(32)
		tree.add(35)
		tree.add(3)
		tree.add(9)
		tree.add(9)
	})
})
