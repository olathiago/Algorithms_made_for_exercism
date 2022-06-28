export class Matrix {
	matrix: string
	constructor(value: string) {
		this.matrix = value
	}

	get rows(): number[][] {
		const rows = this.matrix.split('\n').map((row: string) => row.split(' ').map((value: string) => Number(value)))
		return rows
	}

	get columns(): number[][] {
		const columns = Object.keys(this.rows).map((r: string) => this.rows.map((row: number[]) => (row as number[])[Number(r)]))
		return columns
	}
}
