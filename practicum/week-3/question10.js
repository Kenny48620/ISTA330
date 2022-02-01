/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {

	input.sort(function(a,b) {return a-b});

	let min = input[input.length-1] - input[input.length-2];

	for (let i=input.length-1; i-1>0; i--){
		let dif = input[i] - input[i-1];
		if (min > dif){min = dif;}
	}

	let pairs = [];
	for (let i=0; i+1<input.length; i++){
	
		let dif = input[i+1] - input[i];
		if (dif == min){
			
			pairs.push([input[i], input[i+1]]);
		}
	}
	return pairs;
};

console.log(minPairs([1,-5,-10,24,19,-4,-14,23]))
console.log(minPairs([17, -5, -1, 24, 29, 54, 1, 27, 19])); // [[-1, 1], [17, 19], [27, 29]]
console.log(minPairs([17,-5,-1,24,29,54,1])); // [[-1, 1]]

