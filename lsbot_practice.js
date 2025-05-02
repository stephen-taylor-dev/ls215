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


function maxProductSubarray(array) {
  // guard clauses
  if (array === undefined) return 'Invalid Input';
  if (array.length === 0 ) return 0;
  if (array.length === 1) return array[0];

  let combinations = findCombinations(array);

  let max = -Infinity;

  combinations.forEach(comb => {
    let product = comb.reduce((prod, fac) => {
      fac = fac !== undefined ? fac : 1;
      return prod * fac
    }, 1);

    if (product > max) {
      if (Number.isInteger(product)) {
        max = product === 0 ? 0 : product;
      } else {
        max = Number(product.toFixed(2));
      }
    }
  });

  return max;
}


function findCombinations(arr) {
  let combinations = [];

  for (let sliceSize = 2; sliceSize <= arr.length; sliceSize += 1) {
    for (let sliceIdx = 0; sliceIdx <= arr.length - sliceSize; sliceIdx += 1) {
      combinations.push(arr.slice(sliceIdx, sliceIdx + sliceSize)); 
    }
  }

  return combinations;
}
// [1,2,3,4,5,6,7,8,9, 10]
console.log(findCombinations([1,2,3]));
console.log(findCombinations([2, 3, -2, 4]));
console.log(findCombinations([-2, 0, -1]));



// function maxProductSubarray(array) {
//   if (array === undefined) return 'Invalid Input';
//   if (array.length === 0) return 0;
//   if (array.length === 1) return array[0];
  
//   let maxSoFar = array[0];
//   let minSoFar = array[0]; // We track minimum too because of negative numbers
//   let result = array[0];
  
//   for (let i = 1; i < array.length; i++) {
//     // If we encounter a 0, reset the max and min
//     if (array[i] === 0) {
//       maxSoFar = 0;
//       minSoFar = 0;
//       result = Math.max(0, result);
//       continue;
//     }
    
//     // Store previous values before updating
//     let tempMax = maxSoFar;
//     let tempMin = minSoFar;
    
//     // Update max and min based on current value
//     maxSoFar = Math.max(array[i], Math.max(tempMax * array[i], tempMin * array[i]));
//     minSoFar = Math.min(array[i], Math.min(tempMax * array[i], tempMin * array[i]));
    
//     // Update result if needed
//     result = Math.max(result, maxSoFar);
//   }
  
//   return result;
// }





// // // // Main test cases
console.log(maxProductSubarray([2, 3, -2, 4]));         // 6 (from subarray [2, 3])
console.log(maxProductSubarray([-2, 0, -1]));              // 0 (from subarray [0])
console.log(maxProductSubarray([1, 2, 3, 4]));          // 24 (from subarray [1, 2, 3, 4])
console.log(maxProductSubarray([]));                    // 0

console.log(maxProductSubarray([.5, .2]));          // 0.1
console.log(maxProductSubarray([1]));          // 1 



// // // edge cases
console.log(maxProductSubarray([1, , 2, 3])); // 6
console.log(maxProductSubarray([1,]));         // 1


// // // // error cases
console.log(maxProductSubarray()) // 'Invalid input'