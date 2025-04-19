/*
Problem:
- Input: string
- Output: returns new string - alphabetic characters digits and vice versa

- Rules: 
  - empty string should return empty string
  - ignore case
  - non-alphanumeric chars should be in place as is 
  - if fewere lettes than numbers, add remaing chars to string as is
  
Questions-
- will an arg always be given? how to hnadle if not
- will only 1 arg ever be given?
- will string ever be empty string? what to return if so?
- will punctuation? ever be in the string
- will argument always be a string? if not how to handle
- will characters be uppercase?
- will characters ever be repeated?

- are we only focues on a - c and 1 - 3?
- why is d not converted?

Examples / Test Cases
1a2b3c
[1,2,3]
[a,b,c]


xy2a3b54
[2 3 4 5]
[a b x y]

Algorithm:

get an array of digits
get an array of letters

length of digits 
length of letters


if digits is less than letters
  set letters length to the digits length

if letters is less than digits
  set the digits length to the letters length

sort the digits 
  need create custom to sort by the 
  number of digit string
sort the letters array

return new string from reduce
use to reduce to loop input string swappign respective chars to put in the new string (with index)
  if letter and if letter in letters array
    use lowercase letter to compare
    take indexOf of letter from letters array and return letter of index from letters array
  if digit and digit is in the digits array
    take indexOf digit in digits array and return letter of index from letters array
  else 
    return the char
*/

// function swap(str) {
//   // get the digits and letters in an array
//   let digits = str.match(/[\d]/g) || [];
//   let letters = str.match(/[a-z]/gi) || [];

//   let digitLength = digits.length;
//   let lettersLength = letters.length; 

//   // remove extra digits or letters
//   if (digitLength < lettersLength) {
//     letters.length = digitLength;
//   } else if (lettersLength < digitLength) {
//     digits.length = lettersLength;
//   }

//   // sort the arrays
//   digits.sort(sortDigits);
//   letters.sort(sortLetters);

//   return [...str].reduce((newString, char) => swapChar(newString, char, letters, digits), '');
// }

// function sortDigits(a, b) {
//   a = parseInt(a, 10);
//   b = parseInt(b, 10);
  
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }

// // sort by lowercase value 
// function sortLetters(a, b) {
//   a = a.toLowerCase(a);
//   b = b.toLowerCase(b);

//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }

// function swapChar(string, char, letters, digits) {
//   if (/[a-z]/gi.test(char)) { // letter
//     let letterIndex = letters.indexOf(char);
//     if (letterIndex >= 0) { // if in letters array
//       return string += digits[letterIndex];
//     } else {
//       return string += char;
//     }
//   } else if (/[\d]/g.test(char)) { // digit
//     let digitIndex = digits.indexOf(char);
//     if (digitIndex >= 0) { // if in digits array
//       return string += letters[digitIndex];
//     } else {
//       return string += char;
//     }
//   } else {
//     return string += char;
//   }
// }

const isLetter = char => /[a-z]/i.test(char);
const isDigit = char => /\d/i.test(char);

function swap(str) {
  if (str.length === 0) return str;

  const chars = str.split("");
  const letters = chars.filter(isLetter);
  const nums = chars.filter(isDigit);

  if (letters.length === 0 || nums.length === 0) return str;

  const swapped = chars.map(char => {
    if (isLetter(char) && nums.length > 0) return nums.shift();
    else if (isDigit(char) && letters.length > 0) return letters.shift();

    return char;
  });

  return swapped.join("");
}

// console.log(swap("abcd123"))
// console.log(swap("1a2b3c") === "a1b2c3"); // true
// console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("xy2a3b54") === "45a2b3yx"); // true

// // Fewer letters than numbers
// console.log(swap("12a") === "a21"); // true
// console.log(swap("ab1") === "1ba"); // true
// console.log(swap("abcd") === "abcd"); // true
// console.log(swap("1") === "1"); // true

// // other chars
// console.log(swap("123-4a#b$") === "ab3-41#2$"); // true

// // //uppercase letters
// console.log(swap("ab1CD23") === "12a3DbC"); // true

// // empty string
// console.log(swap("") === ""); // true