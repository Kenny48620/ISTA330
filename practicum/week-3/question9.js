/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
	if (n < 9) return n;

	let groupsCount = [1,1,1,1,1,1,1,1,1];
	for (let i=10; i<=n; i++){
		groupsCount[i%10] ++;
	}

	let count = 0;
	let val   = groupsCount[0];

	for (let i=0; i<groupsCount.length; i++){
		if (groupsCount[i] == val) {count++;}
		else return count;
	}
	return count;
};

console.log(largestGroupsCount(11));//2
console.log(largestGroupsCount(12));//3
console.log(largestGroupsCount(24));//5