/*
Problem:
- Input: array
- Output:  output is new array

- Rules
- cannot mutate input array
- if input not an array return `undefined`
- if empty array input return empty array

Examples/ Test Cases
['a'] ['a']
[7, 3, 5, 2, 9, 1] [3, 5, 2, 9, 1, 7]
[[1, 2], 3,{ a: 2 }]

Data Structure
array 
create a copy of it

Algorithm
use the spread operator to create a copy of the input array
shift the copied array and save result to variable
push this result to the end of the copied end of copied aray
return copied array



*/


// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return [];

//   const copiedArr = [...array];
//   let first = copiedArr.shift();
//   copiedArr.push(first);
//   return copiedArr;
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
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]


/*
Problem
- input: number and a integer
- output: number

- Rules
- move first nth digit to the end
- rotate rest of numbers up to nth digit up one 

Question 
- will the num of digits rotated ever be larger than the number of digits in the number to rotate

Test cases examples
735291, 2 => 735219
012345
length 6 - 2 = 4
4th digit

735291, 3 => 735912
012345
length 6 - 3 => 3

Algorithm:
convert to a string of single char digits
index of element to splice out is length of the array - the nth digit value


Get the nth digit by splicing out the digit
append this digit to the end of the spliced array
join string back together return string converted back to a number


*/


// function rotateRightmostDigits(number, nthDigit) {
//   let digits = [...String(number)];
//   let index = digits.length - nthDigit;

//   let digit = digits.splice(index, 1)[0]; 
//   digits.push(digit);
//   return parseInt(digits.join(''), 10);
// }



// console.log(rotateRightmostDigits(735291, 1) === 735291);   // 735291
// console.log(rotateRightmostDigits(735291, 2) === 735219);   // 735219
// console.log(rotateRightmostDigits(735291, 3) === 735912);   // 735912
// console.log(rotateRightmostDigits(735291, 4) === 732915);   // 732915
// console.log(rotateRightmostDigits(735291, 5) === 752913);   // 752913
// console.log(rotateRightmostDigits(735291, 6) === 352917);   // 352917

/*

Problem:
- input: number
- output: number 

- Rules:


Examples/ Test Cases


Data Structure:


Algorithm:

*/

// function maxRotation(number) {

// }


// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

/*

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next,keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Examples:


Pedac
Problem:
- input: number
- output: number

- Rules
- start at left
- if rotated digits start with 0, drop the leadign zero

- Questions

Examples / TEsts Cases
735291 
352917 0
329175 1
321759 2
321597 3
321579 4

105
051
015
15

105
[1, 0, 5]
[]

8703529146 7321609845


Data structure
string to array
array of digits 

convert back to string again 
convert string number 


Algorithm:
do need to a string to geth length and number rotations
save to a variable - number rotations should be number of digits - 1
loop from 0 to number of rotations
  reassign number to return of rotateRightmostDigits (pass number, index)

array of digits will 
if first element in digits array is a '0'
  shift the array by 1

return using the helper to convert back to a number


helper
  array join convert the array to a number


new Algorithm
start at numbers of digits index 
decrement by 1 each iteration until 1

*/

// function rotateRightmostDigits(number, nthDigit) {
//   let digits = [...String(number)];
//   let index = digits.length - nthDigit;

//   let digit = digits.splice(index, 1)[0]; 
//   digits.push(digit);
//   return parseInt(digits.join(''), 10);
// }


// function maxRotation(number) {
//   let rotations = [...String(number)].length;

//   for (let rotation = rotations; rotation >= 1; rotation -= 1) {
//     number = rotateRightmostDigits(number, rotation);
//   }

//   let elements = [...String(number)]

//   // if (elements[0] === '0') {
//   //   elements.shift()
//   // }

//   return Number(elements.join(''))
// }

// // console.log(rotateRightmostDigits(735291, 1) === 735291);   // 735291
// // console.log(rotateRightmostDigits(735291, 2) === 735219);   // 735219
// // console.log(rotateRightmostDigits(735291, 3) === 735912);   // 735912
// // console.log(rotateRightmostDigits(735291, 4) === 732915);   // 732915
// // console.log(rotateRightmostDigits(735291, 5) === 752913);   // 752913
// // console.log(rotateRightmostDigits(735291, 6) === 352917);   // 352917

// // console.log(rotateRightmostDigits(352917, 5))

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845


/*

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

input: string
output: logs if print statement in input, else outputs nothing

Data Struc
array of strings

output string and numbers

alg:
initialze a register variable 0
initialze a stack variable set to []

split program into command blocks 
loop over command blocks
  if digit 
    set the register to this value
  if PUSH : 
    Push the register value onto the stack. 
    Leave the value in the register.
  if ADD : 
    Pop a value from the stack and add it to the register value, storing the result in the register.
  if SUB : 
    Pop a value from the stack and subtract it from the register value, storing the result in the register.
  if MULT : 
    Pop a value from the stack and multiply it by the register value, storing the result in the register.
  if DIV : 
    Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  if REMAINDER : 
    Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  if POP : 
   Remove the topmost item from the stack and place it in the register.
  if PRINT : 
    Print the register value.

*/

// function minilang(program) {
//   let register = 0;
//   let stack = [];
//   let commands = program.split(' ');
//   commands.forEach(command => {
//     if (/\d/g.test(command)) {
//       register = parseInt(command, 10);
//       return;
//     }

//     switch (command) {
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'ADD':
//         register += stack.pop()
//         break;
//       case 'SUB':
//         register -= stack.pop()
//         break;
//       case 'MULT':
//         register *= stack.pop()
//         break;
//       case 'DIV':
//         register = Math.floor(register / stack.pop());
//         break;
//       case 'REMAINDER':
//         register = Math.floor(register % stack.pop());
//         break;
//       case 'POP':
//         register = stack.pop()
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;
//     }
//   });
// }


// // minilang('PRINT');
// // 0

// // minilang('5 PUSH 3 MULT PRINT');
// // // 15

// // minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // // 5
// // // 3
// // // 8

// // minilang('5 PUSH POP PRINT');
// // 5

// // minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // // 5
// // // 10
// // // 4
// // // 7
// // 3 3 7 
// // 3 3
// // 7 / 3 = 2.33333
// // 3* 2
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // // 8

// minilang('6 PUSH');
// // // (nothing is printed because the `program` argument has no `PRINT` commands)

/*

Write a function that takes a sentence string as an 
argument and returns that string with every occurrence of 
a "number word" — 'zero', 'one', 'two', 'three', 'four', 
'five', 'six', 'seven', 'eight', 'nine' 
— converted to its corresponding digit character.


input: string
output: string with word numbers replaced with digits

Data struc
object of words as keys with values as their respective integers
array of words
returning a string

algo
break string into words split(' ')
transforming array of words with map
  if word is key with value in the number words object 
    return integer value of word key
  else 
    return word

join array of words as a string with space return string


// */
// const NUMBER_WORDS = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 }

// function wordToDigit(sentence) {
//   let words = sentence.split(' ');
//   words = words.map(word => {
//     let cleanedWord = word.replace(/\W/gi, '');

//     if (NUMBER_WORDS[cleanedWord] !== undefined) {
//       return word.replace(cleanedWord, NUMBER_WORDS[cleanedWord]);
//     } else {
//       return word;
//     }
//   });
  
//   return words.join(' ')
// }


// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// // "Please call me at 5 5 5 1 2 3 4. Thanks."


/*
input: bigint
output: bigint

data struc
big int

algo
find each fib sequence until length of digits equals input 
initialze first to 1
initialze second to 2
intialze fib fib = first + second
while loop 
untile length of fib sequence equals numbdigits 
return index 



*/

// function findFibonacciIndexByLength(numDigits) {
//   let prevPlaceholder = 5;
//   let prev = 8;
//   let fib = 13;
//   let index = 7n;

//   while (BigInt(String(fib).length) !== numDigits) {
//     index += 1n;
//     prevPlaceholder = fib;
//     fib += prev;
//     prev = prevPlaceholder;
//   }

//   return index;
// }

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// // console.log(findFibonacciIndexByLength(1000n) === 4782n);
// // console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.


/*
problem
input integer
output integer

rules
- 0 zero will never be input
- stirng swill never be input 

examples/ test cases
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2
1 1 2 3 5 8 13 21 34 55 89 144


data struc
num

algorithm
base case
if arg === 1 
  return 0
if arge == 2 
  return 1
other call fib(n - 1) + fib( n - 2)


// */

// function fibonacci(num) {
//   if (num <= 2) {
//     return 1;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2)
//   }
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765



//imperative fibonacci
// 1 1 2 3 5 8 13 21 34 55 89 144
// 1 2 3 4 5 6 7  8  9  10 11 12

// function fibonacci(number) {
//   if (number <= 2) return 1;

//   let first = 1;
//   let second = 1;
//   let fib;

//   for (let index = 3; index <= number; index += 1) {
//     fib = first + second;
//     first = second;
//     second = fib;
//   }

//   return fib;
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765


// recursive memoization

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 2) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 6765
