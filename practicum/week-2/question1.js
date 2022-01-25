/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
   let sumArray = [];
   for (let i=0; i<input.length; i++){
   		if (i == 0){sumArray.push(input[i])}
   		else{ sumArray.push(sumArray[i-1]+input[i])}
   	}
	return sumArray;
};


// let array = [5,6,1];
// let array1 = [43, -3, -39];
// let array2 = [0,2,4,6,8,12];

// console.log("Orginal:"+array);
// console.log(runningSum(array));

// console.log();
// console.log(array1);
// console.log(runningSum(array1));



