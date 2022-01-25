/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
	
	function find(n, operations){
		if (n==0){return operations};
		if (n%4 == 0){return find(n/4, operations+1);}
		if (n%3 == 0){return find(n/3, operations+1);}
		else return find(n-1, operations+1);
	}
	

	return find(n, 0);
};



// console.log(minimalReduction(12));

// console.log(minimalReduction(13) == 4);
// console.log(minimalReduction(19) == 5);

