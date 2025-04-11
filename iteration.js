"use strict";
// // forEach
// function myForEach(array, func) {
//   for (let index = 0; index < array.length; index += 1) {
//     func(array[index], index, array);
//   }
// }

// let min = Infinity;
// let getMin = value => (min = value <= min ? value : min);
// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);                        // 3



// filter
// function myFilter(array, func) {
//   let outputArr = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (func(array[index], index, array)) {
//       outputArr.push(array[index]);
//     }
//   }
//   return outputArr;
// }

// let isPythagoreanTriple = function (triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// console.log(myFilter([{ a: 3, b: 4,  c: 5 },
//           { a: 5, b: 12, c: 13 },
//           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// // returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

// function myFilter(array, func) {
//   let result = [];

//   array.forEach(value => {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// function myMap(array, func) {
//   let outputArr = [];
//   for (let index = 0; index < array.length; index += 1) {
//     outputArr.push(func(array[index]));
//   }
//   return outputArr;
// }

// function myMap(array, func) {
//   let result = [];
//   array.forEach(element => result.push(func(element)));
//   return result;
// }

// let plusOne = n => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]


// function myReduce(array, func, initial) {
//   let value;
//   let index;

//   if (initial) {
//     value = initial;
//     index = 0;
//   } else {
//     value = array[0];
//     index = 1;
//   }

//   for (; index < array.length; index += 1) {
//     value = func(value, array[index]);
//   }

//   return value;
// }

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest) === 1);   // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10) === 49);   // 49

function myOwnEvery(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    if (!func(array[index])) {
      return false;
    }
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
