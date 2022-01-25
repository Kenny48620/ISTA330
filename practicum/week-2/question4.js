/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
	let count = 0;
	let mySet = new Set(A);
	for (let i=0; i<B.length; i++){
		if (mySet.has(B[i])){ count++;}
	}
	return count;
};



// let a="gty";
// let b="iTygrtg"

// console.log(howManyCommon('gtY', 'iTygrtg'));
// console.log(howManyCommon('asDf', 'dsssaaFa') == 6);
// console.log(howManyCommon('te', 'TTTER') == 0);
// console.log(howManyCommon('asDf', 'dsssaaF') == 5);
// console.log(howManyCommon('tek', 'TTTERk') == 1);
