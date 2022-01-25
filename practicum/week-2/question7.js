/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
	input.sort();
	let result  = 0;
	
	for (let i=0; i<input.length; i+=2){
		result += input[i];
	}
	return result;
};



// console.log(maxSumOfMins([4, 3, 8, 0]) ==4);
// console.log(maxSumOfMins([1, 3, 4, 2, 6, 8, 5, 7])==16);
// console.log(maxSumOfMins([4, 3, 8, 1])==5);


// [1, 3, 4, 2, 6, 8, 5, 7] => 16
// min(8,7) + min(5,6)+min(3,4)+min(1,2)
// 7+5+3+1 = 16

// [4, 3, 8, 1] => 5
// min(4,8) + min(3,1)
// 4+1 = 5