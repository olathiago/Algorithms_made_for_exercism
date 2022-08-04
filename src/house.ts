// The solution could be different here but I chose to try it using EXACTLY the way data was formatted when received. To simulate a "real world" situation.

const nursery_rhyme = `This is the house that Jack built.

This is the malt
that lay in the house that Jack built.

This is the rat
that ate the malt
that lay in the house that Jack built.

This is the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.

This is the dog
that worried the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.

This is the cow with the crumpled horn
that tossed the dog
that worried the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.

This is the maiden all forlorn
that milked the cow with the crumpled horn
that tossed the dog
that worried the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.

This is the man all tattered and torn
that kissed the maiden all forlorn
that milked the cow with the crumpled horn
that tossed the dog
that worried the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.

This is the priest all shaven and shorn
that married the man all tattered and torn
that kissed the maiden all forlorn
that milked the cow with the crumpled horn
that tossed the dog
that worried the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.

This is the rooster that crowed in the morn
that woke the priest all shaven and shorn
that married the man all tattered and torn
that kissed the maiden all forlorn
that milked the cow with the crumpled horn
that tossed the dog
that worried the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.

This is the farmer sowing his corn
that kept the rooster that crowed in the morn
that woke the priest all shaven and shorn
that married the man all tattered and torn
that kissed the maiden all forlorn
that milked the cow with the crumpled horn
that tossed the dog
that worried the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.

This is the horse and the hound and the horn
that belonged to the farmer sowing his corn
that kept the rooster that crowed in the morn
that woke the priest all shaven and shorn
that married the man all tattered and torn
that kissed the maiden all forlorn
that milked the cow with the crumpled horn
that tossed the dog
that worried the cat
that killed the rat
that ate the malt
that lay in the house that Jack built.`

const rhymes = nursery_rhyme.split('\n\n')

export function verse(n: number): string[] {
	return rhymes[n - 1].split('\n')
}

export function verses(start: number, end: number): string[] {
	let multiple = []
	for (let i = start; i <= end; i++) {
		const versesInArray = rhymes[i - 1].split('\n')
		versesInArray.push('')
		multiple.push(...versesInArray)
	}
	multiple.pop()

	return multiple
}

type Map = {
	[planet: string]: number
}
export function age(planet: string, seconds: number): number {
	const yearInSeconds = 31557600
	const yearInSecondsByPlanet: Map = {
		earth: yearInSeconds,
		mercury: yearInSeconds / 2408467,
		venus: yearInSeconds / 61519726,
		mars: yearInSeconds / 18808158,
		jupiter: yearInSeconds / 11862615,
		saturn: yearInSeconds / 29447498,
		uranus: yearInSeconds / 84016846,
		neptune: yearInSeconds / 16479132
	}
	const result = Number((seconds * yearInSecondsByPlanet[planet]).toFixed(2))
	return result
}
