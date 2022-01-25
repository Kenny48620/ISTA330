/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
	let result = [];
	for (let i=0; i<input.length; i++){
		let count = 0;
		for (let j=0; j<input.length; j++){
			if (i==j) {continue;}
			if (input[j] %2 == 0 && input[j] > input[i]){count++};
		} // close inner loop
		result.push(count);
	} // close outer loop
	return result;
};

// console.log(JSON.stringify(biggerAndEven([23,44,12,4])) === JSON.stringify([1,0,1,2]));
// console.log(JSON.stringify(biggerAndEven([1, 3, 4, 2, 6, 8, 5, 7])) == JSON.stringify([4, 3, 2, 3, 1, 0, 2, 1])) ;

// console.log(JSON.stringify(biggerAndEven([23, 44, 12, 24])) == JSON.stringify([2, 0, 2, 1]));
// console.log(JSON.stringify(biggerAndEven([1, 3, 4, 2, 6, 8, 5, 7])) == JSON.stringify([4, 3, 2, 3, 1, 0, 2, 1]));