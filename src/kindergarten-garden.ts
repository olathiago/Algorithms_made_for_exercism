const studentsNames: Student[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry']

const plantCodes = {
	G: 'grass',
	V: 'violets',
	R: 'radishes',
	C: 'clover'
} as const

type Student = string
type Plant = typeof plantCodes[keyof typeof plantCodes]
type Plants = Plant[]

// The solution could be different here but I chose to try it using EXACTLY the way data was formatted when received. To simulate a "real world" situation.
export class Garden {
	diagram: string
	students: Student[]
	constructor(diagram: string, students = studentsNames) {
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
			result.push((plantCodes as any)[code])
		}
		return result as Plants
	}
}
