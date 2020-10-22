// **Mathematical Expressions — Azael
// **Logical Operators — Sezai
// **Strings — Amit & Mohammed
// 	- Strings and quotes
// 	- Template Literals
// ** String Methods
// 	- length — Mohammed
// 	- indexOf() — Cindy
// 	- lastIndexOf() — Cindy
// 	- includes() — Mami
// 	- slice() — Adrian
// 	- split() — Olha


/*
======================
TODO (1) Mathematical Expressions — Azael
======================
*/

// An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces Infinity).

// Also we can use the Remainder operator (%) and Exponentiation operator (**)

//The patenthesis () is important in programming, the use is:

// -Group code to be executed in a specific order
// -Tell the language that it should use the result of an operation grouped by others only when it has finished making its processes and become a certain value.
// -They work like real life parentheses in math (for math operations, what is inside parentheses will always be executed first).

let parenthesis = (3 + 5) / 8;

console.log("parenthesis :>> ", parenthesis); // parenthesis :>>  1

// *For example:

//? addition (+)

let num1 = 3;
let num2 = 8;
let add = num1 + num2;

console.log("add :>> ", add); // add :>>  11

//? subtraction (-)

let num3 = 7;
let num4 = 2;
let sub = num3 - num4;

console.log("sub :>> ", sub); // sub :>>  5

//? multiplication (*)

let num5 = 11;
let num6 = 6;
let mul = num5 * num6;

console.log("mul :>> ", mul); // mul :>>  66

//? and division (/)
let num7 = 3;
let num8 = 8;
let div = num7 / num8;

console.log("div :>> ", div); // div :>>  0.375

//? Remainder operator (%)  returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

let num9 = -8;
let num10 = 3;
let rem = num9 % num10;

console.log("rem :>> ", rem); // rem :>>  -2

// ? Exponentiation operator (**)  returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow

let num11 = 6;
let num12 = 2;
let exp = num11 ** num12;

console.log("exp :>> ", exp); // exp :>>  36


/// 

console.log("5" - 5); // 0
console.log(5 - "5"); // 0



/*
======================
TODO (2) Logical Operators — Sezai
======================
*/

//! logical operators 
//------------------ 
// 1. OR ||  
// 2. AND && 
// 3. Mixing || and &&
// 4. NOT !


//! 1. OR ||
// The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

// or ==> || good dude  - if || find first true case, it will take it otherwise it will continue to the end and take last one

//Examples
let testOr1 = false || true || true;
console.log("testOr1 ==>", testOr1); // picks the first True 

let testOr2 = false || false || false;
console.log("testOr2 ==>", testOr2); // will return FALSE and takes the last statement

let testOr3 = 3 || 5;
console.log("testOr3 ==>", testOr3); // 3

const a = 3;
const b = -2;
console.log("const ==> ", a > 0 || b > 0); //true


console.log("more examples ==> ", false || null || undefined || "" || 0 || "JAVASCRIPT"); // Result will be JAVASCRIPT

// If a value can be converted to true, the value is so-called ==> truthy. 
// If a value can be converted to false, the value is so-called ==> falsy.

// Examples of expressions that can be converted to false are: 
// null; NaN; 0; empty string ("" or '' or ``); undefined.


//! 2. AND &&
//The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean value. However, the && operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

//and ==> && bad dude  - if && find first false case, it will take it otherwise it will continue to the end and take last one

// Examples
const a2 = 3;
const b2 = -2;
console.log("const ==>", a2 > 0 && b2 > 0);  // b2 > 0 ==> false

let testAnd = 8 && 11;
console.log("testAnd ==>", testAnd); // 11 - both truthy cases but continues to end and pick last one

console.log("more examples1 ==> ", 1 && "javascript" && true && false); //false - because the others are all truthy

console.log("more examples 2 ==> ", "a" && "b" && "c"); // "c" 

// If a value can be converted to true, the value is so-called ==> truthy. 
// If a value can be converted to false, the value is so-called ==> falsy.

// Examples of expressions that can be converted to false are: 
// null; NaN; 0; empty string ("" or '' or ``); undefined.


//! 3. Mixing || and &&
console.log("mix1 ==> ", ("a" && "b") || false || null); //b
console.log("a AND b ==> ", "a" && "b"); // b
console.log("mix2 ==> ", ("a" && "") || false || null); //null


// Precedence of Logical Operators - Operator precedence determines the order in which operators are evaluated. Operators with higher precedence are evaluated first.

//* 3 + 4 * 5 // returns 23

// The multiplication operator ("*") has higher precedence than the addition operator ("+") and thus will be evaluated first.

// Link for a Table of Operator Precedence -> 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/*
a || (b * c);  // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c);  // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c;        // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
*/


//! 4. Logical NOT ! 
//The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true.

// REVERSE almost anything / TAKE THE OPPOSITE !

// Example
const a3 = 3;
const b3 = -2;

console.log("logical not! ==> ", !(a3 > 0 || b3 > 0)); // false
console.log(!a3); // false




/*
======================
TODO (3) Strings — Amit
======================
*/// 	- Strings and quotes
// 	- Template Literals

//? In JavaScript, the textual data is stored as strings.
//The String object is used to represent and manipulate a sequence of characters.
//strings are useful for holding data that can be represented in text form.
// in this example we manupulate the string
let str = "nice weather Today";
console.log("toUpperCase:", str.toUpperCase()); // NICE WEATHER TODAY

//? Quotes
//Strings can be enclosed within either
//single quotes, double quotes
let single = "single-quoted";
console.log(single);
let double = "double-quoted";
console.log(double);
let x = 'It"s alright.';
console.log(x);

//? Template literals are string literals
//allowing embedded expressions. We can use multi-line
//strings and string interpolation features with them.
let name = "Alex";
let city = "Berlin";
let age = 20;
let strEs6 = `hello my name is ${name}.I am ${age}. I live in ${city}.`;
console.log("strEs6 ==>", strEs6); // strEs6 ==> hello my name is Alex.I am 20. I live in Berlin.
let str2Es6 = `hello my name is ${name}.I am ${age * 2}. I live in ${city}.`;
console.log("str2Es6 ==>", str2Es6); // str2Es6 ==> hello my name is Alex.I am 40. I live in Berlin.

let x1 = 'It\'s alright.'; // using backslash to escape the single quotes
console.log(x1); // It's alright.

/*
======================
TODO Strings & Template Literals — Mohammed
======================
*/

// We can define string in JavaScript it different ways
//? A-  surrounding string within double quotations 
// Example:
let jsStrDouble = "Java Script";

//? B- surrounding string within single quotations
// Example:
let jsStrSingle = 'Java Script';

//? C- Using Template Literals
// Template Literals also called "template strings" is a string with the ability to put variables and manipulate expressions inside it. Expressions if any are preceded with ampersand sign and surrounded by curly braces.

// Example:
let arrNumbers = [1, 2, 3];
console.log(`The numbers array is ${arrNumbers}`);

//* In methods a, and b we can not include variable or manipulate expression.






//TODO (4) String Methods

/*
======================
//* length — Mohammed
======================
*/

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

let jsString = "Java Script";
let jsStringLen = jsString.length;
console.log("The length of the given string is ==>", jsStringLen); // 11

// * 2 - Array

const arrColors = ["red", "white", "blue", "yellow", "green"];
let arrColorsLen = arrColors.length;
console.log("The length of the given array is ==>", arrColorsLen); // 5





/*
======================
//* indexOf() & lastIndexOf() — Cindy
======================
*/

//! indexOf() Method != lastIndexOf()Method

//! IMPORTANT! =>  Both methods are case sensitive. => aAbBcCdDeE 

//Parameter Values

//Parameter 	- - - -- - - -- - -- -Description
//searchvalue 	                      Required. The string to search for
//start 	                          Optional. Default 0. At which position to start the search

//*                          string.indexOf(searchvalue, start)

/******************************************************************************** */

//? Let's talk about indexOf() ===> 
let pokemonString = "My favorite pokemon is pokemon No. 50 because he is the strongest pokemon";//This is your string!! 
let whereIsThis = pokemonString.indexOf("pokemon");//You need to know where this word is ...
console.log("The FIRST occurrence of your word is in => ", whereIsThis + " position") // The FIRST occurrence of your word is in =>  12 position

//The indexOf() method returns the position of the first occurrence of a specified value in a string.

//In other words, you will be printing the "first position" of the specified item. 

//You will get -1 if the value to search for never occurs. (if item doesn't exist in your string...izi pizi right? )

/************************************************************************************** */

//Now let's talk about lastIndexOf() ===> cAsE sEnSiTiVe " :o "

//Parameter Values

//Parameter -- - - - - -- - - - Description
//searchvalue  =>	    Required. The string to search for
//start 	   =>       Optional. The position where to start the search (searching backwards). 
//                      If omitted, the default value is the length of the string

//                      string.lastIndexOf(searchvalue, start) 

//? lastIndexOf()Method

let pokemonString2 = "My favorite pokemon is pokemon No. 50 because he is the strongest pokemon ";//This is your string!! 
let whereIsThis2 = pokemonString2.lastIndexOf("pokemon");//You need to know where this word is ...
console.log("The LAST occurrence of your word is in => ", whereIsThis2 + " position"); // The LAST occurrence of your word is in =>  66 position

//The lastIndexOf() method returns the position of the LAST occurrence of a specified value in a string.

//In other words, you will be printing the position of the "last apparition" of an item. 

//You will get -1 if the value to search for never occurs. (if item doesn't exist in your string...izi pizi right? )

/*************************************************************/

//GETTING -1 as a result!!! 
//let pokemonString = "My favorite pokemon is pokemon No. 50 because he is the strongest pokemon";//This is your string!! 
let iAmNotAnItem = pokemonString.indexOf("pikachu");//You need to know where this word is ...
console.log("Is there a 'pikachu' inside my string? => ", iAmNotAnItem + " = there is not a pikachu there");
// Is there a 'pikachu' inside my string? =>  -1 = there is not a pikachu there

let iAmNotAnItem2 = pokemonString2.lastIndexOf("blastoise");//You need to know where this word is ...
console.log("Is there a 'blastoise' inside my string? => ", iAmNotAnItem2 + " there is not a blastoise there");
// Is there a 'blastoise' inside my string? =>  -1 there is not a blastoise there




/*
======================
//* includes() — Mami
======================
*/

//includes()
//includes() returns a boolean (true or false)
//The value you’re checking in the string/array are case sensitive(uppercase and lowercase letters are treated as distinct.).
//The value you’re checking in the string/array must be an exact match.
//Store the response (true/false) as a variable


const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

//=================================================================
const toBeStr = 'To be, or not to be, that is the question.' 

console.log("To be ==>", toBeStr.includes('To be'))        // true
console.log("question ==>", toBeStr.includes('question'))     // true
console.log("nonexistent ==>", toBeStr.includes('nonexistent'))  // false


//The value you’re checking in the string/array are case sensitive(uppercase and lowercase letters are treated as distinct.).
console.log("TO BE ==>", toBeStr.includes('TO BE'))        // false

//option:  you can Specify the first position to start searching
console.log("To be 0 ==>", toBeStr.includes('To be', 0))     // true
console.log("To be -1 ==>", toBeStr.includes('To be', -1))     // true
console.log("To be 1 ==>", toBeStr.includes('To be', 1))     // false



/*
======================
//* slice() — Adrian
======================
*/

//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
const thisIsMyString = 'This is a string, right here';

// Syntax
// str.slice(beginIndex[, endIndex])

//beginIndex ===================================>
//***The beginIndex is going to be the zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex.
const beingIndexNegative = thisIsMyString.slice(-3); //ere
//***If beginIndex is greater than or equal to str.length, an empty string is returned.
const beginIndexGreaterThanLength = thisIsMyString.slice(300); // " "
//***If beginIndex is not a number after Number(beginIndex), it is treated as 0.
const beginIndexNotANumber = thisIsMyString.slice('hello'); // This is a string, right here

//endIndex (Optional) ==========================>
//*** The endIndex is going to be the zero-based index *before* which to end extraction. The character at this index will not be included.
//***If endIndex is omitted or undefined, or greater than str.length, slice() extracts to the end of the string.
const endIndexOmitted = thisIsMyString.slice(10); //"string, right here"
const endIndexUndefined = thisIsMyString.slice(10, undefined); //"string, right here"
const endGreaterThanLength = thisIsMyString.slice(10, 400); // "string, right here"
//***If negative, it is treated as str.length + endIndex.
const enfIndexNegative = thisIsMyString.slice(10, -2); //"string, right he"
//***If it is not undefined and not a number after Number(endIndex), an empty string is returned.
const endIndexNotANumber = thisIsMyString.slice(10, 'hello'); // " "
//***If endIndex is specified and startIndex is negative, endIndex should be negative, otherwise an empty string is returned.
const bothNegative = thisIsMyString.slice(-13, -5); // "g, right"
const startIndexNegative = thisIsMyString.slice(-3, 10); // " "
//***If endIndex is specified, and startIndex and endIndex are both positive or negative, endIndex should be greater than startIndex, otherwise an empty string is returned.
const bothNegative1 = thisIsMyString.slice(-5, -13); // " "
//the RETURN VALUE is A new string containing the extracted section of the string.

//Because this method returns a NEW string, it can be used to clone a string
const clonedString = thisIsMyString.slice(); // This is a string, right here





/*
======================
//* split() — Olha
======================
*/

let someString = "some string that has a bunch of words";

//? 1. .split() — What does it do?
// 1) divides a string into an ordered list of substrings
// 2) puts these strings into an array
// 3) returns the array

const splitString = someString.split(" ");
console.log(splitString); // ['some', 'string', 'that', 'has', 'a', 'bunch', 'of', 'words']

//? 2. What arguments can it accept?
// up to 2 arguments. both are optional.

//* 1) separator
// a pattern that describes where the splits should occur.
// value — string or regular expression

const splitString1 = someString.split(" ");
console.log("split by space as a string", splitString1); // ['some', 'string', 'that', 'has', 'a', 'bunch', 'of', 'words']

const splitString2 = someString.split("s");
console.log("split by the letter 's'", splitString2); // [ '', 'ome ', 'tring that ha', ' a bunch of word', '' ]

const splitString3 = someString.split(/ /);
console.log("split by space as a regular expression", splitString3); // ['some', 'string', 'that', 'has', 'a', 'bunch', 'of', 'words']

const splitString4 = someString.split("string");
console.log("split by the word 'string'", splitString4); // split by the word 'string' [ 'some ', ' that has a bunch of words' ]

const splitString5 = someString.split("");
console.log("split by the empty string", splitString5); // split by the empty string [ 's', 'o', 'm', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g', ' ', 't', 'h', 'a', 't', ' ', 'h', 'a', 's', ' ', 'a', ' ', 'b', 'u', 'n', 'c', 'h', ' ', 'o', 'f', ' ', 'w', 'o', 'r', 'd', 's']

//* 2) limit
// the number of substrings that the returned array will contain
// value — number (non-negative integer)

const splitString6 = someString.split(" ", 3);
console.log("3 as the limit:", splitString6); // [ 'some', 'string', 'that' ]

const splitString7 = someString.split(" ", 0);
console.log("0 as the limit:", splitString7); // []

const splitString8 = someString.split(" ", -3); // is disregarded
console.log(splitString8);  // ['some', 'string', 'that', 'has', 'a', 'bunch', 'of', 'words' ]