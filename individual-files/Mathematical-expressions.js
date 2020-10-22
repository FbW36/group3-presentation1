// An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces Infinity).

// Also we can use the Remainder operator (%) and Exponentiation operator (**)

//The patenthesis () is important in programming, the use is:

// -Group code to be executed in a specific order
// -Tell the language that it should use the result of an operation grouped by others only when it has finished making its processes and become a certain value.
// -They work like real life parentheses in math (for math operations, what is inside parentheses will always be executed first).

let parenthesis = (3 + 5) / 8;

console.log("parenthesis :>> ", parenthesis);

// *For example:

//? addition (+)

let num1 = 3;
let num2 = 8;
let add = num1 + num2;

console.log("add :>> ", add);

//? subtraction (-)

let num3 = 7;
let num4 = 2;
let sub = num3 - num4;

console.log("sub :>> ", sub);

//? multiplication (*)

let num5 = 11;
let num6 = 6;
let mul = num5 * num6;

console.log("mul :>> ", mul);

//? and division (/)
let num7 = 3;
let num8 = 8;
let div = num7 / num8;

console.log("div :>> ", div);

//? Remainder operator (%)  returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

let num9 = -8;
let num10 = 3;
let rem = num9 % num10;

console.log("rem :>> ", rem);

// ? Exponentiation operator (**)  returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow

let num11 = 6;
let num12 = 2;
let exp = num11 ** num12;

console.log("exp :>> ", exp);
