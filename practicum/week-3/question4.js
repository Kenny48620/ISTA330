/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function(input) {
	let set = new Set();
	for (let val of input){
		if (!set.has(val)){set.add(val);}
		else return true;
	}

	return false;
};


console.log(hasDuplicates([19,1,1,23,23,4,3,23,1,2]));
console.log(hasDuplicates([19, 18, 17, 23, 24, 4, 3, 26, 1, 2])); // false
console.log(hasDuplicates([3, 5, 90, 21, 3])); // true

console.log(hasDuplicates([3, 5, 90, 21])); // false
