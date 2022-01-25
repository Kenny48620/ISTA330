/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
	let index;
	// odd
	if (input.length%2 != 0){
		index = (input.length+1)/2-1;
		return input[index];
	}
	// even
	else if (input.length%2 == 0){
		index = input.length/2-1;
		return (input[index]+input[index+1])/2
	}
};

// console.log(median([1, 2, 2, 3, 4, 7, 9]));
// console.log(median([1, 2, 3, 4, 5, 6, 7, 8]) == 4.5); // 4.5
// console.log(median([1, 2, 2, 8, 5, 7, 9 ]) == 5); //5 I guess is suppose to be 8 
// console.log(median([1, 2, 3, 4, 6, 6, 7, 8]) == 5);//5

// console.log(median([1,2,2,3,4,7,9]) == 3);
// console.log(median([1,2,3,4,5,6,7,8]) == 4.5);

