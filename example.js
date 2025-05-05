// const { find } = require("prelude-ls");

// function findAllCombinations(array) {
//   const result = [[]];
  
//   for (const element of array) {
//     const currentLength = result.length;
//     for (let i = 0; i < currentLength; i++) {
//       result.push([...result[i], element]);
//     }
//   }
  
//   return result.slice(1); // Remove the empty set if you don't need it
// }

// // Example
// console.log(findAllCombinations([1, 2, 3]));


// // function findCombinations(arr) {
// //   let combinations = [];

// //   for (let sliceSize = 1; sliceSize <= arr.length; sliceSize += 1) {
// //     for (let sliceIdx = 0; sliceIdx + sliceSize <= arr.length; sliceIdx += 1) {
// //       combinations.push(arr.slice(sliceIdx, sliceIdx + sliceSize)); 
// //     }
// //   }
// //   return combinations;}

// //   console.log(findCombinations([1,2,3]));

// function getConsecutiveCombinations(array, n) {
//   if (n > array.length) {
//     return [];
//   }
  
//   const result = [];
  
//   for (let i = 0; i <= array.length - n; i++) {
//     result.push(array.slice(i, i + n));
//   }
  
//   return result;
// }
// console.log(getConsecutiveCombinations([1,2,3,4], 2));



let a = {'a': 3, 'a': 5}


  console.log(a)