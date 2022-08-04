export class Node {
	value: any
	next: any
	prev: any

	constructor(value: Node, prev: Node | null = null, next: Node | null = null) {
		this.value = value
		this.prev = prev
		this.next = next
	}
}

export class LinkedList<T extends Node> {
	head: Node | null
	tail: Node | null

	constructor() {
		this.head = null
		this.tail = null
	}

	// add to end of list / tail
	push(value: T): void {
		if (!this.tail) {
			this.head = this.tail = new Node(value)
		} else {
			let oldTail = this.tail
			this.tail = new Node(value)
			oldTail.next = this.tail
			this.tail.prev = oldTail
		}
	}

	// add to the beginning of list / head
	unshift(value: T): void {
		if (!this.head) {
			this.head = this.tail = new Node(value)
		} else {
			let oldHead = this.head
			this.head = new Node(value)
			oldHead.prev = this.head
			this.head.next = oldHead
		}
	}

	// Remove value at front
	shift(): void {
		if (!this.head) {
			return
		} else {
			let removedHead = this.head
			// if 1 node left
			if (this.head === this.tail) {
				this.head = this.tail = null
			} else {
				this.head = this.head.next
				if (this.head?.prev) {
					this.head.prev = null
				}
			}
			return removedHead.value
		}
	}

	// Remove value at back
	pop(): void {
		if (!this.tail) {
			return
		} else {
			let removedTail = this.tail
			if (this.head === this.tail) {
				this.head = this.tail = null
			} else {
				this.tail = this.tail.prev
				if (this.tail?.next) {
					this.tail.next = null
				}
			}
			return removedTail.value
		}
	}

	count(): number {
		let head = this.head
		let count = 0
		while (head?.value) {
			count += 1
			head = head.next
		}
		return count
	}

	delete(value: T): string {
		let prev: Node | null = null
		let next: Node | null = null
		let currentNode: Node | null = this.head
		while (currentNode) {
			if (currentNode.value === value) {
				currentNode = next
				return `O valor ${value} foi deletado da lista.`
			}
			prev = currentNode.prev
			currentNode = currentNode.next
			next = currentNode?.next
		}
		throw new Error('O valor não existe na lista.')
	}

	search(value: T): Node | null {
		let currentNode = this.head

		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode
			}
			currentNode = currentNode.next
		}
		return null
	}
}
