
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
	// set last element to be the largest
    let largest = input[input.length-1];
    for (let i=0; i<input.length; i++){
    	let curSum = input[i];
    	for (let j=i+1; j<input.length; j++){
    		curSum += input[j];
    		if (curSum > largest){largest=curSum;}
   		}
    }
    return largest;
};


console.log(largestSubarray([-12,3,-1,5,-2,1,-7]) == 7);
console.log(largestSubarray([-17,3,1,5,-9,-1,10]) == 10);
console.log(largestSubarray([-12, 3, -1, 5, 2, -1, -7]) == 9);
