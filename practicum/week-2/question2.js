
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

var canGetEqualCookies = function(cookies, extraCookies) {
	let max = Math.max(...cookies);
	for (let i=0; i<cookies.length; i++){	
		if (cookies[i] == max){continue;}
		if (cookies[i] < max){extraCookies-=cookies[i];}
	}
	if (extraCookies < 0 ) return false;
	if (extraCookies%cookies.length == 0) return true;
	else return false; 
};


// let cookies=[3,5,8];
// //[3,5,2] 8
// //[5,5,5] 3
// console.log(canGetEqualCookies([3,5,8], 8));
// console.log(canGetEqualCookies([5,6,1], 6));
// console.log(canGetEqualCookies([3,5,2], 6));
// console.log(canGetEqualCookies([5,6,1], 5));
// console.log(canGetEqualCookies([3,5,2], 8));