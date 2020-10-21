// * Strings and Template Literals — Amit

//? Template literals are string literals
//allowing embedded expressions. We can use multi-line
//strings and string interpolation features with them.
let name = "Alex";
let city = "Berlin";
let age = 20;
let strEs6 = `hello my name is ${name}.I am ${age}. I live in ${city}.`;
console.log("strEs6 ==>", strEs6);
let str2Es6 = `hello my name is ${name}.I am ${age * 2}. I live in ${city}.`;
console.log("str2Es6 ==>", str2Es6);

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
