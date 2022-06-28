//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS: Student[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry']

const PLANT_CODES = {
	G: 'grass',
	V: 'violets',
	R: 'radishes',
	C: 'clover'
} as const

type Student = string
type Plant = typeof PLANT_CODES[keyof typeof PLANT_CODES]
type Plants = Plant[]

export class Garden {
	diagram: string
	students: Student[]
	constructor(diagram: string, students = DEFAULT_STUDENTS) {
		this.diagram = diagram
		this.students = students
	}

	public plants(student: Student): Plants {
		const splitted_diagram = this.diagram.split('\n')
		let pots = []
		const sortedStudents = this.students.sort()
		for (let i = 0; i < sortedStudents.length; i++) {
			if (sortedStudents[i] === student) {
				pots.push(splitted_diagram[0][i * 2], splitted_diagram[0][i * 2 + 1], splitted_diagram[1][i * 2], splitted_diagram[1][i * 2 + 1])
			}
		}
		let result = []
		for (let code of pots) {
			result.push((PLANT_CODES as any)[code])
		}
		return result as Plants
	}
}
