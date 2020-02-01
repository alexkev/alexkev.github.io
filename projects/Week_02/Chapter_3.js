/* 
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

*/

let min = (num1, num2) => {
	return num1 < num2 ? num1 : num2;
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/* 
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

let isEven = even => {
	if (even < 0) {
		even *= -1;
	}
	if (even % 2) {
		return false;
	} else {
		return true;
	}
};

// using recursion

function isEven(n) {
	if (n == 0) return true;
	else if (n == 1) return false;
	else if (n < 0) return isEven(-n);
	else return isEven(n - 2);
}

/* 
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countChar(string, ch) {
	let counted = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] == ch) {
			counted += 1;
		}
	}
	return counted;
}

function countBs(string) {
	return countChar(string, 'B');
}

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
