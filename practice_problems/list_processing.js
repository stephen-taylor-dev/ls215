// function sum(number) {
//   return String(number).split('').reduce((sum, digit)
//  => sum + Number(digit), 0);
// }

// console.log(sum(23) === 5);   // 5
// console.log(sum(496) === 19);   // 19
// console.log(sum(123456789) === 45);   // 45

// const NUMBERS = [
//   'zero',     'one',
//   'two',      'three',
//   'four',     'five',
//   'six',      'seven',
//   'eight',    'nine',
//   'ten',      'eleven',
//   'twelve',   'thirteen',
//   'fourteen', 'fifteen',
//   'sixteen',  'seventeen',
//   'eighteen', 'nineteen'
// ];


// function alphabeticNumberSort(array) {
//   return [...array].sort((num1, num2) => {
//     if (NUMBERS[num1] < NUMBERS[num2]) {
//       return -1;
//     } else if (NUMBERS[num1] > NUMBERS[num2]) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// function multiplyAllPairs(numList1, numList2) {
//   let output = [];
//   numList1.forEach(num1 => {
//     numList2.forEach(num2 => {
//       output.push(num1 * num2);
//     });
//   });

//   return output.sort((num1, num2) => num1 - num2);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// // [2, 4, 4, 6, 8, 8, 12, 16]

// function sumOfSums(array) {
//   return array.reduce((sum, _, idx) =>
//     sum + array.slice(0, idx + 1).reduce((sum, num) =>
//       sum + num ));
// }


// console.log(sumOfSums([3, 5, 2]));
// // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));
// // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// function leadingSubstrings(string) {
//   string.split('').map((_, idx) => string.slice(0, idx + 1));


//   // let subStrings = [];

//   // for (let idx = 0; idx < string.length; idx += 1) {
//   //   subStrings.push(string.slice(0, idx + 1));
//   // }
//   // return subStrings;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));
//    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// function leadingSubstrings(string) {
//   return string.split('').map((_, idx) => string.slice(0, idx + 1));
// }

// function substrings(string) {
//   return string.split('').flatMap((_, idx) =>
//  leadingSubstrings(string.substring(idx)));
// }


// // console.log(substrings('abcde'));

// // // // returns
// // // [ "a", "ab", "abc", "abcd", "abcde",
// // //   "b", "bc", "bcd", "bcde",
// // //   "c", "cd", "cde",
// // //   "d", "de",
// // //   "e" ]

// function palindromes(string) {
//   let subs = substrings(string);
//   return subs.filter(isPalindrome);
// }

// function isPalindrome(string) {
//   if (string.length <= 1) return false;
//   return string === [...string].reverse().join('');
// }


// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// //[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   //"adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //  "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// //[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// function buyFruit(groceryList) {
//   return groceryList.reduce((allItems, item) => {
//     for (let index = 0; index < item[1]; index += 1) {
//       allItems.push(item[0]);
//     }
//     return allItems;
//   }, []);
// }


// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


// const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//   { id: 105, movement: 'in',  quantity: 10 },
//   { id: 102, movement: 'out', quantity: 17 },
//   { id: 101, movement: 'in',  quantity: 12 },
//   { id: 103, movement: 'out', quantity: 15 },
//   { id: 102, movement: 'out', quantity: 15 },
//   { id: 105, movement: 'in',  quantity: 25 },
//   { id: 101, movement: 'out', quantity: 18 },
//   { id: 102, movement: 'in',  quantity: 22 },
//   { id: 103, movement: 'out', quantity: 15 }, ];


// function transactionsFor(id, transactions) {
//   return transactions.filter(transaction =>
// idInTransactions(id, transaction));
// }

// function idInTransactions(id, transaction) {
//   return id === transaction.id;
// }

// // cool shortcut using object destructuring
// // ls solution
// function transactionsFor(inventoryItem, transactions) {
//   return transactions.filter(({id}) => id === inventoryItem);
// }

// console.log(transactionsFor(101, transactions));
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]


// const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//   { id: 105, movement: 'in',  quantity: 10 },
//   { id: 102, movement: 'out', quantity: 17 },
//   { id: 101, movement: 'in',  quantity: 12 },
//   { id: 103, movement: 'out', quantity: 15 },
//   { id: 102, movement: 'out', quantity: 15 },
//   { id: 105, movement: 'in',  quantity: 25 },
//   { id: 101, movement: 'out', quantity: 18 },
//   { id: 102, movement: 'in',  quantity: 22 },
//   { id: 103, movement: 'out', quantity: 15 }, ];


// function isItemAvailable(id, transactions) {
//   let itemTransactions = transactionsFor(id, transactions);
//   let inventory = itemTransactions.reduce((total, transaction) => {
//     if (transaction.movement === 'in') {
//       total += transaction.quantity;
//     } else {
//       total -= transaction.quantity;
//     }
//     return total;
//   }, 0);

//   return inventory > 0;
// }

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true


// function iterate(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i]);
//   }
// }

// let methods = {
//    foo: function () {
//      console.log('hello');
//    },
// };

// iterate([1, 2, 3], methods.foo);
