/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
 [1,4,6,4,1]
]
*/

var PascalTriangle = function(n) {
	if(n.length == 0) {return [[]];}
	if(n.length == 1) {return [[1]];}
	if(n.length == 2) {return [[1,1]];}

	triangle = [[1],[1,1]];
	for (let i=2; i<n; i++){
		let buttom = triangle[triangle.length-1];
		let nextLevel = [1,1];
		for (let i=1; i<buttom.length; i++){
			nextLevel.splice(i, 0, buttom[i-1]+buttom[i]);
		}
		triangle.push(nextLevel);
	}
	return triangle;
};

console.log(PascalTriangle(4));
console.log(PascalTriangle(5));
console.log(PascalTriangle(6));


