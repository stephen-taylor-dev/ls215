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
//   console.log(matrix.map(row => row[1]));
//   return matrix[0].map((_, colIdx) => matrix.map(row => row[colIdx]));
// }


// console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
// console.log(transpose([[1, 2], [2, 3], [3, 4], [4, 5]]));      // [[1,2, 3, 4], [2, 3, 4, 5]]
// console.log(transpose([[1]]));                     // [[1]]

// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

/*

As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

Copy Code
1  5  8
4  7  2
3  9  6
is represented by the following array of arrays:

Copy Code
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

Copy Code
3  4  1
9  7  5
6  2  8
A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

Copy Code
3  4  1
9  7  5
its 90-degree rotation is:

Copy Code
9  3
7  4
5  1
Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

Problem:
Inputs: matrix (array of arrays)
output: new matrix (array of arrays)

Rules
- may be non-square (sides can be on any length)
- rotate 90 degress
  - taking all elements in first column and place them in the first row
  -  order of these elements is last first and first last

Rotated matrix
- number of rows is the length of the first row 
- Length of each row will be the number of rows in original matrix

Data structure
input arg matrix array
new roated matrix array

Algorithm:
1. initialize a new rotated array
2. iterate over the columns, starting at the first (colIdx, 0)
  (iterate up to the size of the first row)
  3. iterate over the each row, to get the element in the current, starting at the last row down to the first row (rowIdx) 
    (iterate from the number of rows in the matrix - 1, down to 0)
    push current element at the rowIdx, colIds to the sub array
  after iterating push sub arry to rotated array
return roated array 

Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

3  4  1
9  7  5
6  2  8


3  4  1
9  7  5

9  3
7  4
5  1

[[1], 
  [2], 
  [3], 
  [4]]
*/


// function rotate90(matrix) {
//   const rotated = [];
//   let numRows = matrix.length;
//   let numColumns = matrix[0].length;

//   for (let colIdx = 0; colIdx < numColumns; colIdx += 1) {
//     let subArray = [];
//     for (let rowIdx = numRows - 1; rowIdx >= 0; rowIdx -= 1) {
//       subArray.push(matrix[rowIdx][colIdx]);
//     }
//     rotated.push(subArray);
//   }

//   return rotated;
// }





// const matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// const matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];
// const matrix3 = [[1]];

// const matrix4 = [[1, 2, 3, 4]];

// const matrix5 = [[1], [2], [3], [4]];

// const newMatrix1 = rotate90(matrix1);
// const newMatrix2 = rotate90(matrix2);
// const newMatrix2Org = rotate90(rotate90(rotate90(rotate90(matrix2))));
// const newMatrix3 = rotate90(matrix3);
// const newMatrix4 = rotate90(matrix4);
// const newMatrix5 = rotate90(matrix5);

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix2Org);   // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
// console.log(newMatrix3);      // `matrix3` --> [[1]]
// console.log(newMatrix4);      // `matrix4` --> [[1], [2], [3], [4]]
// console.log(newMatrix5);      // `matrix5` --> [[4, 3, 2, 1]]



/*
Merge Sorted Lists
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Questions
- will be givne 1 arg? what to do if not? what to with extras
- will we always be given an array ? what should if not an array
- will array elemetns always be integers?
- will they contain special elements such as NaN, Infinity, or -Infinity? if so how should they be sorted?
- will elements be negative?
- will array be a sparse array? 
- will array contian object properties? how to handle that?

Rules
- can't use sort method
- build result array 1 element at a time
- cannot mutate original array
- arrays will not necessarily be the same length
- if multiple elemnts of same value, add all of them that occur

Problem
input: two arrays both sorted
output: 1 array merged 

Examples
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([-5, -1, 9], [-8, 2, 6]);      // [-8, -5, -1, 2, 6, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([0, 3], [1, 5]);         // [0, 1, 3, 5]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

Data structure
two input arrays
new result array


Algorithm:
1. initialze a sorted empty array
2. copy first array 
3. copy second array
4. iterate until 1 of the copied arrays are empty
  1. Compare first element of both arrays
    1. if first array element is < second array elemetns
        set value to shift of first array
    2. if first array element and second array elemtn are eqaul
      set value to shift of first array
      shift second array as well
    3. else second array is less than
      set value to shift of second array
  2. add smallest elemtn to sorted array

5. if any of the arrays are not empty, add remaining elemetns to the end of teh sorted array.
  1. if length of first !== 0
    add remaing elements of first arry to  sort array
  2. else if length of second ! == 0
    add remaining elments o second array to sort array
6. return sorted array


*/


// function merge(orgArr1, orgArr2) {
//   let arr1 = [...orgArr1];
//   let arr2 = [...orgArr2];
//   let sorted = [];

//   while (arr1.length !== 0 && arr2.length !== 0) {
//     if (arr1[0] === arr2[0]) {
//       sorted.push(arr1.shift());
//       arr2.shift;
//     } else if (arr1[0] < arr2[0]) {
//       sorted.push(arr1.shift());
//     } else {
//       sorted.push(arr2.shift());
//     }
//   }

//   if (arr1.length !== 0) {
//     sorted.push(...arr1);
//   } else if (arr2.length !== 0) {
//     sorted.push(...arr2);
//   }

//   return sorted;
// }

// function merge(orgArr1, orgArr2) {
//   let arr1 = [...orgArr1];
//   let arr2 = [...orgArr2];
//   let sorted = [];

//   while (arr1.length !== 0 && arr2.length !== 0) {
//     sorted.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
//   }

//   return sorted.concat(arr1.length > 0 ? arr1 : arr2)
// }



// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// console.log(merge([-5, -1, 9], [-8, 2, 6]));      // [-8, -5, -1, 2, 6, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([0, 3], [1, 5]));         // [0, 1, 3, 5]
