/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
   let max = Math.max(...input);
   let index = input.indexOf(max);
   for (let i=0; i<input.length; i++){
   		if((input[i]*2) > max && i != index) {return false;}
   }
   return true;
};

console.log(largestNumberIsAtLeastTwice([3,2,21,50]) == true);//true
console.log(largestNumberIsAtLeastTwice([3,2,26,50]) == false);//false
console.log(largestNumberIsAtLeastTwice([3,2,1,57]) == true);//true
console.log(largestNumberIsAtLeastTwice([3,2,1,5]) ==false);//false