/* 
Problem: 
- Input: string represnting a number for credit card, or csin
- output - true or false

- Questions
  - will always be given 1 arg, what if more than 1 are given?
  - Will it always be a string?
  - Will the check digit always be the last 4 digits of the string after a space
  - Will there every be any other chars beside digits and spaces, such as letters and hyphens
  - will we always be given broken up strings with spaces?
  - will the number we always be given the check digit or will we need to get a substring 
    another number as the description states
  - will there always be an even number of digits
  - will ther be decimal numbers or string of intger chars

- Rules
  - Starting at the right Double the value of every second digit moving to the left 
    in the string
    - if the doubled value is greater than 10, subtract 9 from result
  - If the sum of all the digits does not end in 0 it is not a valid number



Tests / Examples:
2323 2005 7766 3554
4343 4005 5736 6514 => 60
60 % 10 = 0

1111 1111
2121 2121 

505
505


Data structures:
Starting with string
'7766 3554'
String with white spaced remove
'77663554'

Array of string characters
['7', '7', '6', '6', '3', '5', '5','4']

Sum all the numbers
Number

Returning boolean


8763
['8', '7' '6', '3']
['3', '6', '7', '8']
[3, 3, 7, 7]
20
20 % 10 = 0 true

Algorithm:
- Check arg given and not empty string
- Convert string to array of individual string characters

- Map chars to array of numbers with each character adjusted number according to rules
(Iterate from the last character to the first) (use reverse) (use index with map)
    - Convert char to number
    - if one of every second
      (if index % 2 === 1) every second number
      - multiply value by 2
      - if the product is > 9
        - value will be produce - 9
    - return the value to the new array

- Sum the value of the numbers array (reduce)
- return the check of if sum is multiple of 10 (sum % 10 === 0)
*/
function checkValidId(idNumber) {
  let checksum = getLuhnFormulaChecksum(idNumber);
  if (validChecksum(checksum)) return idNumber;

  let itermediateChecksum = getLuhnFormulaChecksum(idNumber + '0');
  let remainder = itermediateChecksum % 10;
  missingNum = 10 - remainder;

  return idNumber + String(missingNum);
}

function getLuhnFormulaChecksum(idNumber) {
  if (!idNumber) return false;
  console.log(idNumber)
  idNumber = idNumber.replace(/[\D]/gi, '');
  let numbers = [...idNumber].reverse().map((numChar, index) => {
    let num = parseInt(numChar, 10);

    if (index % 2 === 1) {
      num *= 2;
      if (num >= 10) {
        num -= 9;
      }
    }

    return num;
  });

  let checksum = numbers.reduce((total, num) => total + num);
  return checksum;
}

function validChecksum(checksum) {
  return checksum % 10 === 0;
}

// Happy Path
// console.log(luhnFormula('87 63') === true);
// console.log(luhnFormula('2323 2005 7766 3554') === true);
// console.log(luhnFormula('2323200577663554') === true);
// console.log(luhnFormula('505') === true);
// console.log(luhnFormula('1111') === false);
// console.log(luhnFormula('1111 1111') === false);
// console.log(luhnFormula('11111111') === false);

// // Bad inputs
// console.log(luhnFormula('') === false);
// console.log(luhnFormula() === false);


// // Edge case
// console.log(luhnFormula('0000 0000 0000 0000') === true);
// console.log(luhnFormula('0000000000000000') === true);
console.log(checkValidId('2323 2005 7766 355'));
console.log(checkValidId('1111') === '11114');
// console.log(checkValidId('2323 2005 7766 355') === '2323 2005 7766 3554');
