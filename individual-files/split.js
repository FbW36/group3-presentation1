// * String.prototype.split([separator[, limit]]); — Olha

let someString = "some string that has a bunch of words";

//? 1. What does it do?
// 1) divides a string into an ordered list list of substrings
// 2) puts these strings into an array
// 3) returns the array

const splitString = someString.split(" ");
console.log(splitString); // ['some', 'string', 'that', 'has', 'a', 'bunch', 'of', 'words']

//? 2. What arguments can it accept?
// up to 2 arguments. both are optional.

//* 1) separator
// a pattern that describes where the splits should occur.
// value — string or regular expression

const splitString1 = someString.split(" "); // ['some', 'string', 'that', 'has', 'a', 'bunch', 'of', 'words']
const splitString2 = someString.split("s"); // [ '', 'ome ', 'tring that ha', ' a bunch of word', '' ]
const splitString3 = someString.split(/ /); // ['some', 'string', 'that', 'has', 'a', 'bunch', 'of', 'words']
const splitString4 = someString.split("string"); // [ 'some ', ' that has a bunch of words' ]
const splitString5 = someString.split(""); // [ 'some ', ' that has a bunch of words' ]

console.log("split by space as a string", splitString1);
console.log("split by the letter 's'", splitString2);
console.log("split by space as a regular expression", splitString3);
console.log("split by the word 'string'", splitString4); // split by the word 'string' [ 'some ', ' that has a bunch of words' ]
console.log("split by the empty string", splitString5);
/* [
	's', 'o', 'm', 'e', ' ', 's', 't',
	'r', 'i', 'n', 'g', ' ', 't', 'h',
	'a', 't', ' ', 'h', 'a', 's', ' ',
	'a', ' ', 'b', 'u', 'n', 'c', 'h',
	' ', 'o', 'f', ' ', 'w', 'o', 'r',
	'd', 's'
] */

//* 2) limit
// the number of substrings that the returned array will contain
// value — number (non-negative integer)

const splitString6 = someString.split(" ", 3);
const splitString7 = someString.split(" ", 0);
console.log("3 as the limit:", splitString6); // [ 'some', 'string', 'that' ]
console.log("0 as the limit:", splitString7); // []
