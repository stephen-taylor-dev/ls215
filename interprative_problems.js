/*

p
input: number, representing number of switches
output: output is array, represents lights on after `n` repetitions

- rules
- first light is number 1 

questions
- negative inputs?
- what max value?
- always given integer? will it float value ever?
  - will it ever not be number data type


e
5
0  1  2  3  4
[1, 2, 3, 4, 5]
Round 1: all lights are on [1 +, 2 +, 3 + , 4 + , 5 +]
Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on [1 +, 2 -, 3 + , 4 - , 5 +] 2
Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on [1 +, 2 -, 3 - , 4 - , 5 +] 3
Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on [1 +, 2 -, 3 - , 4 + , 5 +] 4
Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on [1 +, 2 -, 3 - , 4 + , 5 -]


[1,2,3,4,5,6,7,8]
[1+,2+,3+,4+,5+,6+,7+,8+] 1
[1+,2-,3+,4-,5+,6-,7+,8-] 2
[1+,2-,3-,4-,5+,6+,7+,8-] 3
[1+,2-,3-,4+,5+,6+,7+,8+] 4
[1+,2-,3-,4+,5-,6+,7+,8+] 5
[1+,2-,3-,4+,5-,6-,7+,8+] 6
[1+,2-,3-,4+,5-,6-,7-,8+] 7
[1+,2-,3-,4+,5-,6-,7-,8-] 8
[1, 4]

d
object with each light number as a key initialzed to true( representing first pass)
array of numbers

a
set up the switches object 
  for loop from 1 to n (inclusive)
    use loop index to add key for object and set value to true
  
  for loop from 2 up to and including n
    for loop over all the switches
      if switch key is a multiple of loop index 
        switch its status

  return array of the objects keys whose value is true
  


*/


// function lightsOn(numOfSwitches) {
//   const switches = {};

//   // set up initial object and perfomr first round of toggles
//   for (let index = 1; index <= numOfSwitches; index += 1) {
//     switches[index] = true;
//   }
//   // peform the remaining toggles
//   for (let round = 2; round <= numOfSwitches; round += 1) {
//     for (let key in switches) {
//       if (Number(key) % round === 0) {
//         switches[key] = !switches[key];
//       }
//     }
//   }

//   let lightsOn = [];
//   for (let key in switches) {
//     if (switches[key]) {
//       lightsOn.push(Number(key));
//     }
//   }
//   return lightsOn;
// }

// console.log(lightsOn(5));        // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]





/*
p
input: odd integer
output: console.log diamond patter

- rules
  - always given odd integer
  - if 1 just print 1 star
  - middle row in diamond contains n diamonds
  - height of diamond is n stars
  - number of starts in each row increments by odd numbers starting at 1
    -


e

  *
 ***
*****
 ***
  *


    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
d
number
strings

a
high level 
loop n times for the rows
loop for stars start at 1 go to n (halfway point) and then decrement back to 1
going ot use padStart and padEnd to add white space around string of diamonds


halfway point is 
halfway poitn contains n stars
ceil(n / 2) 9 / 2 = 4.5 => 5

initialze variable to halfway point
initialze a star count to 1
loop from 1 up to an including halfway point
  total whitespace is total rows - star count
  outputStars
  internal for loop counter increments by 1
  increment star count by 2

reasign star count to star count - 2
loop from halfway point minus 1 down to and including 1
  total whitespace is total rows - star count
  outputStars
  internal for loop counter increments by 1
  decrement star count by 2

helper function for outputting stars
create star string made of star count *
  pad with total whitespace / 2 to start
  pad with total whitespace / 2 to end
  output stars string to the console
*/

// function outputRowStars(totalRows, stars) {
//   let whitespaceStart = stars + ((totalRows - stars) / 2);
//   let row = '*'.repeat(stars);
//   row = row.padStart(whitespaceStart, ' ');
//   row = row.padEnd(totalRows, ' ');
//   console.log(row);
// }

// function diamond(rows) {
//   let halfway = Math.ceil(rows / 2);
//   let rowStars = 1;

//   // Output top half of diamond
//   for (let row = 1; row <= halfway; row += 1) {
//     outputRowStars(rows, rowStars);
//     rowStars += 2;
//   }

//   // Output lower half of diamond
//   rowStars = rows - 2;
//   for (let row = halfway - 1; row >= 1; row -= 1) {
//     outputRowStars(rows, rowStars);
//     rowStars -= 2;
//   }
// }

// // diamond(1);
// diamond(9);


// Caesar cipher

/*

p
input:
output:
- rules
  - if key value exceeds length of alphabet it wraps from the beginning
  - probably use the remainder operator in js (shift % 26)

e


d


a
use assci values
A-Z 65 - 90
a-z 97 - 122

Get remainder of the shift out of 26
add this value to current number
if sum is greater than zZ
  subtract sum - zZ
  add this value to aA

118 + 3 = 121 y
y 121 rotate 3 
z
a
b 98

abc 3
def

split the string into array of characters
return transformed array
  map eahc char 
    if it is not a letter 
      add char as is to the array
    if it a capital letter
      rotate it 
      add it to array
    if it is lowercase 
      rotate it
      add it to array

rotateCapitalLetter
  takes char as arg
  get letter charCode
  Get remainder of the shift out of 26
  add this value to current char code
  if sum is greater than Z char code
    subtract sum - Z char code
    add this value to A char code
  return string from charcode


rotateLowercaseLetter
takes char as arg
  get letter charCode
  Get remainder of the shift out of 26
  add this value to current char code
  if sum is greater than z char code
    subtract sum - z char code
    add this value to a char code
  return string from charcode


*/

const LETTERS = 26;

function caesarEncrypt(text, rotation) {
  let chars = [...text];
  return chars.map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    } else if (/[A-Z]/.test(char)) {
      return rotateUppercaseLetter(char, rotation);
    } else if (/[a-z]/.test(char)) {
      return rotateLowercaseLetter(char, rotation);
    }
  }).join('');
}

function rotateLowercaseLetter(char, rotation) {
  let code = char.charCodeAt(0);
  let shift = rotation % LETTERS;
  code += shift;
  if (code > 'z'.charCodeAt(0)) {
    shift = code - 'z'.charCodeAt(0);
    code = 'a'.charCodeAt(0) + shift - 1;
  }
  return String.fromCharCode(code);
}


function rotateUppercaseLetter(char, rotation) {
  let code = char.charCodeAt(0);
  let shift = rotation % LETTERS;
  code += shift;
  if (code > 'Z'.charCodeAt(0)) {
    shift = code - 'Z'.charCodeAt(0);
    code = 'A'.charCodeAt(0) + shift - 1;
  }
  return String.fromCharCode(code);
}


// // simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// // wrap around
console.log(caesarEncrypt('y8', 5));       // "d8"
console.log(caesarEncrypt('a', 47));      // "v"

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");   // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('abcdefghijklmnopqrstuvwxyz', 25) === 'zabcdefghijklmnopqrstuvwxy');   // 'zabcdefghijklmnopqrstuvwxy'
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
// // 

// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
// // 

// // edge case
console.log(caesarEncrypt('', 3) === '');       // ""
