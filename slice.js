/*
======================
String method: .slice()
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
