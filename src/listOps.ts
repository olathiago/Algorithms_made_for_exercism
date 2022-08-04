export class List {
	public values: unknown[] = []
	private size = 0

	constructor(values: unknown[] = []) {
		for (const el of values) {
			this.values[this.size] = el
			this.size++
		}
	}
	public static create(...values: unknown[]): List {
		return new this(values)
	}
	append(list: List): List {
		for (let i = 0; i < list.size; i++) {
			this.values[this.size] = list.values[i]
			this.size++
		}
		return this
	}
	concat(list: List): List {
		const newList = List.create(...this.values)
		for (let i = 0; i < list.size; i++) {
			newList.append(list.values[i] as List)
		}
		return newList
	}
	filter<T>(callback: (item: T) => boolean): List {
		let newList = List.create()
		for (let i = 0; i < this.size; i++) {
			if (!callback(this.values[i] as T)) {
				continue
			}
			newList.push(this.values[i])
		}
		return newList
	}
	foldl<A, B>(callback: (previousValue: A, currentValue: B) => A, initialValue: A): any {
		let result = initialValue
		for (let i = 0; i < this.size; i++) {
			result = callback(result, this.values[i] as B)
		}
		return result
	}
	foldr<A, B>(callback: (previousValue: A, currentValue: B) => A, initialValue: A): any {
		let result = initialValue
		for (let i = 0; i < this.size; i++) {
			result = callback(result, this.values[this.size - i - 1] as B)
		}
		return result
	}
	forEach(callback: (item: unknown) => void): void {
		for (let i = 0; i < this.size; i++) {
			callback(this.values[i])
		}
	}
	length(): number {
		return this.size
	}
	map<T>(callback: (item: T) => T): List {
		let newList = List.create()
		for (let i = 0; i < this.size; i++) {
			newList.push(callback(this.values[i] as T))
		}
		return newList
	}
	push(item: unknown): void {
		this.values[this.size] = item
		this.size++
	}
	reverse(): List {
		const newList = List.create()
		for (let i = 1; i <= this.size; i++) {
			newList.push(this.values[this.size - i])
		}
		return newList
	}
}
