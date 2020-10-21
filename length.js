// * Length — Mohammed
// ----------
/* 
- length is a property in JavaScript.
- It returns the length of a given string or an array.
- length returns the actual number of the available letters in case of string
- length returns the actual number of the available items in case of array
- if we need to manipulate a string or an array based on the length property,
we should keep in mind to start from 0 to the length -1, that is because index
always starts from 0.
- white space is counted as a member or an element
*/

// Examples:

// * 1 - String

let str = "Java Script";
let l = str.length;
console.log("The length of the given string is ==>", l); // 11

// * 2 - Array

const arrColors = ["red", "white", "blue", "yellow", "green"];
let l = arrColors.length;
console.log("The length of the given array is ==>", l); // 5


// * 2. — Template Literals — Mohammed

// We can define string in JavaScript it different ways
//? A-  surrounding string within double quotations 
// Example:
let str = "Java Script";

//? B- surrounding string within single quotations
// Example:
let str = "Java Script";

//? C- Using Template Literals
// Template Literals also called "template strings" is a string with the ability to put variables and manipulate expressions inside it. Expressions if any are preceded with ampersand sign and surrounded by curly braces.

// Example:
console.log(`The numbers array is ${arrNumbers}`);

//* In methods a, and b we can not include variable or manipulate expression.
