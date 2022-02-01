/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
*/

var d_count = function(input1, input2, d) {
	let count = 0;
	for (let e1 of input1){
		let find = false
		for (let e2 of input2){
			if (Math.abs(e1-e2) <= d){
				find = true;
				break;
			}
		}
		if (!find){count ++;}
	}
	return count;
};


console.log(d_count([2,1,26,3],[-5,-2,10,-3,7], 6 ))//1
console.log(d_count([2, 100, 37, 39], [4, 8, 10, 0, -14], 10))//3
console.log(d_count([2,100,37,3], [4,8,10,0,-14], 10))//2