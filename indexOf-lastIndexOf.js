//indexOf() Method != lastIndexOf()Method

//IMPORTANT! =>  Both methods are case sensitive. => aAbBcCdDeE 

//Parameter Values

//Parameter 	- - - -- - - -- - -- -Description
//searchvalue 	                      Required. The string to search for
//start 	                          Optional. Default 0. At which position to start the search

//                          string.indexOf(searchvalue, start)

/******************************************************************************** */

//Let's talk about indexOf() ===> 
let pokemonString = "My favorite pokemon is pokemon No. 50 because he is the strongest pokemon";//This is your string!! 
let whereIsThis = pokemonString.indexOf("pokemon");//You need to know where this word is ...
console.log("The FIRST occurrence of your word is in => ", whereIsThis + " position")

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

//lastIndexOf()Method

let pokemonString2 = "My favorite pokemon is pokemon No. 50 because he is the strongest pokemon ";//This is your string!! 
let whereIsThis2 = pokemonString2.lastIndexOf("pokemon");//You need to know where this word is ...
//console.log("The LAST occurrence of your word is in => ", whereIsThis2 + " position")

//The lastIndexOf() method returns the position of the LAST occurrence of a specified value in a string.

//In other words, you will be printing the position of the "last apparition" of an item. 

//You will get -1 if the value to search for never occurs. (if item doesn't exist in your string...izi pizi right? )

/*************************************************************/

//GETTING -1 as a result!!! 
//let pokemonString = "My favorite pokemon is pokemon No. 50 because he is the strongest pokemon";//This is your string!! 
let iAmNotAnItem = pokemonString.indexOf("pikachu");//You need to know where this word is ...
//console.log("Is there a 'pikachu' inside my string? => ", iAmNotAnItem + " = there is not a pikachu there")
let iAmNotAnItem2 = pokemonString2.lastIndexOf("blastoise");//You need to know where this word is ...
//console.log("Is there a 'blastoise' inside my string? => ", iAmNotAnItem2 + " there is not a blastoise there")


