//* .includes() — Mami

//includes() returns a boolean (true or false)
//The value you’re checking in the string/array are case sensitve(uppercase and lowercase letters are treated as distinct.).
//The value you’re checking in the string/array must be an exact match.
//Store the response (true/false) as a variable

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

const str = 'To be, or not to be, that is the question.' 

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false

//Specify the first position to start searching
console.log(str.includes('To be', 1))     // false

//The value you’re checking in the string/array are case sensitve(uppercase and lowercase letters are treated as distinct.).
console.log(str.includes('TO BE'))        // false

console.log(str.includes(''))             // true