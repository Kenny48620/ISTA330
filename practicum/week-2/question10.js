/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
	let min = n%10;
	let max = n%10;
	while (n != 0){
		let cur = n%10;
		if (cur > max){max = cur;}
		else if (cur < min){min = cur;}
		n = parseInt(n/10);
	}
	return max-min;
};

// console.log(maxMinusMin(472));
// console.log(maxMinusMin(87034) == 8);

// console.log(maxMinusMin(4729) == 7);






