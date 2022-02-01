/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;

	let fibArr = [0,1];
	for (let i=2; i<=n; i++){
		let f_n1 = fibArr[i-1];
		let f_n2 = fibArr[i-2];
		fibArr.push(f_n1+f_n2);
	}

	return fibArr[fibArr.length-1];
};

console.log(F(9)); //34
console.log(F(10)); //55
console.log(F(30)); //832040