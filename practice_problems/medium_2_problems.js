"use strict";
/*

p
input: string
output: object 

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

questions
- always given argument
- always given string


rules
- if none of certain kind find it is 0 percent
- percentage value is integer in a string 

examples test cases


data structure
string
array of characters
array of lowercase
array of uppercase letters
array of everythign else
object with 3 keys and respetive values.

algo
initialze array from regex of lowercase letters
initialze array from regex of uppercase letters
initialze array from regex of everything but letters

get total amount in string
divide counts by string total
for each value 
multiply value by 100 round to nearest 2

return object with counts of each respective array


*/

// letter percentage ration

// function letterPercentages(string) {
//   let lowercase = string.match(/[a-z]/g) || [];
//   let uppercase = string.match(/[A-Z]/g) || [];
//   let neither= string.match(/[^a-z]/gi) || [];
//   let total = string.length;

//   return {lowercase: findPercentage(lowercase.length, total),
//           uppercase: findPercentage(uppercase.length, total),
//           neither: findPercentage(neither.length, total)};

// }

// function findPercentage(amount, total) {
//   return ((amount / total) * 100).toFixed(2);
// }


// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



// Triangle sides

/*
p
input
output

rules
To be a valid triangle, the sum of the lengths of the 
two shortest sides must be greater than the 
length of the longest side, 
and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

qs
- ever given no inputs
- always given 3 or is it less
- always number/integers
- will ever be negative
- 

examples/ test cases


data structur
stick with nubmers
consider array for order
and string return for values


algo
check for valid triangle
  put in an array
  sort the array
    custom sort 
  check all greater than 0
    return 'invalid' if not 
  check if sum of first two is greater than value of the third
    return "invalid" if not

then check what type they are
  if the all sides are the same as the first side
    return equilateral
  if the first two sides equal but do not equal the third
    return iscosceles
  else 
    return scalene
3 3 5
1.5 3 3
3 3 3

*/

// function triangle(s1, s2, s3) {
//   let sides = [s1, s2, s3];

//   sides.sort((a, b) => {
//     if (a < b) return - 1;
//     if (a > b) return 1;
//     return 0;
//   });

//   if (!sides.every(side => side !== 0)) return 'invalid';
//   if (sides[0] + sides[1] <= sides[2]) return 'invalid';

//   if (sides.every(side => side === sides[0])) return 'equilateral';
//   if (sides[0] !== sides[1] && sides[0] !== sides[2] && sides[1] !== sides[2]) return 'scalene'
//   return 'isosceles';
// }


// console.log(triangle(3, 3, 3) === "equilateral");   // "equilateral"
// console.log(triangle(3, 3, 1.5) === "isosceles");   // "isosceles"
// console.log(triangle(3, 4, 5) === "scalene");   // "scalene"
// console.log(triangle(0, 3, 3) === "invalid");   // "invalid"
// console.log(triangle(3, 1, 1) === "invalid");   // "invalid"


// tri-angles

/*
p
input: numbers/integers
output: string
rules
- right angle - one angle === 90
- acute all angles < 90
- obtuse one angle > 90
- Valid triangle
  - sum of angles must == 180 
  - all angles must be > 0
- assume all integers and positive


e

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

d
number
string

a
check if any of angles less than or equal to 0
check if sum of angles is 180
  return 'invalid' if so

if any side === 90
  return "right"
if all sides are < 90 
  return 'acute'
if any side > 90
  return 'obtuce'


*/



// function triangle(a1, a2, a3) {
//   if (a1 === 0 || a2 === 0 || a3 === 3) return 'invalid';
//   if ((a1 + a2 + a3) !== 180) return 'invalid';

//   if (a1 === 90 || a2 === 90 || a3 === 90) return 'right';
//   if (a1 < 90 && a2 < 90 && a3 < 90) return 'acute';
//   if (a1 > 90 || a2 > 90 || a3 > 90) return 'obtuse';

// }

// console.log(triangle(60, 70, 50) === "acute");   // "acute"
// console.log(triangle(30, 90, 60) === "right");   // "right"
// console.log(triangle(120, 50, 10) === "obtuse");   // "obtuse"
// console.log(triangle(0, 90, 90) === "invalid");   // "invalid"
// console.log(triangle(50, 50, 50) === "invalid");   // "invalid"


// unlucky days

/*
p
input: number (integer) representing a year
output: output a number representing the number of frid the 13ths

finding number of fri 13ths in a given year

rules
- input year will be > 1752 

e
1986 had 1 
2015 had 3
2017 had 2

d
date 


a
high level
- need to find all dates with the 13th
- check which day of the week for each date
- 12 of them

- const reprsenting fri week number set to 5
- counter for found fri 13ths set to 0
- loop from 0 to 11 (12 times)
  - variable for date
    - create a date with month (using loop index) and date of 13th and input year
  - get the day of the week 
  - check if it is Fri
  - increment found fri 13ths if so


Friday is the 5th index of days of week index (0 based)
sun mon tue wed thur fri

*/
// const FRI = 5;
// const DAY = 13;

// function fridayThe13ths(year) {
//   let count = 0;

//   for (let month = 0; month < 12; month += 1) {
//     let date = new Date(year, month, DAY);
//     if (date.getDay() === FRI) count += 1;
//   }

//   return count;
// }


// console.log(fridayThe13ths(1986) === 1);   // 1
// console.log(fridayThe13ths(2015) === 3);   // 3
// console.log(fridayThe13ths(2017) === 2);   // 2


// next featured number higher

/*
p
input: integer/number
output: number
- rules
  - featured number is odd number
  - multiple of 7
  - each digit occurs only once
  - largest possible number is 9876543201


e
49 featured
98 not (not odd)
97 not (not multiple of 7)
133 not (3 apprears twice)


d
numbers
string 
array of string chars

a
- start varaible 
- if number is a featured number
  - assign start varaible to input  
- else 
  - find next highest multiple of 7 from number
    - getting reaminder of number modul 7 and take this minus
    - add this result to the input number to get next multip
    - if not odd increment by 7 again
    - assign start to this value
- loop from next start variable up to highest number untile we found a featured number
  - increment by odd multiples of 14 
  - if featured number return number
  - continue loop
- if no number found return "message"

helper method for determing if number is featured number
- number is odd
- number is multiple of 7
- each digit occurs once
  - convert string 
  - split into array
  - initialze object of digits
  - loop over digits
    - if object does not have digit key
      - add digit to object with count of 1
    - else
      - return false

*/

// const MAX = 9876543201;
// const ERROR = 'There is no possible number that fulfills those requirements.';

// function featured(number) {
//   let difference = 7 - (number % 7);
//   let nextMult = number + difference;
//   let start = nextMult % 2 === 1 ? nextMult : nextMult + 7;

//   for (let multiple = start; multiple <= MAX; multiple += 14) {
//     if (isFeaturedNumber(multiple)) return multiple;
//   }

//   return ERROR;
// }


// function isFeaturedNumber(number) {
//   return number % 2 === 1 && number % 7 === 0 && digitsOccurOnce(number);
// }

// function digitsOccurOnce(number) {
//   let digits = [...String(number)];
//   let seenDigits = {};
//   for (let index = 0; index < digits.length; index += 1) {
//     if (digits[index] in seenDigits) {
//       return false;
//     } else {
//       seenDigits[digits[index]] = true;
//     }
//   }

//   return true;
// }


// console.log(featured(12) === 21);   // 21
// console.log(featured(20) === 21);   // 21
// console.log(featured(21) === 35);   // 35
// console.log(featured(997) === 1029);   // 1029
// console.log(featured(1029) === 1043);   // 1043
// console.log(featured(999999) === 1023547);   // 1023547
// console.log(featured(999999987) === 1023456987);   // 1023456987
// console.log(featured(9876543186) === 9876543201);   // 9876543201
// console.log(featured(9876543200) === 9876543201);   // 9876543201
// console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");   // "There is no possible number that fulfills those requirements."

// sum square

/*
p
input: number
output: number
rules
- 1 returns 0 

questoins
- how to handle less than 0
- how to handle 0
- which should be subtracted first?
  - will result always be positive
  should we do sum first

e


d
array of numbers


a
find all numbers from 1 to and including input number
find sum of all numbers (reduce)
find square of sum

transfomr array of numbers by squaring each number
find sum of all these numbers

return differene of the two

helper function for sum of array


*/

// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num);
// }

// function sumSquareDifference(n) {
//   let nums = [];

//   for (let num = 1; num <= n; num += 1) {
//     nums.push(num);
//   }

//   let sqrOfSum = sumArray(nums) ** 2;

//   let sqrNums = nums.map(num => num ** 2);

//   let sumOfSqrs = sumArray(sqrNums);

//   return sqrOfSum - sumOfSqrs;

// }
// console.log(sumSquareDifference(3))

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150



/*
p
input: array
output: same array

- rules
  - mutate array
  - expect input of at least 2 elements
  - arrays contain contain any data types
    - numbers or strings
  - sorting in ascending order
  - can stop iterating once no swap is made

might need some swapping destructing in js

can you modify array while using for each
e


d
array


a
set a flag for loop to false
loop until no swap occurc do while
  use foreach to loop over all elements in array ( with index)
    create variable next elements
    if current element > next element
      set swapped flag to true
      swap elements in the array
        set element at current index to next element
        set element to next index to current element

return the array


*/

// function bubbleSort(arr) {
//   let swapped;

//   do {
//     swapped = false;
//     arr.forEach((elem, idx) => {
//       let nextElem = arr[idx + 1];
//       if (elem > nextElem) {
//         // Swap elements
//         [arr[idx], arr[idx + 1]] = [nextElem, elem];
//         swapped = true
//       }
//     });
//   } while (swapped);
// }


// const array1 = [5, 3];
// console.log(bubbleSort(array1));
// console.log(array1); 

// const array2 = [6, 2, 7, 1, 4];
// console.log(bubbleSort(array2));
// console.log(array2);    // [1, 2, 4, 6, 7]

// const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// console.log(bubbleSort(array3));
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]