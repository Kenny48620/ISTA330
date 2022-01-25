/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
	let pairs = 0;
	for (let i=0; i<input.length; i++){
		let val1 = input[i];
		for (let j=i+1; j<input.length;j++){
			if (val1 < input[j]){pairs++};
		}
	}
	return pairs;
};




// console.log(numberOfOrderedPairs([4,2,6,9]) == 5);
// console.log(numberOfOrderedPairs([5,6,7]) == 3);
// console.log(numberOfOrderedPairs([3,2,1,0]) == 0);
// console.log(numberOfOrderedPairs([5,6,1]) == 1);
// console.log(numberOfOrderedPairs([3,5,2,8]) == 4);
