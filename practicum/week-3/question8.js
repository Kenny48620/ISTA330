/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
	let map = new Map();
	for (let e of input){
		if (!map.has(e)) {map.set(e, 1);}
		else {map.set(e, map.get(e)+1);}
	}
	let dInteger = -1;
	for (let [key, val] of map){
		if (key == val){
			if (key > dInteger) {dInteger = key;}
		}
	}
	return dInteger;
};

console.log(d_integer([3,5,3,3,5,1]));
console.log(d_integer([3, 5, 3, 4, 4, 3, 5, 1, 4, 4])); // 4
console.log(d_integer([3, 6, 3, 9, 6, 45, 86, 9] ));// -1