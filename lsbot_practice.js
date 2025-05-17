/*
problem
input: array and an integer
output: array of arrays (sub arrays have speicified size except for sometimes the last one)

requirements
- if array cant be split into even chunks, the final chunk gets the remaining elements
- elements in array can be of any type
- function must not mutate argument array object 
  - return a new array

examples


questions
will the array ever be a sparse array?
  - how should we hadnle the missing elements
will we always be given two arguments? if not how should which will be first?
what we should we return if the second arg is not given?
Will the first argument always be an array?
Wil lthe second alwasy be an integer? will it always be positive?
will the second argument be zero? what we shoudl we return if so?
Will it ever be Nan, inifigyt of -Infinity
how should we handl an empty array? what should we return?


data structure
input is an array
new array of arrays


algorithm
[1, 2, 3, 4, 5], 2
length 5 
5 / 2

[1, 2, 3, 4, 5], 3


initialize an output array

loop length of floor(array / n ) times, increment loop counter by n
  get slices of n length from current index to current index + n
  add this array slice to the output array
if it can't be divided evenly
  get the num of reaming elements
  get slice from (lenght of array minus remaining elements )
  add those to the output array

return the output array

*/

// function chunkArray(arr, chunkSize) {
//   const chunked = [];
//   let numEvenChunks = Math.floor(arr.length / chunkSize);

//   let idx = 0;
//   for (let _ = 0; _ < numEvenChunks; _ += 1) {
//     chunked.push(arr.slice(idx, idx + chunkSize));
//     idx += chunkSize;
//   }
//   let remaining = arr.length % chunkSize;
//   if (remaining > 0) {
//     chunked.push(arr.slice(arr.length - remaining))
//   }

//   return chunked;
// }



// console.log(chunkArray([1, 2, 3, 4, 5], 2));          // [[1, 2], [3, 4], [5]]
// console.log(chunkArray([1, 2, 3, 4, 5], 3));          // [[1, 2, 3], [4, 5]]
// console.log(chunkArray(['a', 'b', 'c', 'd'], 3));     // [['a', 'b', 'c'], ['d']]
// console.log(chunkArray([true, false, null, undefined], 1)); // [[true], [false], [null], [undefined]]
// console.log(chunkArray([10, 20, 30, 40, 50, 60], 2));  // [[10, 20], [30, 40], [50, 60]]
// console.log(chunkArray([10], 2));  // [[10]]
// console.log(chunkArray([], 2));  // [[]]

// let arr = [1, 2, 3, 4];
// let result = chunkArray(arr, 2);
// console.log(result);                      // [[1, 2], [3, 4]]
// console.log(arr);                         // [1, 2, 3, 4] (original array unchanged)



/*
1. Problem Description: Subarray Product
Write a function called maxProductSubarray that finds the contiguous subarray within an array of integers that has the largest product.

Explicit Rules:
•   The function takes an array of integers as an argument
•   The function should return the maximum product of any contiguous subarray
•   If the array is empty, return 0

Example Test Cases:
maxProductSubarray([2, 3, -2, 4]);         // 6 (from subarray [2, 3])
maxProductSubarray([-2, 0, -1]);           // 0 (from subarray [0])
maxProductSubarray([1, 2, 3, 4]);          // 24 (from subarray [1, 2, 3, 4])
maxProductSubarray([]);                    // 0


Problem

input: array
outpu: number


examples
  if no arg 
    return invalid input

  Array elements can be floating points
    always will be intger or floating point

  can be sparse array
    Missing elements should be treated as a 1

  return value for floating poitns should be in teh hundredths place(0.00)

  if 1 element return element it self


data structure
array
number to store the max product

array to store the combinations


algorithm:
[1,2,3] // 6
1 2 3
12 23
123

High level
all combinations of elements
  from 1 up to the size of the array
    get a slice of the array from 


Detailed 
finding combinations
outer loop iterate length of array times (start index at 1)
  Another loop thater iterates Celiing of length / current slice size (iterator) times
    get a slice from current inner index to current inner index + 1 (the array of length of this loop index)
    add slice to our combinations array


loop over all combindations
  if element is unefined treat it as 1
  if it is single value check if it is larger then the largest we have seen update it if so
  otherwise find the product of the current combinations array
    use the reduce method but if element is unefined treat as 1 
    if prod is larger then the largest we have seen update it

return the max value
*/


// function maxProductSubarray(array) {
//   // guard clauses
//   if (array === undefined) return 'Invalid Input';
//   if (array.length === 0 ) return 0;
//   if (array.length === 1) return array[0];

//   let combinations = findCombinations(array);

//   let max = -Infinity;

//   combinations.forEach(comb => {
//     let product = comb.reduce((prod, fac) => {
//       fac = fac !== undefined ? fac : 1;
//       return prod * fac
//     }, 1);

//     if (product > max) {
//       if (Number.isInteger(product)) {
//         max = product === 0 ? 0 : product;
//       } else {
//         max = Number(product.toFixed(2));
//       }
//     }
//   });

//   return max;
// }


// function findCombinations(arr) {
//   let combinations = [];

//   for (let sliceSize = 2; sliceSize <= arr.length; sliceSize += 1) {
//     for (let sliceIdx = 0; sliceIdx <= arr.length - sliceSize; sliceIdx += 1) {
//       combinations.push(arr.slice(sliceIdx, sliceIdx + sliceSize)); 
//     }
//   }

//   return combinations;
// }
// // [1,2,3,4,5,6,7,8,9, 10]
// console.log(findCombinations([1,2,3]));
// console.log(findCombinations([2, 3, -2, 4]));
// console.log(findCombinations([-2, 0, -1]));



// // function maxProductSubarray(array) {
// //   if (array === undefined) return 'Invalid Input';
// //   if (array.length === 0) return 0;
// //   if (array.length === 1) return array[0];
  
// //   let maxSoFar = array[0];
// //   let minSoFar = array[0]; // We track minimum too because of negative numbers
// //   let result = array[0];
  
// //   for (let i = 1; i < array.length; i++) {
// //     // If we encounter a 0, reset the max and min
// //     if (array[i] === 0) {
// //       maxSoFar = 0;
// //       minSoFar = 0;
// //       result = Math.max(0, result);
// //       continue;
// //     }
    
// //     // Store previous values before updating
// //     let tempMax = maxSoFar;
// //     let tempMin = minSoFar;
    
// //     // Update max and min based on current value
// //     maxSoFar = Math.max(array[i], Math.max(tempMax * array[i], tempMin * array[i]));
// //     minSoFar = Math.min(array[i], Math.min(tempMax * array[i], tempMin * array[i]));
    
// //     // Update result if needed
// //     result = Math.max(result, maxSoFar);
// //   }
  
// //   return result;
// // }





// // // // // Main test cases
// console.log(maxProductSubarray([2, 3, -2, 4]));         // 6 (from subarray [2, 3])
// console.log(maxProductSubarray([-2, 0, -1]));              // 0 (from subarray [0])
// console.log(maxProductSubarray([1, 2, 3, 4]));          // 24 (from subarray [1, 2, 3, 4])
// console.log(maxProductSubarray([]));                    // 0

// console.log(maxProductSubarray([.5, .2]));          // 0.1
// console.log(maxProductSubarray([1]));          // 1 



// // // // edge cases
// console.log(maxProductSubarray([1, , 2, 3])); // 6
// console.log(maxProductSubarray([1,]));         // 1


// // // // // error cases
// console.log(maxProductSubarray()) // 'Invalid input'



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





/*
Problem: Character Counter
Write a function called characterCounter that processes strings based on character frequency. The function should return an object that categorizes the characters in the string, providing a clear picture of character distribution. For example, the object might include properties for letters, numbers, and other characters.
Rules:
1.  The function should count the occurrences of each character in the input string
2.  Characters should be organized into categories in the result object
3.  The function should return an object with the following properties:
    •   letters: An object containing letter characters as keys and their counts as values
    •   numbers: An object containing numeric characters as keys and their counts as values
    •   others: An object containing all other characters as keys and their counts as values
4.  If a category has no characters, it should still be included as an empty object

Rules
- case insensitive
- non-string inputs convet to string if possible else return `null`
- spaces count as other characters
- special numbers should be treated as normal chars
- only consider ascii chars


Examples:

characterCounter("Hello123!"); 
// { 
//   letters: { h: 1, e: 1, l: 2, o: 1 }, 
//   numbers: { '1': 1, '2': 1, '3': 1 }, 
//   others: { '!': 1 } 
// }

characterCounter("aaBBcc");
// { 
//   letters: { a: 2, b: 2, c: 2 }, 
//   numbers: {}, 
//   others: {} 
// }

characterCounter("42");
// { 
//   letters: {}, 
//   numbers: { '4': 1, '2': 1 }, 
//   others: {} 
// }

Question
Will we always be given arg? what to do if not
Will we always be given 1 arg? how should be handle extra args

will it always be a string? how to ahndle that
will it ever be empty string? what to return?
will it contain white space like tabs, returns spaces? how should be added to the object if so?
will it contain negative numbers such as '-42' how should handle this situation?
will need to detect special numbers in string such as Infinity -Infinity Nan
is for sure case insensitive



Data structure:
const counts = { 
  letters: {}, 
  numbers: {}, 
  others: {} 
}

Strings




Algorithm;
  High level:
    - Get the count of each unique character in the string
    - add count to our object
    - return the object

Lower level
- use for loop to iterate from 0 to length - 1 of string
  - Check if lowercase of char is a letter ([a-z]/i)
    - increment key
  - check if it is a digit
    - increment key
  - otherwise 
    - increment key
- return object 


helper methods
  increment Key in object, takes 1 stirng key argument, type of key,  and 1 object, 
    if key is in object
      increment key value by 1
    else
      add key with value of 1
    - either add key and 1 to object
    - or increment key by 1
  returns undefined
*/


// function characterCounter(string) {
//   const counts = { 
//     letters: {}, 
//     numbers: {}, 
//     others: {} 
//   }
  
//   if (string === '') return counts;
//   string = String(string);

//   for (let i = 0; i < string.length; i += 1) {
//     let char = string[i].toLowerCase();
//     // Letters
//     if (/[a-z]/i.test(char)) incrementKey(char, 'letters', counts);
//     // Numbers
//     else if (/[\d]/.test(char)) incrementKey(char, 'numbers', counts); 
//     // Others
//     else incrementKey(char, 'others', counts);
//   }

//   return counts;
// }


// function incrementKey(key, type, object) {
//   if (object[type][key] !== undefined) {
//     object[type][key] = object[type][key] + 1;
//   } else {
//     object[type][key] = 1;
//   }
// }

// // Happy paths
// console.log(characterCounter("Hello123!"));
// // { 
// //   letters: { h: 1, e: 1, l: 2, o: 1 }, 
// //   numbers: { '1': 1, '2': 1, '3': 1 }, 
// //   others: { '!': 1 } 
// // }

// console.log(characterCounter("aaBBcc"));
// // // { 
// // //   letters: { a: 2, b: 2, c: 2 }, 
// // //   numbers: {}, 
// // //   others: {} 
// // // }

// console.log(characterCounter("42"));
// // // { 
// // //   letters: {}, 
// // //   numbers: { '4': 1, '2': 1 }, 
// // //   others: {} 
// // // }
// console.log(characterCounter("4224"));
// // // { 
// // //   letters: {}, 
// // //   numbers: { '4': 2, '2': 2 }, 
// // //   others: {} 
// // // }

// console.log(characterCounter("4  2"));
// // // { 
// // //   letters: {}, 
// // //   numbers: { '4': 1, '2': 1 }, 
// // //   others: {' ': 2} 
// // // }


// // // Edge Cases
// console.log(characterCounter("")); 
// // // { 
// // //   letters: {}, 
// // //   numbers: {}, 
// // //   others: {} 
// // // }

// // // Non-string input
// console.log(characterCounter([1,2,3,4]));
// // // { 
// // //   letters: {}, 
// // //   numbers: {'1': 1, '2': 1, '3': 1, '4': 1}, 
// // //   others: {',': 3} 
// // // }
// console.log(characterCounter({'a': 1}));
// // // { 
// //   //   letters: {o: 2, b: 2, j: 2, e: 2, c: 2, t: 2}, 
// //   //   numbers: {}, 
// //   //   others: {'[': 1, ' ': 1, ']': 1} 
// //   // }
// console.log(characterCounter(true));
// // // { 
// //   //   letters: {t: 1, r: 1, u: 1, e: 1}, 
// //   //   numbers: {}, 
// //   //   others: {} 
// //   // }
// console.log(characterCounter(42));
// // // { 
// // //   letters: {}, 
// // //   numbers: { '4': 1, '2': 1 }, 
// // //   others: {} 
// // // }
// console.log(characterCounter(undefined));
// // // { 
// // //   letters: {u: 1, n: 2: d: 2, e: 2, f: 1, i: 1}, 
// // //   numbers: { }, 
// // //   others: {} 
// // // }


// // // Case insensitive
// console.log(characterCounter("aaBBccAAbb"));
// // // { 
// // //   letters: { a: 4, b: 4, c: 2 }, 
// // //   numbers: {}, 
// // //   others: {} 
// // // }


// // Error Cases


/*
Problem Description
Write a function called transformArray that takes an array as an argument and applies the following transformations:
1.  If an element is a string, reverse it.
2.  If an element is a number, square it.
3.  Return a new array with the transformed elements.

Rules
- non number or string data tyeps should just be included in the output
- reutrn string 'Invalid input' if arg input not array or missing

Questions:
Will we always have 1 input? 
  what to return if missing? 
  what to do if more than 1

will input always be an array? if not how should handle it?

will input be sparse array?
will array contain any nubmer of elemetns?
will array contain only strings, or numbers?
  will array contain sub arrays or other objects
  will array contain special livke undefined, null, booleasn?
will array numbers ever be NaN or Infinity or -Infinity?

what should return for empty string input in array?
will strings contain white space?
will it contain negative numbers 
should negative numbers when squared return negative value?

is the order of elements such as strings and numbers in the original array, should be they be the same in output array?

Examples / Test Cases
transformArray(['hello', 'world']);  // ['olleh', 'dlrow']
transformArray([2, 4, 6]);  // [4, 16, 36]
transformArray(['abc', 5, 'def']);  // ['cba', 25, 'fed']
transformArray([]);  // []


Data structures:
input Array
output array

strings in the array
numbers in the array


Algorithm:
- if arg missing or not array return error message
- if arg is empyt array return empty array
- loop over each element in the array
  - if it is a string, revrse it and add to output array
    - intialize an empty string
    - loop from last index of string to first
      - concat element to the string
    - add this string to the output array
  - if it is a number, square it and add ot ouptut array
  - else add the element to the output array



*/


// function transformArray(arr) {
//   if (!Array.isArray(arr)) return 'Invalid Input';
//   if (arr.length === 0) return [];

//   return arr.map(item => {
//     if (typeof item === 'string') {
//       // let reversed = '';
//       // for(let i = item.length - 1; i >= 0; i -= 1) {
//       //   reversed += item[i];
//       // }
//       // return reversed;
//       return [...item].reverse().join('');
//     } else if (typeof item === 'number') {
//       return item * item;
//     } else {
//       return item;
//     }
//   });
// }





// // Happy paths
// console.log(transformArray(['hello', 'world']));  // ['olleh', 'dlrow']
// console.log(transformArray([2, 4, 6]));  // [4, 16, 36]
// console.log(transformArray(['abc', 5, 'def']));  // ['cba', 25, 'fed']
// console.log(transformArray([]));  // []

// // Edge cases
// // mixed data types
// console.log(transformArray(['hello', true, 'world']));  // ['olleh', true, 'dlrow']
// console.log(transformArray(['hello', [1, 2, 3], 'world']));  // ['olleh', [1, 2, 3], 'dlrow']

// // empyt strings in array
// console.log(transformArray(['']));  // ['']

// // Other numbers
// console.log(transformArray([-2, -4, -6]));  // [4, 16, 36]
// console.log(transformArray([Infinity, 'hello']));  // [Infinity, 'olleh']
// console.log(transformArray([-Infinity, 'hello']));  // [Infinity, 'olleh']
// console.log(transformArray([NaN, 'hello']));  // [NaN, 'olleh']

// // sparse array
// console.log(transformArray(['hello', ,'world']));  // ['olleh', <1 missing element>, 'dlrow']

// // Error cases
// console.log(transformArray(32));  // 'Invalid Input'
// console.log(transformArray());  // 'Invalid Input'




/*
Interview Question: String Scrambler
Difficulty: Intermediate

Problem Description
Write a function named scramble that takes a string as an argument and returns a new string where each character is replaced according to the following rules:
1.  Vowels ('a', 'e', 'i', 'o', 'u') should be replaced with the next vowel in the sequence (cycling back to 'a' after 'u').
2.  Consonants should be replaced with the next consonant in the alphabet (cycling from 'z' back to 'b').
3.  Digits should be replaced with the next digit (cycling from '9' back to '0').
4.  Other characters should remain unchanged.
Explicit Rules
•   Replace vowels with the next vowel in the sequence (a→e, e→i, i→o, o→u, u→a)
•   Replace consonants with the next consonant (b→c, c→d, ..., z→b)
•   Replace digits with the next digit (0→1, 1→2, ..., 9→0)
•   Non-alphanumeric characters remain unchanged
•   Return a new string (don't modify the original)

- Maintain original case
- z loops to b
- if arg is empty string return empty string


Questions
- will we always be givne 1 arg 
  - if more than or no how to handle
- what to return if empty string
- will arg always be string ? how to handle if not
- will string contain whitespace? if so how to handle?
- will string ocntain numbers such as NaN INfinity - INfinity, or should we treat them as strings
- is it case senitive a -> e A -> E
- what about non-english letters?

Examples / Test Cases
scramble('hello');          // 'jimmu'
scramble('coding');         // 'dufoph'
scramble('ABCDEF');         // 'ECDGFG'
scramble('a1b2c3');         // 'e2c3d4'
scramble('ab-cd');          // 'ec-dd'

a e i o u
b c d f g h j k l m n p q r s t v w x y z

hello
jimmu
coding
dufoph

ABCDEF
ecdfig

Data Structure:
array or possbibly just string of vowels 
array or possibly just string of consonants
array of string of number 0-9

input string
new string to output


Algorithm:
Convert every character to its proper next element in its series range, respective of loop in range
if consonant get next constant
if vowel get next vowel 
if digit get next digit


lower level
Global varaibles
inititalze constants for vowels
inititalze constants for consonants
inititalze constants for digits

- inititalze an scrambled string to empty string
- loop over the string with for loop 
  - if vowel
    - findNextIdx
    - get char from the idx 
    - if original vowel is uppercase
      - set char to upperse
    - concat char to scrambled string
  - if consonant 
    - findNextIdx
    - if original consonant is uppercase
      - set char to uppercase
     - concat to scrambled string
  - if digit findNextIdx
    - findNextChar 
     - concat to scrambled string

  - else add char to outup
return scrambled string


helper function
findNextIdx(char, set) return number for index
  - get the index of the char in the set of chars
  - increment the index by 1
  - take this value modulous of legnth of set
  - set this remainder as the new char index
  - return this index
*/

// const VOWELS = 'aeiou';
// const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
// const DIGITS = '0123456789';

// function scramble(string) {
//   let scrambled = '';

//   let vowelRegex = new RegExp(`[${VOWELS}]`, 'i');
//   let consRegex = new RegExp(`[${CONSONANTS}]`, 'i');
//   let digitRegex = new RegExp(`[${DIGITS}]`);

//   for (let i = 0; i < string.length; i += 1) {
//     let char = string[i];
//     // vowel
//     if (vowelRegex.test(char)) {
//       let idx = findNextIdx(char, VOWELS);
//       let nextVowel = VOWELS[idx];
//       scrambled += processLetterCase(char, nextVowel);
//     // consonant
//     } else if (consRegex.test(char)) {
//       let idx = findNextIdx(char, CONSONANTS);
//       let nextConsonant = CONSONANTS[idx];
//       scrambled += processLetterCase(char, nextConsonant);;
//     // digit
//     } else if (digitRegex.test(char)) {
//       let idx = findNextIdx(char, DIGITS);
//       let number = DIGITS[idx];
//       scrambled += number;
//     } else {
//       scrambled += char;
//     }
//   }

//   return scrambled;
// }

// function processLetterCase(char, nextChar) {
//   if (/[A-Z]/.test(char)) {
//     nextChar = nextChar.toUpperCase();
//   }
//   return nextChar;
// }

// function findNextIdx(char, charSet) {
//   let idx = charSet.indexOf(char.toLowerCase()) + 1;
//   idx = idx % charSet.length;
//   return idx;
// }

// // General
// console.log(scramble('hello'));          // 'jimmu'
// console.log(scramble('coding'));         // 'dufoph'
// console.log(scramble('ABCDEF'));         // 'ECDFIG'
// console.log(scramble('a1b2c3'));         // 'e2c3d4'
// console.log(scramble('ab-cd'));          // 'ec-df'

// // Edge Cases

// // // Maintain case
// console.log(scramble('HELLO'));          // 'JIMMU'

// // // space and non-alphanumeric
// console.log(scramble('ab cd'));          // 'ec df'
// console.log(scramble('ab.cd'));          // 'ec.df'

// // // empty string
// console.log(scramble(''));          // ''

// // looping u, z and 9
// console.log(scramble('zbu9'));          // 'bca0'
// console.log(scramble('ZBU9'));          // 'BCA0'

// function mergeSorted(array1, array2) {
//   // Create copies to avoid mutating the original arrays
//   const copy1 = array1.slice();
//   const copy2 = array2.slice();
//   const result = [];

//   // Continue until one of the arrays is empty
//   while (copy1.length > 0 && copy2.length > 0) {
//     // Compare the first elements of both arrays
//     // Take the smaller one and add it to the result
//     if (copy1[0] <= copy2[0]) {
//       result.push(copy1.shift());
//     } else {
//       result.push(copy2.shift());
//     }
//   }

//   // Add any remaining elements from either array
//   return result.concat(copy1.length === 0 ? copy2 : copy1);
// }

// console.log(mergeSorted([1, 3, 5], [2, 4, 6]));       // [1, 2, 3, 4, 5, 6]
// console.log(mergeSorted([1, 5, 9], [2, 6, 8]));       // [1, 2, 5, 6, 8, 9]
// console.log(mergeSorted([1, 1, 3], [2, 2, 4]));       // [1, 1, 2, 2, 3, 4]
// console.log(mergeSorted([], [2, 5, 8]));              // [2, 5, 8]
// console.log(mergeSorted([1, 4, 7], []));              // [1, 4, 7]


// function wordsInCommon(str1, str2) {
//   if (typeof str1 !== 'string' || typeof str2 !== 'string') return 'Invalid input';
//   if (str1 === '' || str2 === '') return [];

//   const words1 = (str1.match(/\b[a-z]+/gi) || []).map(word => word.toLocaleLowerCase());
//   const words2 = (str2.match(/\b[a-z]+/gi) || []).map(word => word.toLocaleLowerCase());

//   let commonWords = words1.reduce((words, word) => {
//     if (words2.includes(word) && !words.includes(word)) {
//       words.push(word)
//     }
//     return words;
//   }, []);

//   return commonWords.sort()
// }


// console.log(wordsInCommon('Hello world', 'hello there')); // ['hello']
// console.log(wordsInCommon('ok Hello world ', 'ok hello there ')); // ['hello']
// console.log(wordsInCommon('JavaScript is fun', 'Programming in JavaScript is fun')); // ['fun', 'is', 'javascript']
// console.log(wordsInCommon('First string', 'Second string')); // ['string']
// console.log(wordsInCommon('one two three', 'four five six')); // []

// // repeated words
// console.log(wordsInCommon('one two three one two three', 'one two three one two three')); // [one three two]

// // punctuation
// console.log(wordsInCommon('Quick! go to town.', 'quick? back from town.')); // ['quick', 'town']
// console.log(wordsInCommon('thirty-five cars', 'thirty-five trucks')); // ['five', 'thirty']

// // Edge Cases
// console.log(wordsInCommon('', 'hello')); // []
// console.log(wordsInCommon('hello', '')); // []

// // error case
// console.log(wordsInCommon(23, true)); // 'Invalid input'
// console.log(wordsInCommon(['hello'], undefined)); // 'Invalid input'
// console.log(wordsInCommon('ok wow', undefined)); // 'Invalid input'
// console.log(wordsInCommon(['hello'], undefined)); // 'Invalid input'

// // Special characters between letters
// // ['hello']
// console.log(wordsInCommon('h@e#l%l^o', 'he-llo'));


/*

Intermediate Level Interview Question for LS216

Problem Description
Write a function called groupAnagrams that takes an array of strings and returns an array of arrays, where each inner array contains a group of anagrams. An anagram is a word formed by rearranging the letters of another word.

Explicit Rules:
•   Words in the same group must be anagrams of each other
•   Each string in the input array should appear exactly once in the output
•   The order of the anagram groups in the output array doesn't matter
•   The order of strings within each anagram group doesn't matter

Questions
- will always be 1 arg? 
  - will we always be given an at least one argument or more?
  - what to return if not 
- will arg alays be an array?
- will it be a sparse array?
- will it ever an empty array?
- will the array contain object properties
- will the array only contain string elements? what to do if not?
- will strings ever contain empty string? what to do if so?
- are strings and spellings case sensitive?
- how should we handle words separated by dashses? split into to words or treat whole string as a word?
- will strings only contain letters? 
- will the same words appear more than once in the input array?
  - if same word appears twice should it be included only once in the output array?

Problem:
input: array of strings
output: array of arrays of strings (anagrams)

Rules
- Words in the same group must be anagrams of each other
- Each string in the input array should appear exactly once in the output
- treats as case-insensitive but output in anagram array should presever org case
- 



Examples / Test Cases:

groupAnagrams(["listen", "silent", "enlist", "hello", "world"]);
// [["listen", "silent", "enlist"], ["hello"], ["world"]]

groupAnagrams(["act", "cat", "tac", "dog", "god"]);
// [["act", "cat", "tac"], ["dog", "god"]]

groupAnagrams(["abc", "cab", "def", "fed", "bca", "aaa"]);
// [["abc", "cab", "bca"], ["def", "fed"], ["aaa"]]

Data structure
- start array of strings

- array of arrays of characters
  - array of characters for each string

- output array of arrays of strings


Algorithm:
1. guards
  - if not array return null
  - if empty array return []
2. intialze an empty anagrams array
3. add the first word of input array as sub array in empyt arnagrams
4. iterate over the rest of the words
  - iterate over each collection anagram, checking if the first word 
    eqauls the current word
      - sort first word alphabetically, and sort second alphabetically
    - add to the current word to the current anagram collection if so
  - if word is not in any anagram collection add it as its own anagram collection subarray



3. create copy of the input array of strings with each string sotrted alphabetically
- loop over eadch of these words









    - iterate over the rest of the words 
      - sort the next word alphaetically
      - if current and next word equal

    5. iterate over the words with the index
  - sort the word alphabetically
  - iterate over the rest of the words 
    - sort the next word alphaetically
    - if current and next word equal
  - 
*/

// function groupAnagrams(words) {
//   if (!Array.isArray(words)) return null;
//   if (words.length === 0) return [];

//   const anagrams = [[words.shift()]];

//   words.forEach(word => {
//     let noMatch = true;
//     anagrams.some(collection => {
//       if (alphabetize(word.toLowerCase()) === alphabetize(collection[0].toLowerCase())) {
//         collection.push(word);
//         noMatch = false;
//         return true;
//       }
//     });
//     if (noMatch) {
//       anagrams.push([word]);
//     }
//   });

//   return anagrams;
// }

// function alphabetize(string) {
//   return [...string].sort().join('')
// }



// // Much better LSbot solution 
// function groupAnagrams(strings) {
//   // Handle non-array input
//   if (!Array.isArray(strings)) {
//     return null;
//   }
  
//   // Handle empty array
//   if (strings.length === 0) {
//     return [];
//   }
  
//   const anagramGroups = {};
  
//   // Group strings by normalized form (sorted lowercase letters)
//   strings.forEach(string => {
//     const normalized = string.toLowerCase().split('').sort().join('');
    
//     if (!anagramGroups[normalized]) {
//       anagramGroups[normalized] = [];
//     }
    
//     anagramGroups[normalized].push(string);
//   });
  
//   // Convert object to array of arrays
//   return Object.values(anagramGroups);
// }

// // General
// console.log(groupAnagrams(["listen", "silent", "enlist", "hello", "world"]));
// // [["listen", "silent", "enlist"], ["hello"], ["world"]]

// console.log(groupAnagrams(["act", "cat", "tac", "dog", "god"]));
// // [["act", "cat", "tac"], ["dog", "god"]]

// console.log(groupAnagrams(["abc", "cab", "def", "fed", "bca", "aaa"]));
// // [["abc", "cab", "bca"], ["def", "fed"], ["aaa"]]

// // Edge Cases
// console.log(groupAnagrams(['abc', 'CBA', 'cat'])); // [['abc', 'CBA'], ['cat']]
// console.log(groupAnagrams([])); // []
// console.log(groupAnagrams('words')); // null

// // duplicates
// console.log(groupAnagrams(['abc', 'CBA', 'abc', 'cat'])); // [['abc', 'CBA', 'abc'], ['cat']]

// // spaces and punctuation
// console.log(groupAnagrams(['abc efg', 'abcefg'])); // [['abc efg'], ['abcefg']]
// console.log(groupAnagrams(['abc-efg', 'abcefg'])); // [['abc-efg'], ['abcefg']]
// console.log(groupAnagrams(['abcefg.', 'abcefg'])); // [['abcefg.'], ['abcefg']]
// console.log(groupAnagrams(['?#abc-efg', 'abcefg'])); // [['?#abc efg'], ['abcefg']]


/*
Practice Question for LS216 Assessment
Problem: Repeating Character Count
Problem Description

Write a function called repeatingCharCount that takes a string as an argument and returns an object. Each key in the returned object should be a character that appears consecutively (repeats) in the string, and each value should be the maximum number of consecutive occurrences of that character.

questions
will always be given arg? what to if not?
will it always be a string?
is string case sensitive
  - does of the keys in the count object matter?
will we be given non-letter char? how should these handled? such as white space, digits, puncutaion etc

Rules
- case sensitive: a and A different chars
- reutnr invalid input for non-string input
- 


input: string
output object, properties strings with number values

Examples / Test Cases
repeatingCharCount('aabbb');              // { a: 2, b: 3 }
repeatingCharCount('abcde');              // {}
repeatingCharCount('aaaabbbccd');         // { a: 4, b: 3, c: 2, d: 1 }
repeatingCharCount('abbcccdddd');         // { a: 1, b: 2, c: 3, d: 4 }
repeatingCharCount('');                   // {}

Data structures:
string
possibly an array?

object 

Algorithm:
guard clause
  if not string return 'Invalid input'
  if empty string return empty object

find the amount of rpeating chars 
add those count to the object

initialze a char coutn object
initialize a variable for the  current repeatign char to first char in string
initialze repating char count to 1
iterate over the string starting at second char
  if current char is the current repeatingCharCount
    increment repeatingCharCount by 1
  else 
    use repeatingChar as teh key
    add key to the char coutn object witht the value of teh current count
    set repeatingChar to the current char
    set count to 1

if the current char coutn > 1 
  add key add key to the char coutn object witht the value of teh current count
return the repeatign char count object


*/

// function repeatingCharCount(string) {
//   if (typeof string !== 'string') return 'Invalid input';
//   if (string === '') return {};

//   const charCounts = {};
//   let currRepeatingChar = string[0];
//   let count = 1;

//   for (let i = 1; i < string.length; i += 1) {
//     let char = string[i];
//     if (char === currRepeatingChar) {
//       count += 1;
//     } else {
//       if (count > 1) {
//         charCounts[currRepeatingChar] = count;
//       }
//       currRepeatingChar = char;
//       count = 1;
//     }
//   }

//   if (count > 1) {
//     charCounts[currRepeatingChar] = count;
//   }

//   return charCounts;
// }

// console.log(repeatingCharCount('aabbb'));              // { a: 2, b: 3 }
// console.log(repeatingCharCount('abcde'));              // {}
// console.log(repeatingCharCount('aaaabbbccd'));         // { a: 4, b: 3, c: 2 }
// console.log(repeatingCharCount('abbcccdddd'));         // { b: 2, c: 3, d: 4 }
// console.log(repeatingCharCount(''));                   // {}

// // Edge Cases
// console.log(repeatingCharCount('...abc'));                   // {'.': 3}
// console.log(repeatingCharCount('   abc'));                   // {' ': 3}
// console.log(repeatingCharCount('11abc'));                   // {'1': 2}
// console.log(repeatingCharCount('AAAAaaaa'));                   // {'A': 4, 'a': 4}

// console.log(repeatingCharCount(32));                   // 'Invalid input'
// console.log(repeatingCharCount(['hello']));            // 'Invalid input'


/* 
Write a function called compress that compresses a string by replacing consecutive repeated characters with a single instance of the character followed by the count of repetitions.

Explicit Rules:
•   If a character appears once, it should appear in the output without a number
•   If a character appears multiple times consecutively, it should be followed by the count of repetitions
•   The function should return a new string

questions


Examples:
compress('aabccc');          // 'a2bc3'
compress('ab');              // 'ab'
compress('aaabbbccc');       // 'a3b3c3'
compress('aaaaaaaaaa');      // 'a10'

data structure
input: string
output: string

algorithm:
add guard clauses
initialze a result string to empty string
initialze variable called lastChar set to the first char in the string
initialze count of chars to 1

iterate over each char in the string starting second char
  if the loop char is equal to lastChar seen
    increment count by 1
  else 
    if the count > 1
      concatenate lastChar and count  and add this to the result string
    else 
      concatenate the lastChar to the reslt string
    reassign lastChar to current char
    reassign count to 1

return result string
*/

// function compress(string) {
//   if (typeof string !== 'string') return 'Invalid input';
//   if (string === '') return '';

//   let result = '';
//   let lastChar = string[0];
//   let count = 1;

//   for (let i = 1; i <= string.length; i += 1) {
//     let char = string[i];
//     if (i === string.length || char !== lastChar) {
//       result = count > 1 ? result.concat(lastChar + String(count)) : result.concat(lastChar);
//       lastChar = char;
//       count = 1;
//     } else {
//       count += 1;
//     }  
//   }

//   return result;
// }

// console.log(compress('aabccc'));          // 'a2bc3'
// console.log(compress('ab'));              // 'ab'
// console.log(compress('aaabbbccc'));       // 'a3b3c3'
// console.log(compress('aaaaaaaaaa'));      // 'a10'

// // // edge cases
// console.log(compress(''));      // ''
// console.log(compress('AAAaaa'));      // 'A3a3'
// console.log(compress('...111'));      // '.313'
// console.log(compress('  a'));         // '  2a'
// console.log(compress('z\n\nb'));         // 'z\n2b'

// // // error cases
// console.log(compress(true));         // 'Invalid input'
// console.log(compress(323));         // 'Invalid input'


/*

Intermediate-to-Hard Interview Problem: String Pattern Matcher

Problem Description
Write a function called patternMatcher that takes two strings as arguments: a pattern string and a source string. The function should determine if the source string follows the pattern defined by the pattern string.

In the pattern string:
•   Each unique character represents a "token" that matches a word in the source string
•   The same character appearing multiple times must match the same word each time
•   Different characters must match different words
•   A "word" is defined as a sequence of characters separated by spaces
The function should return true if the source string follows the pattern, and false otherwise.

Questions:
does the patter determine the number of words it  in the string
  - 'aaa' => 'red red red' 'aaa' => 'red'
- will we ever be given no args - hwo handle t
- will we always be given 2 args?
- will the first arg always be a string?
- will the second arg always be a string
- will either ever be empty string? what to return if patter is empty string 
- what to return if one or the other is an emtpy string?
  - 'a' '' return what
  - '' 'red' return what?
- can the first or second string contain non-alphabetic chars, like digits, puncutation whitespace
  - will puncutation ever be used in the words 
  - 'red green red.' is red and red the same here 
- treat both case sensitive?


Rules
- if either is empty string, return false
- pattern is case sensitive 'aA' represents differnt tokens
- if number of tokens in pattern !== number of words in source, return false
- patter can contain non-alphabetic chars
- ignore extra spaces in source string,
  - ignore start and ending spaces   
- return false if given non-string inputs 

 
Examples / Test Cases

patternMatcher('a', 'red');                                  // true
patternMatcher('a', 'blue green red');                       // false
patternMatcher('aba', 'red green red');                      // true
patternMatcher('aabb', 'red red blue blue');                 // true
patternMatcher('abba', 'red blue blue red');                 // true
patternMatcher('abab', 'red blue red blue');                 // true
patternMatcher('abba', 'red blue green red');                // false
patternMatcher('abcd', 'red blue green yellow');             // true
patternMatcher('abcd', 'red blue red yellow');               // false


Data structure:
pattern string
array of words

object, which pattern and word associated shoudl be 

Algorithm
Guard clause
- if eithe rempty string return false
- if ither is not as string return false

get all the words from source string
  - probably reges this becaseu of spcases

if the count of chars in patter !== number of words return false

initailze patter object
iterate over teh words with an index ( for loop )
  find the char of the token string at iteration
  find the word at the iteration
  if this word not in the patter object
    add it and set the value to the current pattern char
  if it is in the tokens object
    check if the current patter char equals the value in it
    return false  if not

return true;
    */

// function patternMatcher(pattern, wordsString) {
//   if (pattern === '' || wordsString === '') return false;
//   if (typeof pattern !== 'string' || typeof wordsString !== 'string') return false;
  
//   const words = (wordsString.match(/\b[\w]+\b/gi) || []);

//   if (words.length !== pattern.length) return false;
  
//   const wordToToken = {};
//   const tokenToWord = {};
//   for (let index = 0; index < words.length; index += 1) {
//     let word = words[index];
//     let token = pattern[index];

//     if (word in wordToToken || token in tokenToWord ) {
//       if (wordToToken[word] === token && tokenToWord[token] === word) {
//         continue;
//       } else {
//         return false;
//       }
//     } else {
//       wordToToken[word] = token;
//       tokenToWord[token] = word;
//     }
//   }

//   return true;
// }


// // console.log(patternMatcher('a', 'red'));                                  // true
// // console.log(patternMatcher('a', 'blue green red'));                       // false
// // console.log(patternMatcher('aba', 'red green red'));                      // true
// // console.log(patternMatcher('abc', 'red green red'));                      // false
// // console.log(patternMatcher('aabb', 'red red blue blue'));                 // true
// // console.log(patternMatcher('abba', 'red blue blue red'));                 // true
// // console.log(patternMatcher('abab', 'red blue red blue'));                 // true
// // console.log(patternMatcher('abba', 'red blue green red'));                // false
// // console.log(patternMatcher('abcd', 'red blue green yellow'));             // true
// // console.log(patternMatcher('abcd', 'red blue red yellow'));               // false

// // // edge cases
// // console.log(patternMatcher('aAAa', 'red blue blue red'));               // true
// // console.log(patternMatcher('#aa#', 'red blue blue red'));               // true
// // console.log(patternMatcher(' a ', 'blue red blue'));              // true
// // console.log(patternMatcher('bab', '  red   blue   red  '));           // true


// // // error cases
// console.log(patternMatcher('', 'red'));    // false
// console.log(patternMatcher('a', ''));    // false
// console.log(patternMatcher('', ''));    // false
// console.log(patternMatcher(22, 'red'));    // false
// console.log(patternMatcher('a', 33));    // false
// console.log(patternMatcher(true, 33));    // false
// // wrong number
// console.log(patternMatcher('aaa', 'hello'));    // false
// console.log(patternMatcher('a', 'hello hello'));    // false


/*
Interview Practice Problem: Word Transformation

Problem Description
Write a function called transformWords that takes a string of words and transforms each word according to the following rules:
1.  If a word starts with a vowel, append "way" to the end of the word.
2.  If a word starts with a consonant, move all consonants that appear before the first vowel to the end of the word and append "ay" to the end.
3.  Return the transformed string with the same spacing and punctuation as the original.


Examples / Test Cases
transformWords("apple"); // "appleway"
transformWords("banana"); // "ananabay"
transformWords("cherry"); // "errychay"
transformWords("eat an orange"); // "eatway anway orangeway"
transformWords("under the bridge"); // "underway ethay idgebray"
transformWords("Hello, World!"); // "elloHay, orldWay!"

Basic Rules (Explicit)
•   Words starting with vowels (a, e, i, o, u) get "way" appended
•   Words starting with consonants have initial consonants moved to the end followed by "ay"
•   Preserve the original spacing and punctuation, --- and capitalization
•   Input will be a string of words

no Input
input not string
input empty string
input with no letters or such as digits or punctuation
will words start with white space
all lettes in word are consonants
how treat words with hyphens

Data structure
array of words
original string
new string of replaces letters


Algorithm
split the string on white space
transform the array of each word
  if it is not white space
    transform word
  else 
    return the white space

joing back together and return the string

transform word
  take a string word
  get base word to transform by filter out and start or ending punctuation
  
  check if word starts with a vowel
    create a new string by appending the string 'way' to the baseword
    replace the baseword with this new string
    return this altered string
  else if starts with a consonant  
    check if first letter is capitalizated
      set boolean if it or not
    intialize a substring for the consonants
    get the n consonants and other chars before a vowel in the string
      iterate over string checking if it is not a vowel 
        append lowercase of char to the substrign of conononts if not
      else break out of loop
    create new string by append the consonants to the end of the basewod with the string 'ay'
    reasign string by capitalizing the first char if it was orignoalaly
    return the replacemen of the baseword with this string
  else
    return the word as is 
    


*/

// function transformWords(words) {
//   if (words === '') return '';
//   if (typeof words !== 'string') return 'Invalid input';

//   const wordsArr = words.split(' ');

//   return wordsArr.map(word => {
//     if (word === '') {
//       return word;
//     } else {
//       return transformWord(word);
//     }
//   }).join(' ');
// }

// function transformWord(word) {
//   let baseWord = (word.match(//gi) || '');
//   console.log(baseWord)
//   baseWord = baseWord ? baseWord[0] : baseWord;
//   let altered = '';
//   // vowel
//   if ((/[aeiou]/i).test(baseWord[0])) {
//     altered += (baseWord + 'way');
//     return word.replace(baseWord, altered);
//   // consonant
//   } else if ((/[a-z]/i).test(baseWord[0]) && (/[^aeiou]/i).test(baseWord[0])) {
//     let capitalizated = baseWord[0] === baseWord[0].toUpperCase();
    
//     let consonants = '';
//     let firstVowel = baseWord.length;
//     for (let i = 0; i < baseWord.length; i += 1) {
//       let char = baseWord[i];
//       if ((/[^aeiou]/i).test(char)) {
//         consonants += char.toLowerCase();
//       } else {
//         firstVowel = i;
//         break;
//       }
//     }
//     altered = (baseWord.slice(firstVowel) + consonants +  'ay');
//     altered = capitalizated ? altered[0].toUpperCase() + altered.slice(1) : altered;
    
//     return word.replace(baseWord, altered);
//   // other, digits etc.
//   } else {
//     return word;
//   }
// }


// LSBots solution
// function transformWords(input) {
//   // Handle edge cases
//   if (input === '') return '';
//   if (typeof input !== 'string') return 'Invalid input';
  
//   // Split the input into words while preserving punctuation and spacing
//   return input.replace(/\b[a-z0-9'_-]+\b/gi, transformWord);
// }

// function transformWord(word) {
//   // Don't transform numbers
//   if (/^\d+$/.test(word)) return word;
  
//   const isFirstLetterUppercase = /^[A-Z]/.test(word);
//   const lowerWord = word.toLowerCase();
//   let result;
  
//   // Check if word starts with a vowel
//   if (/^[aeiou]/i.test(lowerWord)) {
//     result = lowerWord + 'way';
//   } else {
//     // Find the position of the first vowel
//     const firstVowelIndex = lowerWord.search(/[aeiou]/);
    
//     if (firstVowelIndex === -1) {
//       // No vowels in the word
//       result = lowerWord + 'ay';
//     } else {
//       // Move consonants to the end
//       result = lowerWord.slice(firstVowelIndex) + lowerWord.slice(0, firstVowelIndex) + 'ay';
//     }
//   }
  
//   // Restore capitalization pattern
//   if (isFirstLetterUppercase) {
//     result = result.charAt(0).toUpperCase() + result.slice(1);
//   }
  
//   return result;
// }

// console.log(transformWords("apple")); // "appleway"
// console.log(transformWords("banana")); // "ananabay"
// console.log(transformWords("cherry")); // "errychay"
// console.log(transformWords("eat an orange")); // "eatway anway orangeway"
// console.log(transformWords("eat a orange")); // "eatway away orangeway"
// console.log(transformWords("under the bridge")); // "underway ethay idgebray"
// console.log(transformWords("Hello, World!")); // "Ellohay, Orldway!"

// console.log(transformWords("built-tough trucks")); // "uilt-toughbay uckstray"
// console.log(transformWords("we're")); // "e'reway"
// console.log(transformWords("2025 cow")); // "2025 owcay"
// console.log(transformWords("joy&peace")); // "oy&peacejay"
// console.log(transformWords("eat   an   orange")); // "eatway   anway   orangeway"


// // // Edge Cases
// console.log(transformWords("dddddd")); // "dddddday"
// console.log(transformWords("")); // ""
// console.log(transformWords(33)); // "Invalid input"




/*
Interview Problem: Character Replacer
Problem Description

Write a function called replaceCharacters that takes two arguments: a string and an object. The function should replace characters in the string with new characters based on the keys and values in the object.
For example, if the object is { 'a': 'b', 'c': 'd' }, then every occurrence of 'a' in the string should be replaced with 'b', and every occurrence of 'c' should be replaced with 'd'.

Explicit Rules
•   Replace characters in the input string based on the key-value pairs in the object
•   Return the new string after all replacements have been made
•   The original string should not be mutated
•   If a character in the string matches a key in the object, replace it with the corresponding value

question
2 args, what if if only one or other
will first always be string
will sec alwasy be object?
what first is empty string
does case matter
will object key values alwasy be strings?
should we preseve case of original string
will object keys always be 1 single char keys? 


Test Cases
replaceCharacters('hello world', { 'l': 'z', 'o': 'x' });
// "hezzx wxrzd"

replaceCharacters('programming', { 'r': 'x', 'g': 'y', 'm': 'z' });
// "pxoyxazzing"

replaceCharacters('abcabc', { 'a': '1', 'b': '2' });
// "12c12c"

replaceCharacters('test string', {});
// "test string"

Data structure
string, object
new string


Algorithm
if ar1 is not a string and arg2 is not an object return "invalid input"
if arg1 is empty we return empty string
if ar2 is empty we return arg1 string

ininiale a new string 
iterate each char in the input string
  if that char is a key in the object
    concat replaced char key value to output string
  else 
    concat current ot to output string

return the outpout string


replace function match each char in the string
callback function will replace the char with correct char
*/

// function replaceCharacters(string, object) {
//   if (typeof string !== 'string' && typeof object !== 'object') return 'Invalid input';
//   if (string === '') return '';
//   if (object === undefined || object.length === 0) return string;

//   let result = ''
//   for (let i = 0; i < string.length; i += 1) {
//     let char = string[i];
    
//     if (char in object) {
//       result += String(object[char]);
//     } else {
//       result += char;
//     }
//   }

//   return result;
//   // return string.replace(/[.]/g, replaceChar);
// }

function replaceCharacters(string, object) {
  if (typeof string !== 'string' && typeof object !== 'object') return 'Invalid input';
  if (string === '') return '';
  if (object === undefined || object.length === 0) return string;

  const replaceChar = (char) => {
    if (char in object) {
      return String(object[char]);
    } else {
      return char;
    }
  }

  return string.replace(/./g, replaceChar);
}

// function replaceChar(char, object) {
//   if (char in object) {
//     return String(object[char]);
//   } else {
//     return char;
//   }
// }


console.log(replaceCharacters('hello world', { 'l': 'z', 'o': 'x' }));
// // "hezzx wxrzd"

// console.log(replaceCharacters('programming', { 'r': 'x', 'g': 'y', 'm': 'z' }));
// // "pxoyxazzing"

// console.log(replaceCharacters('abcabc', { 'a': '1', 'b': '2' }));
// // "12c12c"

// console.log(replaceCharacters('test string', {}));
// // "test string"

// console.log(replaceCharacters('HeLLo world', { 'l': 'z', 'o': 'x' }));
// // "HeLLo wxrzd"

// console.log(replaceCharacters('', { 'l': 'z', 'o': 'x' })); // ""

// console.log(replaceCharacters('hello world', { 'l': '', 'o': 'x' }));
// // "hex wxrd"

// console.log(replaceCharacters('hello world', { 'l': 2, 'o': 7 }));
// // "he227 w7r2d"

// console.log(replaceCharacters('hello world', { ' ': 'z'}));
// // "hellozworld"

// // Edge Cases
// console.log(replaceCharacters()); // "Invalid input"
// console.log(replaceCharacters({})); // "Invalid input"
// console.log(replaceCharacters('')); // "Invalid input"
// console.log(replaceCharacters('hello')); // "hello"
// console.log(replaceCharacters({'a': 'b'})); // "Invalid input"
// console.log(replaceCharacters(123, true)); // "Invalid input"





/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.


Problem
input: array
output: new array

data structure
array
return array

Algorithm:
  copy the array by slicing elemnts from 1 to end
  push the first element of the original array to the slice array
  return this array


*/

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return [];

//   return arr.slice(1).concat(arr[0]);
// }


// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]




/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

question
will always be given argument
willl it always be number
will first it ever be negative
will second ever be negative
will we get Nan infiniyt - infiniyt

if the second number is greaetr than the nubmer of idigts in first argy? what to do?

PRoblem:
input: number, number
output: number


Data structure
convert the number to a string
individual digits
array of chars

convert back a integer

Algorithm:
Convert number to string
split string into an array of digits

find which digit needs to get swapped 
delete it from the copied array
add this element onto the end again


*/

function rotateRightmostDigits(number, rotatation) {
  const digits = [...String(number)];

  let rotIndex = digits.length - rotatation;
  let val = digits[rotIndex];
  digits.splice(rotIndex, 1);
  digits.push(val);

  return Number(digits.join(''));
}




// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917


/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.


Examples:
8703529146 0 10
7 352914680
73 29146805
732 1468059
7321 680594
73216 05948
732160 9485
7321609 854
73216098 45


Data Structure:
use string of number
return a number



Algorithm:
iterate from length of input string down to and including 2
  reassign number to result of perform maxrightroation passing current number and current index and 
return the number


*/

function maxRotation(number) {
  let numDigits = String(number).length;
  for (let index = numDigits; index >= 2; index -= 1) {
    number = rotateRightmostDigits(number, index);
  } 

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845