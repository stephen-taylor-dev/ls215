// /*

// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly


// Problem
// Input: string array or object representing the sentence skelaton and where a word grammer should be used
// Output: string 

// Exampels Tests Cases

// Template 1
// The "adjectives" brown "nouns" "adverbs"
// "verbs" the "adjectives" "adjectives"
// "nouns", who "adverbs" "verbs" his
// "nouns" and "verbs" around.

// Template 2
// The "noun" "verb" the "noun"'s "noun".

// Questions:
// Do repaced words with apostrophes need to be able to handle correct pluralization.
// Do we need it to only work with the example replacement texts?
// Are we always given a template? what to do if not?
// Are new lines in the output important does it need to look exazctly the sameh
// What about case senitivity 

// Data structure:
// The replacement text
// object with arrays of string

// Template 
// string with replacemnet keys in the template


// Algorithm:
// High level
// 1. Initale output string
// 2. Iterate over every word
// 3. Replace word with a random replacement word if it matches one of the replacement keys

// Low level
// 1. Split string into words array by space
// 2. Iterate over each word in words array, transform replacements to random words where they should
//   - if word is a key with an array as a value
//     - randomly sample element from the array for the word type
//     - return this word to map iteration
//   - else if word is not to be replaced
//     - return current word to iteration
// 3. return string of processed words array using Join back array using spaces.

// randomArrayElement function, 
// takes, an array as arg and samples random element
//   - Use Math.random to get random number betwwn 0 and 1
//   - Multiply that by lenght of array argument 
//   - use integer to get element from the array argument
//   - return sampled element


// */

// const REPLACEMENTS = {
//   adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
//   nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
//   verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
//   adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
// }

// const template1 = 'The adjectives brown nouns adverbs verbs the adjectives adjectives nouns, who adverbs verbs his nouns and verbs around.'

// const template2 = "The nouns verbs the nouns's nouns."

// function madlibs(template) {
//   return template.split(" ").map(word => {
//     let key = word.replace(/[^a-z]/gi, '');
//     if (key in REPLACEMENTS) {
//       let text = sampleRandomElement(REPLACEMENTS[key]);
//       word = word.replace(key, text);
//     }
//     return word;
//   }).join(' ');
// }

// function sampleRandomElement(arr) {
//   let random = Math.random();
//   let idx = parseInt(arr.length * random, 10);
//   return arr[idx];
// }

// console.log(madlibs(template1));
// // // The "sleepy" brown "cat" "noisily"
// // // "licks" the "sleepy" yellow
// // // "dog", who "lazily" "licks" his
// // // "tail" and looks around.

// console.log(madlibs(template1));
// // // The "hungry" brown "cat" "lazily"
// // // "licks" the "noisy" yellow
// // // "dog", who "lazily" "licks" his
// // // "leg" and looks around.

// console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

// console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".

/*
A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6
is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

Copy Code
1  4  3
5  7  9
8  2  6

Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.


Problems:
Input: nested array
Output: transposed nested array (new array)

Rules:
  - cannot modify original array
  - Minimum of a 3 by 3 matrix

Questions
- will matrix always be square? 3 x3 or 4 x 4
- will arg always be givne? how to handle missing args or extra args
- will it always be an array? what to do if not?
- will nested elemetns always be arrays?
- will it be a sparse array? how should we handle the missing eleemtns



Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

[[1, 4, 3], [5, 7, 9], [8, 2, 6]]

Data structure:
start with nested array
output a nested array
eleemtns insdie can be anything.

Algorithm:
intialize a new matrix array
Iterate size of nested arrays times (column - which element in row)
  initialze a new sub array
  Iterate size of nested array times  (row - which row in array)
    gether ith outher loop at the jth array and add value to 
    array[j][i]
    add this element to output sub arraym
  add subarray to new matrix array


*/


// const matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];
// [[1, 4, 3], 
//  [5, 7, 9], 
//  [8, 2, 6]]

// const matrix2 = [
//   [1, 5, 8, 2],
//   [4, 7, 2, 3],
//   [3, 9, 6, 5],
//   [2, 8, 3, 2],
// ];

// function transpose(matrix) {
//   const newMatrix = [];

//   for (let i = 0; i < matrix.length; i += 1) {
//     let subArray = [];
//     for (let j = 0; j < matrix[0].length; j += 1) {
//        console.log(matrix[j][i])
//        subArray.push(matrix[j][i]);
//     }

//     newMatrix.push(subArray);
//   }

//   return newMatrix;
// }

// const newMatrix1 = transpose(matrix1);
// const newMatrix2 = transpose(matrix2);

// console.log(newMatrix1);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix1);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// console.log(newMatrix2);      // [[1, 4, 3, 2], [5, 7, 9, 8], [8, 2, 6, 3], [2, 3, 5, 2]]
// console.log(matrix2);         // [
// //   [1, 5, 8, 2],
// //   [4, 7, 2, 3],
// //   [3, 9, 6, 5],
// //   [2, 8, 3, 2],
// // ]


/*
Problems
outptu wil contain (length of first element in nested array) elements

initialze transposed array
iterate length ength of first element in nested array times
  add an empty array to transposed array

iterate over rows (lenght of rowsin aray times)
  iterate over columns (in the row) (length of the row )
    in the transposed array at the current rowIndex push the current value at the current element in the array by using the rowidx with teh columnindx

return transposed
*/

// function transpose(matrix) {
//   let transposed = [];
  
//   for (let _ = 0; _ < matrix[0].length; _ += 1) {
//     transposed.push([]);
//   }

//   for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
//     for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
//       transposed[colIdx].push(matrix[rowIdx][colIdx]);
//     }
//   }

//   return transposed;
// }

// function transpose(matrix) {
//   const newMatrix = [];

//   for (let i = 0; i < matrix[0].length; i += 1) {
//     let subArray = [];
//     for (let j = 0; j < matrix.length; j += 1) {
//        subArray.push(matrix[j][i]);
//     }

//     newMatrix.push(subArray);
//   }

//   return newMatrix;
// }
// function transpose(matrix) {
//   return matrix[0].map((_, colIdx) => matrix.map(row => row[colIdx]));
// }


// console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
// console.log(transpose([[1, 2], [2, 3], [3, 4], [4, 5]]));      // [[1,2, 3, 4], [2, 3, 4, 5]]
// console.log(transpose([[1]]));                     // [[1]]

// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]