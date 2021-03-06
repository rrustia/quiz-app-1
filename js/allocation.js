
function changeChart(thisQuestion, thisAnswer) {
	var score = getScore(thisQuestion, thisAnswer);

	state[0].value += score;
	state[1].value = 100 - state[0].value;
	
	return;
}

function getScore(question, answer) {
	return {
		"0": {
			"0":5,
			"1":4,
			"2":2,
			"3":3
		},		
		"1": {
			"0":2,
			"1":1,
			"2":-1,
			"3":-2
		},
		"2": {
			"0":1,
			"1":3,
			"2":5,
			"3":7
		},
		"3": {
			"0":1,
			"1":2,
			"2":3,
			"3":4
		},
		"4": {
			"0":2,
			"1":1,
			"2":-1,
			"3":-2
		},
		"5": {
			"0":1,
			"1":0,
			"2":-1,
			"3":-2
		},
		"6": {
			"0":-3,
			"1":-2,
			"2":-1,
			"3":0
		},
		"7": {
			"0":1,
			"1":0,
			"2":-1,
			"3":-2
		},
		"8": {
			"0":2,
			"1":1,
			"2":-1,
			"3":-2
		},
		"9": {
			"0":2,
			"1":1,
			"2":-1,
			"3":-2
		}

	}[question][answer]
}