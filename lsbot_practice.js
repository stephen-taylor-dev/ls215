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

function mergeSorted(array1, array2) {
  // Create copies to avoid mutating the original arrays
  const copy1 = array1.slice();
  const copy2 = array2.slice();
  const result = [];

  // Continue until one of the arrays is empty
  while (copy1.length > 0 && copy2.length > 0) {
    // Compare the first elements of both arrays
    // Take the smaller one and add it to the result
    if (copy1[0] <= copy2[0]) {
      result.push(copy1.shift());
    } else {
      result.push(copy2.shift());
    }
  }

  // Add any remaining elements from either array
  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));       // [1, 2, 3, 4, 5, 6]
console.log(mergeSorted([1, 5, 9], [2, 6, 8]));       // [1, 2, 5, 6, 8, 9]
console.log(mergeSorted([1, 1, 3], [2, 2, 4]));       // [1, 1, 2, 2, 3, 4]
console.log(mergeSorted([], [2, 5, 8]));              // [2, 5, 8]
console.log(mergeSorted([1, 4, 7], []));              // [1, 4, 7]