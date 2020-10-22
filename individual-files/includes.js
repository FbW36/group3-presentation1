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
const str = 'To be, or not to be, that is the question.' 

console.log("To be ==>",str.includes('To be'))        // true
console.log("question ==>",str.includes('question'))     // true
console.log("nonexistent ==>",str.includes('nonexistent'))  // false


//The value you’re checking in the string/array are case sensitive(uppercase and lowercase letters are treated as distinct.).
console.log("TO BE ==>",str.includes('TO BE'))        // false

//option:  you can Specify the first position to start searching
console.log("To be 0 ==>",str.includes('To be', 0))     // true
console.log("To be -1 ==>",str.includes('To be', -1))     // true
console.log("To be 1 ==>",str.includes('To be', 1))     // false