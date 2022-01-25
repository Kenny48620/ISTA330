/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {

	let map = new Map();
	for (let i=0; i<input.length; i++){
		map.set(shuffleIndices[i], input[i]);
	}

	let result = "";

	for (let i=0; i<input.length; i++){
		result += map.get(i);
	}

	return result;
};

// console.log(suffleString("llheo",[2, 3, 0, 1, 4] ));
// console.log(suffleString('emelwco', [1, 5, 6, 2, 0, 3, 4]) == "welcome");
// console.log(suffleString('singgreet', [8, 5, 6, 0, 7, 1, 2, 3, 4]) == "greetings");
