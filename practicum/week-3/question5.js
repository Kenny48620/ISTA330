/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
	if (input.length == 0) {return false;}
	if (input.length == 1) {return true;}

	let state = "increasing";
	if (input[0] > input[input.length-1]){state = "decreasing";}

	if (state == "increasing"){
		for (let i=1; i<input.length; i++){
			if (input[i-1] > input[i]){return false;}
		}
	}
	else if (state == "decreasing"){
		for (let i=1; i<input.length; i++){ 

			if (input[i-1] < input[i]){return false;}
		}
	}
	return true;
};

console.log('hi');
console.log(isMonotonic([12, 6, 2, 2, 2, 0]));
console.log(isMonotonic([12, 6, 2, 2, 2, 3])); // false
console.log(isMonotonic([29, 61, 310, 2500, 231000])); //true
console.log(isMonotonic([29, 6, 31, 2, 23, 40])); // false
