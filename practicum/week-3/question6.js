/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
	let map = new Map();
	for (let e of input){
		if (!map.has(e)){map.set(e, 1);}
		else{map.set(e, map.get(e)+1);}
	}
	
	let times = parseInt(input.length/2);
	
	for (let [key, val] of map){
		if (val > times){return key;}
	}
	
	return -1;
};

console.log(m_element([1, 2, 2, 3, 2, 7, 2])); // 2
console.log(m_element([1, 3, 2, 3, 3, 7, 3])); // 3
console.log(m_element([1, 2, 3, 4, 5, 6, 7, 8])); // -1