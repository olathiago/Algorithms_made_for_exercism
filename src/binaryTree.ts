export class Node {
	value: number
	left: Node | null
	right: Node | null
	constructor(value: number) {
		this.value = value
		this.left = null
		this.right = null
	}
}

export class Tree {
	count: number
	root: Node
	constructor(value: any) {
		this.root = new Node(value)
		this.count = 1
	}

	public add(value: number): void {
		this.count++
		let newNode = new Node(value)
		//if value < node.value go left, if value > node.value go right
		const searchTree = (node: Node): void => {
			if (value < node.value) {
				if (!node.left) {
					node.left = newNode
				}
				// if there is a left child, search again
				else {
					searchTree(node.left)
				}
			} else if (value > node.value) {
				if (value > node.value) {
					if (!node.right) {
						node.right = newNode
					}
					// if there is a left child, search again
					else {
						searchTree(node.right)
					}
				}
			}
		}
		searchTree(this.root)
	}

	public find(value: any): any {
		if (!this.root) return null
		let current: Node | null = this.root
		let found = false

		while (current && !found) {
			if (value < current.value) current = current.left
			else if (value > current.value) current = current.right
			else found = true
		}

		if (!found) return 'Nothing Found!'
		return current
	}

	public size(): number {
		return this.count
	}

	// Go through all the left nodes until there is no more left nodes
	public min(): number {
		let currentNode = this.root
		while (currentNode.left) {
			currentNode = currentNode.left
		}
		return currentNode.value
	}

	// Go through all the right nodes until there is no more right nodes
	public max(): number {
		let currentNode = this.root
		while (currentNode.right) {
			currentNode = currentNode.right
		}
		return currentNode.value
	}

	public contains(value: number): boolean {
		let currentNode: Node | null = this.root
		while (currentNode) {
			if (value === currentNode.value) {
				return true
			}
			if (value < currentNode.value) {
				currentNode = currentNode.left
			} else {
				currentNode = currentNode.right
			}
		}
		return false
	}

	// search branch by branch
	// left, root, right
	public inOrder(): any[] {
		let result: any[] = []

		const traverse = (node: Node): void => {
			if (node.left) traverse(node.left)
			result.push(node.value)
			if (node.right) traverse(node.right)
		}
		traverse(this.root)
		return result
	}

	// root, left, right
	public preOrder(): any[] {
		let result: any[] = []

		const traverse = (node: Node): void => {
			result.push(node.value)
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
		}
		traverse(this.root)
		return result
	}

	//left, right, root
	public postOrder(): any[] {
		let result: any[] = []

		const traverse = (node: Node): void => {
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
			result.push(node.value)
		}
		traverse(this.root)
		return result
	}

	// Breadth-first search
	// search level by level
	public searchByLevels(): any[] {
		let result: any[] = []
		let query: any[] = []

		query.push(this.root)

		while (query.length) {
			let currentNode = query.shift()
			result.push(currentNode.value)
			if (currentNode.left) {
				query.push(currentNode.left)
			}
			if (currentNode.right) {
				query.push(currentNode.right)
			}
		}

		return result
	}
}
