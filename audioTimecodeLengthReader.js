const loadFile = () => {
	//input your chosen file instead of 'dummyText.txt'
	let all = fs.readFileSync('dummyText.txt', "utf8")
	all = all.trim()
	let lines = all.split("\n")
	for (let i=0; i<lines.length; i++){
		let separator = lines.indexOf(lines[i])
		if ((separator - 1) % 9 == 0){
			numArr.push(lines[i])
		}
	}
	let n = lines.length;
	return numArr
}

const grabArr = loadFile()
let furtherSplit = [];

const processNumArr = () => {
	for (let j=0; j<grabArr.length; j++){
		furtherSplit.push(grabArr[j].split('-->'))
	}

	return furtherSplit.flat()
}

let splitUp = processNumArr()

let formatted;
let questionTimes;
let timeStart;
let timeEnd;

let datesArr = []

for (let z=0;z<splitUp.length;z++){
	formatted = splitUp[z].replace(' ', '').replace(',', ':')
	formatted.slice(0, -3)
	datesArr.push(new Date("January 06, 06 " + "00: " + formatted.substring(3)))
}
datesArr.filter(p => p != 'Invalid Date')

let finalArr = []

for (let x=0; x<datesArr.length; x++){
	finalArr.push(Math.abs(Math.ceil((new Date(datesArr[x + 1]))) - ((new Date(datesArr[x])))) / 1000 + " seconds")
}
console.log('Time Differences', finalArr.filter(e => e !== '0 seconds' && e !== 'NaN seconds'))