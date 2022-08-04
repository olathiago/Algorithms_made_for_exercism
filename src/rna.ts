export type Translation = {
	[translation: string]: string[]
}
const translation: Translation = {
	Methionine: ['AUG'],
	Phenylalanine: ['UUU', 'UUC'],
	Leucine: ['UUA', 'UUG'],
	Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
	Tyrosine: ['UAU', 'UAC'],
	Cysteine: ['UGU', 'UGC'],
	Tryptophan: ['UGG']
}

export function translate(input: string): string[] {
	const result: string[] = []
	const sequences = input.match(/.{1,3}/g) as string[]
	for (const rna of sequences) {
		if (rna === 'UAA' || rna === 'UAG' || rna === 'UGA') {
			return result
		}
		// Red flag: 🚩 Big O Notation will be kinda sad here but I it will be ok.
		for (const [index, item] of Object.entries(translation)) {
			// eslint-disable-next-line array-callback-return
			item.map((value: string) => {
				if (value === rna) {
					result.push(index)
				}
			})
		}
	}
	return result
}
