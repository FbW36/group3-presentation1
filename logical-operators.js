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

// 3 + 4 * 5 // returns 23

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