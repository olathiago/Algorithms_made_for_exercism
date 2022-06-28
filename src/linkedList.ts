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

export class LinkedList {
	head: Node | null
	tail: Node | null

	constructor() {
		this.head = null
		this.tail = null
	}

	// add to end of list / tail
	append(value: any): void {
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
	prepend(value: any): void {
		if (!this.head) {
			this.head = this.tail = new Node(value)
		} else {
			let oldHead = this.head
			this.head = new Node(value)
			oldHead.prev = this.head
			this.head.next = oldHead
		}
	}

	deleteHead(): void {
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

	deleteTail(): void {
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

	search(value: any): Node | null {
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
