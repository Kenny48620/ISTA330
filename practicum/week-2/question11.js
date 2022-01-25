/*
Given an array of integers, input, representing a list encoded, decode the list.
Every pair (2*i, 2*i + 1) of elements in the input, 
means in the decoded list we have as many as input[2*i]'s of the quantity  input[2*i + 1].


Example:
input: [2, 5, 4, 2] (this means in the encoded list we will have two 5's and four 2's )
output: [5, 5, 2, 2, 2, 2]
*/

var decode = function(input) {
	let result = [];
	for (let i=0; i<input.length; i+=2){
		let times = input[i];
		let val   = input[i+1];
		for (let j=0; j<times; j++){
			result.push(val);
		} // close inner loop
	} // close outer loop
	return result;
};

// console.log(decode([2, 5, 4, 2]));

// console.log(decode([2, 5, 5, 2])); // [5, 5, 2, 2, 2, 2, 2]
// console.log(decode([0, 8, 1, 3, 2, 7])); // [3, 7, 7]


// console.log("My Example:");
// console.log(decode([3, 0, 0, 2, 1,1,2,2,3,3]));
