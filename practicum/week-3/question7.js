/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3], [4,5,6]]

output: [[1,4], [2,5], [3,6]]
*/

var transpose = function(M) {

	let rows = M[0].length;
	let cols = M.length;
	let matrix = [];

	for (let row=0; row<rows; row++){
		let arr = [];
		for (let col=0; col<cols; col++){
			arr.push(M[col][row]);
		}
		matrix.push(arr);
	}

	return matrix;
};

console.log(transpose([[1,2,3],[4,5,6]])); // [[1,4], [2,5], [3,6]]
console.log(transpose([[1,4], [2,5], [3,6]])); // [[1,2,3],[4,5,6]]
console.log(transpose([[1, 2, 3], [7, 5, 6]])); // [[1, 7], [2, 5], [3, 6]]